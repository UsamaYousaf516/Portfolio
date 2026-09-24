import Link from 'next/link';
import { site } from '@/lib/site';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="wrap">
        <div className={styles.top}>
          <h2 className={styles.title}>
            Let&apos;s <span className="accent">connect.</span>
          </h2>
          <a href={`mailto:${site.email}`} className={`btn btn-orange btn-arrow ${styles.mail}`}>
            {site.email} <span className="btn-ico">→</span>
          </a>
        </div>
        <div className={styles.cols}>
          <div className={styles.col}>
            <div className={styles.brand}>
              <span className={styles.mono}>UY</span>
              <span className={styles.name}>
                Usama<span className="accent">.</span>
              </span>
            </div>
            <p className={styles.blurb}>Flutter-first product engineer building mobile, web and realtime products that ship.</p>
          </div>
          <div className={styles.col}>
            <span className={styles.label}>Navigate</span>
            <Link href="/" className={styles.link}>Home</Link>
            <Link href="/about" className={styles.link}>About</Link>
            <Link href="/projects" className={styles.link}>Projects</Link>
            <Link href="/contact" className={styles.link}>Contact</Link>
          </div>
          <div className={styles.col}>
            <span className={styles.label}>Elsewhere</span>
            <a href={site.linkedin.href} className={styles.link}>LinkedIn ↗</a>
            <a href={site.github.href} className={styles.link}>GitHub ↗</a>
            <a href={site.resume} className={styles.link}>Resume (PDF) ↓</a>
          </div>
          <div className={styles.col}>
            <span className={styles.label}>Status</span>
            <span className={styles.status}>
              <span className={styles.live} />
              Open to new roles
            </span>
            <span className={styles.plain}>{site.location}</span>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={`wrap ${styles.legal}`}>
          <span>
            © 2026 <span className="accent">Usama Yousaf</span>. Built with care.
          </span>
          <span>Designed &amp; engineered in Pakistan</span>
        </div>
      </div>
    </footer>
  );
}
