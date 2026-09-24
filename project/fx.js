(function () {
  if (window.uyFx) return;
  var root = document.documentElement;
  var KEY = 'uy-theme';
  try { if (localStorage.getItem(KEY) === 'dark') root.setAttribute('data-theme', 'dark'); } catch (e) {}

  var D = 'html[data-theme="dark"] ';
  var css = [
    'body{transition:background .35s}',
    D + 'body{background:#1C140E!important;color:#F7F4EA}',
    D + '[style*="background: rgb(247, 244, 234)"]{background:#1C140E!important}',
    D + '[style*="background: rgb(255, 255, 255)"]{background:#261C14!important}',
    D + '[style*="background: rgb(237, 230, 212)"]{background:#30251B!important}',
    D + '[style*="background: rgb(231, 224, 208)"]{background:#3A2E24!important}',
    D + '[style*="background: rgb(255, 246, 224)"]{background:#3A2A14!important}',
    D + '[style*="solid rgb(237, 230, 214)"],' + D + '[style*="solid rgb(231, 224, 208)"],' + D + '[style*="border-top: 1px solid rgb(231, 224, 208)"]{border-color:#3A2E24!important}',
    D + '[style*="color: rgb(23, 16, 11)"]{color:#F7F4EA!important}',
    D + '[style*="solid rgb(23, 16, 11)"]{border-color:#F7F4EA!important}',
    D + '[style*="color: rgb(110, 101, 92)"]{color:#B8AC9F!important}',
    D + '[style*="color: rgb(61, 51, 42)"]{color:#CFC5B8!important}',
    D + '[style*="background: rgb(245, 160, 0)"],' + D + '[style*="background: rgb(245, 160, 0)"] [style*="color: rgb(23, 16, 11)"]{color:#17100B!important}',
    D + '[style*="background: rgb(245, 160, 0)"] [style*="solid rgb(23, 16, 11)"]{border-color:#17100B!important}',
    D + '[style*="background: rgb(23, 16, 11)"][style*="color: rgb(245, 160, 0)"]{color:#F5A000!important}',
    D + 'img[src*="simpleicons"]{filter:invert(1)}',
    D + 'a{color:#F7F4EA}',
    'html.fx-on [data-rv]{opacity:0;translate:0 28px;transition:opacity .8s cubic-bezier(.2,.7,.2,1),translate .8s cubic-bezier(.2,.7,.2,1)}',
    'html.fx-on [data-rv="in"]{opacity:1;translate:0 0}',
    '[data-magnetic]{transition:translate .35s cubic-bezier(.2,.7,.2,1)}',
    '[data-parallax]{will-change:translate}',
    '@media (prefers-reduced-motion: reduce){html.fx-on [data-rv]{opacity:1;translate:none;transition:none}}',
    'html,body{overflow-x:clip}',
    '@media (max-width:960px){' +
      '[data-m="hero-portrait"]{order:1!important;flex:0 1 100%!important;max-width:440px}' +
      '[data-m="hero-pills"]{order:2!important;flex:1 1 100%!important;max-width:none!important;padding-bottom:0!important;align-items:center;text-align:center}' +
      '[data-m="hero-pills"] a{align-self:center!important}' +
      '[data-m="hero-proof"]{order:3!important;flex:1 1 100%!important;max-width:560px!important;flex-direction:row!important;flex-wrap:wrap;justify-content:space-between;padding:20px 0 0!important;border-top:1px solid rgba(128,110,90,0.25)}' +
      '[data-m="hero-proof"]>div[style*="height: 1px"]{display:none}' +
      '[data-m="hero-proof"]>span{flex-basis:100%;text-align:center}' +
      '[data-parallax]{translate:none!important}' +
    '}',
    '@media (max-width:720px){' +
      'section[style*="padding: 112px 20px"]{padding-top:72px!important;padding-bottom:72px!important}' +
      'section[style*="padding: 0px 20px 112px"]{padding-bottom:72px!important}' +
      'section[style*="padding: 88px 20px"]{padding-top:64px!important;padding-bottom:64px!important}' +
      'section[style*="padding: 0px 20px 88px"]{padding-bottom:64px!important}' +
      'section[style*="padding: 72px 20px"]{padding-top:48px!important;padding-bottom:48px!important}' +
      '[data-m="hero-ctas"]{flex-direction:column!important;width:min(300px,calc(100% - 32px));bottom:14px!important}' +
      '[data-m="hero-ctas"]>a{justify-content:center;min-height:54px}' +
      '[data-m="hero-proof"]>div span:first-child{font-size:30px!important}' +
      '[data-m="scroll-x"]{flex-wrap:nowrap!important;overflow-x:auto;margin:0 -20px;padding:0 20px 4px;scrollbar-width:none;-webkit-overflow-scrolling:touch;scroll-snap-type:x proximity}' +
      '[data-m="scroll-x"]::-webkit-scrollbar{display:none}' +
      '[data-m="scroll-x"]>*{flex-shrink:0;white-space:nowrap;scroll-snap-align:start}' +
      '[data-m="hero-pills"] [data-m="scroll-x"]{justify-content:flex-start}' +
      '[data-m="svc"]{grid-template-columns:30px minmax(0,1fr) 36px!important;gap:12px!important;padding:18px!important}' +
      '[data-m="svc"]>span:last-child{width:36px!important;height:36px!important;font-size:15px!important}' +
      '[data-m="proj-img"]{min-height:260px!important;flex-basis:100%!important}' +
      '[data-m="proj-img-s"]{height:240px!important}' +
      '[data-m="pad-card"]{padding:22px!important}' +
      '[data-m="frame"]{max-width:360px!important;margin:0 auto;width:100%}' +
      '[data-m="tick"]{font-size:16px!important}' +
      '[data-m="tick-row"]{gap:24px!important;padding-right:24px!important}' +
    '}',
    '#uy-cur-ring,#uy-cur-dot{position:fixed;left:0;top:0;pointer-events:none;z-index:2147483646;border-radius:50%;opacity:0;transition:opacity .25s}',
    '#uy-cur-ring{width:36px;height:36px;margin:-18px 0 0 -18px;border:1.5px solid #F5A000;display:flex;align-items:center;justify-content:center;font:800 11px Manrope,sans-serif;letter-spacing:.08em;color:#17100B;transition:opacity .25s,width .3s cubic-bezier(.2,.7,.2,1),height .3s cubic-bezier(.2,.7,.2,1),margin .3s cubic-bezier(.2,.7,.2,1),background .3s,border-color .3s}',
    '#uy-cur-dot{width:6px;height:6px;margin:-3px 0 0 -3px;background:#F5A000}',
    '#uy-cur-ring[data-s="link"]{width:54px;height:54px;margin:-27px 0 0 -27px;background:rgba(245,160,0,0.12)}',
    '#uy-cur-ring[data-s="view"]{width:84px;height:84px;margin:-42px 0 0 -42px;background:#F5A000;border-color:#F5A000}',
    '#uy-cur-ring[data-s="text"]{width:4px;height:26px;margin:-13px 0 0 -2px;border-radius:2px;background:#F5A000}',
    'html.uy-cur-on #uy-cur-ring,html.uy-cur-on #uy-cur-dot{opacity:1}',
    'html.uy-cur-on #uy-cur-ring[data-s="view"]~#uy-cur-dot,html.uy-cur-on #uy-cur-ring[data-s="text"]~#uy-cur-dot{opacity:0}'
  ].join('\n');
  var st = document.createElement('style');
  st.id = 'uy-fx';
  st.textContent = css;
  document.head.appendChild(st);

  var listeners = [];
  window.uyFx = {
    isDark: function () { return root.getAttribute('data-theme') === 'dark'; },
    toggleTheme: function () {
      var dark = !this.isDark();
      if (dark) root.setAttribute('data-theme', 'dark'); else root.removeAttribute('data-theme');
      try { localStorage.setItem(KEY, dark ? 'dark' : 'light'); } catch (e) {}
      listeners.forEach(function (f) { f(dark); });
      return dark;
    },
    onTheme: function (f) { listeners.push(f); }
  };

  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var fine = matchMedia('(pointer: fine)').matches;
  if (reduce) return;
  root.classList.add('fx-on');

  // Scroll reveal
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.setAttribute('data-rv', 'in'); io.unobserve(e.target); }
      else if (e.target.getBoundingClientRect().top < 0) { e.target.setAttribute('data-rv', 'in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  function mark(el, delay) {
    if (el.hasAttribute('data-rv') || el.nodeType !== 1) return;
    if (el.getBoundingClientRect().top < innerHeight * 0.9 && !el.closest('[data-stagger]')) return;
    el.setAttribute('data-rv', '');
    if (delay) el.style.transitionDelay = delay + 'ms';
    io.observe(el);
  }
  function scan() {
    document.querySelectorAll('section:not([data-screen-label="Hero"]) > div > *').forEach(function (el) {
      if (!el.closest('[data-stagger]') && !el.hasAttribute('data-stagger')) mark(el);
    });
    document.querySelectorAll('[data-stagger]').forEach(function (g) {
      Array.prototype.forEach.call(g.children, function (c, i) { mark(c, Math.min(i, 6) * 80); });
    });
    bindMagnetic();
    collectParallax();
  }

  // Magnetic buttons
  function bindMagnetic() {
    if (!fine) return;
    document.querySelectorAll('[data-magnetic]:not([data-mg])').forEach(function (el) {
      el.setAttribute('data-mg', '');
      var s = parseFloat(el.getAttribute('data-magnetic')) || 0.3;
      el.addEventListener('mousemove', function (e) {
        var r = el.getBoundingClientRect();
        var x = (e.clientX - r.left - r.width / 2) * s, y = (e.clientY - r.top - r.height / 2) * s;
        el.style.translate = x.toFixed(1) + 'px ' + y.toFixed(1) + 'px';
      });
      el.addEventListener('mouseleave', function () { el.style.translate = '0 0'; });
    });
  }

  // Hero parallax (scroll + pointer)
  var px = [], mx = 0, my = 0, tx = 0, ty = 0, raf = 0;
  function collectParallax() { px = Array.prototype.slice.call(document.querySelectorAll('[data-parallax]')); }
  function tick() {
    raf = 0;
    tx += (mx - tx) * 0.12; ty += (my - ty) * 0.12;
    var sy = scrollY;
    px.forEach(function (el) {
      var f = parseFloat(el.getAttribute('data-parallax')) || 0;
      el.style.translate = (tx * f * 40).toFixed(1) + 'px ' + (ty * f * 40 + sy * f).toFixed(1) + 'px';
    });
    if (Math.abs(mx - tx) > 0.001 || Math.abs(my - ty) > 0.001) raf = requestAnimationFrame(tick);
  }
  function kick() { if (!raf) raf = requestAnimationFrame(tick); }
  addEventListener('scroll', kick, { passive: true });
  if (fine) addEventListener('mousemove', function (e) {
    mx = e.clientX / innerWidth - 0.5; my = e.clientY / innerHeight - 0.5; kick();
  }, { passive: true });

  // Custom cursor (desktop only; native cursor stays visible)
  if (fine) {
    var ring = document.createElement('div'); ring.id = 'uy-cur-ring';
    var dot = document.createElement('div'); dot.id = 'uy-cur-dot';
    var mount = function () { document.body.appendChild(ring); document.body.appendChild(dot); };
    if (document.body) mount(); else document.addEventListener('DOMContentLoaded', mount);
    var cx = -100, cy = -100, rx = -100, ry = -100, craf = 0;
    var loop = function () {
      rx += (cx - rx) * 0.2; ry += (cy - ry) * 0.2;
      ring.style.transform = 'translate(' + rx.toFixed(1) + 'px,' + ry.toFixed(1) + 'px)';
      craf = (Math.abs(cx - rx) > 0.1 || Math.abs(cy - ry) > 0.1) ? requestAnimationFrame(loop) : 0;
    };
    addEventListener('mousemove', function (e) {
      cx = e.clientX; cy = e.clientY;
      dot.style.transform = 'translate(' + cx + 'px,' + cy + 'px)';
      root.classList.add('uy-cur-on');
      if (!craf) craf = requestAnimationFrame(loop);
      var t = e.target && e.target.closest ? e.target : null, s = '';
      if (t) {
        var a = t.closest('a');
        if (a && a.querySelector('image-slot')) s = 'view';
        else if (t.closest('input,textarea')) s = 'text';
        else if (a || t.closest('button,select,label,[data-m="svc"]')) s = 'link';
      }
      if (ring.getAttribute('data-s') !== s) {
        ring.setAttribute('data-s', s);
        ring.textContent = s === 'view' ? 'VIEW' : '';
      }
    }, { passive: true });
    document.addEventListener('mouseleave', function () { root.classList.remove('uy-cur-on'); });
    addEventListener('mousedown', function () { ring.style.scale = '0.85'; });
    addEventListener('mouseup', function () { ring.style.scale = ''; });
  }

  var pending = 0;
  new MutationObserver(function () {
    if (pending) return;
    pending = setTimeout(function () { pending = 0; scan(); }, 120);
  }).observe(document.documentElement, { childList: true, subtree: true });
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scan); else scan();
})();
