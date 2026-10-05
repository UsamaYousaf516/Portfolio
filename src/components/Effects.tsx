'use client';

import { useEffect, useRef } from 'react';
import styles from './Effects.module.css';

/*
 * Site-wide motion, driven by data attributes in the markup:
 *   data-reveal     children fade and rise in as they scroll into view
 *   data-stagger    same, one child after another (80ms apart)
 *   data-magnetic   element drifts toward the pointer; value = strength (e.g. "0.25")
 *   data-parallax   element moves with scroll/pointer; value = factor (e.g. "-0.05")
 *   data-cursor     "view" turns the custom cursor into a VIEW disc
 * Plus the desktop-only custom cursor. Everything is skipped under prefers-reduced-motion.
 */
export default function Effects() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const root = document.documentElement;
    const fine = matchMedia('(pointer: fine)').matches;
    root.classList.add('fx-on');
    const cleanups: Array<() => void> = [];
    const on = <K extends keyof WindowEventMap>(type: K, fn: (e: WindowEventMap[K]) => void) => {
      addEventListener(type, fn, { passive: true });
      cleanups.push(() => removeEventListener(type, fn));
    };

    // Scroll reveal
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting || e.boundingClientRect.top < 0) {
            e.target.setAttribute('data-rv', 'in');
            io.unobserve(e.target);
          }
        }
      },
      // A percentage threshold can never be reached near the top of very tall
      // reveal targets (for example, the projects grid). Reveal as soon as any
      // part enters the active viewport instead.
      { threshold: 0, rootMargin: '0px 0px -40px 0px' },
    );
    const mark = (el: Element, delay = 0, staggered = false) => {
      const rv = el.getAttribute('data-rv');
      if (rv === 'in') return;
      if (rv === null) {
        // Don't hide what's already on screen, except inside staggered groups.
        if (!staggered && el.getBoundingClientRect().top < innerHeight * 0.9) return;
        el.setAttribute('data-rv', '');
        if (delay) (el as HTMLElement).style.transitionDelay = `${delay}ms`;
      }
      // Still hidden: (re)observe. When this effect re-runs (Strict Mode mounts it
      // twice in dev), elements hidden by the previous run lost their observer
      // with io.disconnect() and would otherwise stay invisible for good.
      io.observe(el);
    };

    // Magnetic buttons
    const bindMagnetic = () => {
      if (!fine) return;
      document.querySelectorAll<HTMLElement>('[data-magnetic]:not([data-mg])').forEach((el) => {
        el.setAttribute('data-mg', '');
        const s = parseFloat(el.dataset.magnetic ?? '') || 0.3;
        el.addEventListener('mousemove', (e) => {
          const r = el.getBoundingClientRect();
          const x = (e.clientX - r.left - r.width / 2) * s;
          const y = (e.clientY - r.top - r.height / 2) * s;
          el.style.translate = `${x.toFixed(1)}px ${y.toFixed(1)}px`;
        });
        el.addEventListener('mouseleave', () => {
          el.style.translate = '0 0';
        });
      });
    };

    // Hero parallax (scroll + pointer)
    let px: HTMLElement[] = [];
    let mx = 0, my = 0, tx = 0, ty = 0, raf = 0;
    const tick = () => {
      raf = 0;
      tx += (mx - tx) * 0.12;
      ty += (my - ty) * 0.12;
      const sy = scrollY;
      for (const el of px) {
        const f = parseFloat(el.dataset.parallax ?? '') || 0;
        el.style.translate = `${(tx * f * 40).toFixed(1)}px ${(ty * f * 40 + sy * f).toFixed(1)}px`;
      }
      if (Math.abs(mx - tx) > 0.001 || Math.abs(my - ty) > 0.001) raf = requestAnimationFrame(tick);
    };
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(tick);
    };
    on('scroll', kick);
    if (fine) {
      on('mousemove', (e) => {
        mx = e.clientX / innerWidth - 0.5;
        my = e.clientY / innerHeight - 0.5;
        kick();
      });
    }

    const scan = () => {
      document.querySelectorAll('[data-reveal] > *').forEach((el) => mark(el));
      document.querySelectorAll('[data-stagger]').forEach((g) => {
        Array.from(g.children).forEach((c, i) => mark(c, Math.min(i, 6) * 80, true));
      });
      bindMagnetic();
      px = Array.from(document.querySelectorAll<HTMLElement>('[data-parallax]'));
      kick();
    };

    // Custom cursor (desktop only; the native pointer stays visible)
    const ring = ringRef.current;
    const dot = dotRef.current;
    let craf = 0;
    if (fine && ring && dot) {
      let cx = -100, cy = -100, rx = -100, ry = -100;
      const loop = () => {
        rx += (cx - rx) * 0.2;
        ry += (cy - ry) * 0.2;
        ring.style.transform = `translate(${rx.toFixed(1)}px,${ry.toFixed(1)}px)`;
        craf = Math.abs(cx - rx) > 0.1 || Math.abs(cy - ry) > 0.1 ? requestAnimationFrame(loop) : 0;
      };
      on('mousemove', (e) => {
        cx = e.clientX;
        cy = e.clientY;
        dot.style.transform = `translate(${cx}px,${cy}px)`;
        root.classList.add('uy-cur-on');
        if (!craf) craf = requestAnimationFrame(loop);
        const t = e.target instanceof Element ? e.target : null;
        let s = '';
        if (t) {
          if (t.closest('[data-cursor="view"]')) s = 'view';
          else if (t.closest('input,textarea')) s = 'text';
          else if (t.closest('a,button,select,label,[data-cursor="link"]')) s = 'link';
        }
        if (ring.dataset.s !== s) {
          ring.dataset.s = s;
          ring.textContent = s === 'view' ? 'VIEW' : '';
        }
      });
      const leave = () => root.classList.remove('uy-cur-on');
      document.addEventListener('mouseleave', leave);
      cleanups.push(() => document.removeEventListener('mouseleave', leave));
      on('mousedown', () => (ring.style.scale = '0.85'));
      on('mouseup', () => (ring.style.scale = ''));
    }

    // Re-scan when content changes (client-side navigation, filtering).
    let pending: ReturnType<typeof setTimeout> | undefined;
    const mo = new MutationObserver(() => {
      if (pending) return;
      pending = setTimeout(() => {
        pending = undefined;
        scan();
      }, 120);
    });
    mo.observe(document.body, { childList: true, subtree: true });
    scan();

    return () => {
      mo.disconnect();
      io.disconnect();
      clearTimeout(pending);
      cancelAnimationFrame(raf);
      cancelAnimationFrame(craf);
      cleanups.forEach((f) => f());
      root.classList.remove('fx-on', 'uy-cur-on');
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className={styles.ring} aria-hidden="true" />
      <div ref={dotRef} className={styles.dot} aria-hidden="true" />
    </>
  );
}
