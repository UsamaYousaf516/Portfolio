import type { Metadata } from 'next';
import Link from 'next/link';
import Ticker from '@/components/Ticker';
import ProjectGrid from './ProjectGrid';
import s from './projects.module.css';

export const metadata: Metadata = { title: 'Projects', description: 'Selected work by Usama Yousaf across marketplaces, fitness, social gaming, streaming and AI-assisted development, with detailed case studies and engineering contributions.' };

export default function ProjectsPage() {
  return (
    <>
      <section className={s.hero}>
        <div className={`wrap ${s.heroInner}`}>
          <span className="breadcrumb">
            <Link href="/">Home</Link> <span className="accent">/ Projects</span>
          </span>
          <h1 className="h1">
            Selected Projects.
            <br />
            <span className="accent">Practical Engineering.</span>
          </h1>
          <p className={s.lede}>Mobile applications, marketplaces, fitness platforms, realtime systems and AI-assisted development. Explore the technology behind each project and the work I contributed.</p>
        </div>
      </section>

      <Ticker />

      <section className={s.gridSection}>
        <ProjectGrid />
      </section>
    </>
  );
}
