'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { THEME_KEY } from '@/lib/theme';
import styles from './Nav.module.css';

const LINKS = [
  { key: 'home', label: 'Home', href: '/' },
  { key: 'about', label: 'About', href: '/about' },
  { key: 'projects', label: 'Projects', href: '/projects' },
  { key: 'experience', label: 'Experience', href: '/#experience' },
  { key: 'skills', label: 'Skills', href: '/#skills' },
  { key: 'contact', label: 'Contact', href: '/contact' },
];

function activeKey(path: string) {
  if (path.startsWith('/about')) return 'about';
  if (path.startsWith('/projects')) return 'projects';
  if (path.startsWith('/contact')) return 'contact';
  return 'home';
}

export default function Nav() {
  const active = activeKey(usePathname());
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.getAttribute('data-theme') === 'dark');
    const mq = matchMedia('(min-width: 960px)');
    const onWide = () => mq.matches && setOpen(false);
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    mq.addEventListener('change', onWide);
    addEventListener('keydown', onKey);
    return () => {
      mq.removeEventListener('change', onWide);
      removeEventListener('keydown', onKey);
    };
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    if (next) document.documentElement.setAttribute('data-theme', 'dark');
    else document.documentElement.removeAttribute('data-theme');
    try {
      localStorage.setItem(THEME_KEY, next ? 'dark' : 'light');
    } catch {}
    setDark(next);
  };
  const close = () => setOpen(false);

  return (
    <div className={styles.bar}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.brand}>
          <span className={styles.mono}>UY</span>
          <span className={styles.name}>
            Usama<span className="accent">.</span>
          </span>
        </Link>

        <div className={styles.links}>
          {LINKS.map((l) => (
            <Link key={l.key} href={l.href} className={l.key === active ? styles.linkOn : styles.link}>
              {l.label}
            </Link>
          ))}
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            aria-label="Toggle dark mode"
            title="Toggle dark mode"
            onClick={toggleTheme}
            className={styles.theme}
          >
            {dark ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F5A000" strokeWidth="2" strokeLinecap="round">
                <circle cx="12" cy="12" r="4.5" />
                <path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg>
            )}
          </button>
          <Link href="/contact" className={styles.cta} data-magnetic="0.25">
            Contact Me <span className={styles.ctaArrow}>→</span>
          </Link>
          <button
            type="button"
            className={styles.burger}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? (
              <span className={styles.x}>✕</span>
            ) : (
              <>
                <span className={styles.line} />
                <span className={styles.line} />
                <span className={`${styles.line} ${styles.lineShort}`} />
              </>
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className={styles.panel}>
          {LINKS.map((l) =>
            l.key === active ? (
              <Link key={l.key} href={l.href} onClick={close} className={`${styles.pLink} ${styles.pLinkOn}`}>
                {l.label}
                <span className={styles.pDot} />
              </Link>
            ) : (
              <Link key={l.key} href={l.href} onClick={close} className={styles.pLink}>
                {l.label}
                <span className={styles.pArrow}>→</span>
              </Link>
            ),
          )}
          <Link href="/contact" onClick={close} className={styles.pCta}>
            Discuss an Opportunity →
          </Link>
        </div>
      )}
    </div>
  );
}
