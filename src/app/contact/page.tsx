import type { Metadata } from 'next';
import Link from 'next/link';
import Placeholder from '@/components/Placeholder';
import Ticker from '@/components/Ticker';
import { site } from '@/lib/site';
import ContactForm from './ContactForm';
import s from './contact.module.css';

export const metadata: Metadata = { title: 'Contact' };

const info = [
  { k: 'EMAIL', v: site.email, href: `mailto:${site.email}`, icon: '↗' },
  { k: 'LINKEDIN', v: site.linkedin.label, href: site.linkedin.href, icon: '↗' },
  { k: 'GITHUB', v: site.github.label, href: site.github.href, icon: '↗' },
  { k: 'LOCATION', v: site.location, icon: '•' },
  { k: 'AVAILABILITY', v: 'Replies within 1–2 working days', icon: '•' },
];

export default function ContactPage() {
  return (
    <>
      <section className={s.hero}>
        <div className={`wrap ${s.heroInner}`}>
          <span className="breadcrumb">
            <Link href="/">Home</Link> <span className="accent">/ Contact</span>
          </span>
          <h1 className="h1">
            Let&apos;s Build
            <br />
            <span className="accent">Something Useful.</span>
          </h1>
        </div>
      </section>

      <Ticker />

      <section className="sec-72">
        <div className={`wrap ${s.row}`} data-reveal="">
          <ContactForm />
          <aside className={s.aside}>
            <div className={s.infoCard}>
              {info.map((i) => {
                const body = (
                  <>
                    <span className={s.infoText}>
                      <span className={s.infoK}>{i.k}</span>
                      <span className={s.infoV}>{i.v}</span>
                    </span>
                    <span className={s.infoIco}>{i.icon}</span>
                  </>
                );
                return i.href ? (
                  <a key={i.k} href={i.href} className={`${s.infoRow} ${s.infoLink}`}>
                    {body}
                  </a>
                ) : (
                  <div key={i.k} className={s.infoRow}>
                    {body}
                  </div>
                );
              })}
            </div>
            <div className={s.available}>
              <span className={s.availableDot} />
              <span>Available for full-time roles &amp; select projects</span>
            </div>
            <div className={s.map}>
              <Placeholder label="Small map — Pakistan (optional)" />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
