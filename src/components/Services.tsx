'use client';

import { useState } from 'react';
import type { Service } from '@/lib/home';
import styles from './Services.module.css';

/** Stacked service cards; one is expanded at a time (the first by default). */
export default function Services({ items }: { items: Service[] }) {
  const [open, setOpen] = useState(0);
  return (
    <div data-stagger="" className={styles.list}>
      {items.map((s, i) => {
        const isOpen = open === i;
        const num = `${String(i + 1).padStart(2, '0')}.`;
        const toggle = () => setOpen(isOpen ? -1 : i);
        return (
          <div
            key={s.title}
            role="button"
            tabIndex={0}
            aria-expanded={isOpen}
            onClick={toggle}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggle();
              }
            }}
            data-cursor="link"
            className={`${styles.card} ${isOpen ? styles.open : styles.closed}`}
          >
            <span className={styles.num}>{num}</span>
            {isOpen ? (
              <div className={styles.body}>
                <h3 className={styles.title}>{s.title}</h3>
                <p className={styles.desc}>{s.desc}</p>
                <div className={styles.tags}>
                  {s.tags.map((t) => (
                    <span key={t} className={styles.tag}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ) : (
              <h3 className={styles.title}>{s.title}</h3>
            )}
            <span className={styles.ico} aria-hidden="true">
              ↗
            </span>
          </div>
        );
      })}
    </div>
  );
}
