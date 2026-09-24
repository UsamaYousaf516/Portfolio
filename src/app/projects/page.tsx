import type { Metadata } from 'next';
import Link from 'next/link';
import Ticker from '@/components/Ticker';
import ProjectGrid from './ProjectGrid';
import s from './projects.module.css';

export const metadata: Metadata = { title: 'Projects' };

export default function ProjectsPage() {
  return (
    <>
      <section className={s.hero}>
        <div className={`wrap ${s.heroInner}`}>
          <span className="breadcrumb">
            <Link href="/">Home</Link> <span className="accent">/ Projects</span>
          </span>
          <h1 className="h1">
            Selected Products
            <br />
            <span className="accent">&amp; Experiments.</span>
          </h1>
          <p className={s.lede}>Production apps, platforms and side builds — each with a short note on what I owned.</p>
        </div>
      </section>

      <Ticker />

      <section className={s.gridSection}>
        <ProjectGrid />
      </section>
    </>
  );
}
