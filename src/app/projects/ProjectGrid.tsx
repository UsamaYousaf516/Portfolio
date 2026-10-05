'use client';

import Link from 'next/link';
import { useState } from 'react';
import Placeholder from '@/components/Placeholder';
import ProjectScreens from '@/components/ProjectScreens';
import { projectFilters, projects, type ProjectFilter } from '@/lib/projects';
import s from './projects.module.css';

export default function ProjectGrid() {
  const [filter, setFilter] = useState<ProjectFilter>('All');
  const shown = projects
    .map((p, i) => ({ ...p, num: String(i + 1).padStart(2, '0') }))
    .filter((p) => filter === 'All' || p.filters.includes(filter));

  return (
    <div className={`wrap ${s.gridWrap}`} data-reveal="">
      <div className={`scroll-x ${s.chips}`} role="group" aria-label="Filter projects">
        {projectFilters.map((f) => (
          <button key={f} type="button" aria-pressed={f === filter} onClick={() => setFilter(f)} className={f === filter ? s.chipOn : s.chip}>
            {f === filter && <span className={s.chipDot} />}
            {f}
          </button>
        ))}
      </div>

      <div className={s.grid}>
        {shown.map((p) => {
          const tone = p.tone === 'dark' ? s.dark : s.light;
          const img = p.screens ? <ProjectScreens screens={p.screens} /> : <Placeholder label={`${p.title} — ${p.cat}`} src={p.image} alt={p.title} fit={p.imageFit} />;
          const action = p.href === '/' ? 'Explore Website' : p.href === '/contact' ? 'Discuss This Project' : 'Read Case Study';
          const tags = (
            <div className={s.tags}>
              {p.tags.map((t) => (
                <span key={t} className={s.tag}>
                  {t}
                </span>
              ))}
            </div>
          );
          if (p.layout.wide) {
            return (
              <article id={p.id} key={p.title} className={`${s.wide} ${tone}`}>
                <Link href={p.href} className={s.wideImg} data-cursor="view" aria-label={`${action}: ${p.title}`}>
                  <div className={s.zoom}>{img}</div>
                </Link>
                <div className={s.wideText}>
                  <span className={s.kicker}>
                    {p.num} — {p.cat}
                  </span>
                  <h3 className={s.wideTitle}>{p.title}</h3>
                  <p className={s.wideDesc}>{p.desc}</p>
                  {tags}
                  <div className={s.actions}>
                    <Link href={p.href} className={s.caseLink}>
                      <span className={s.caseIco}>↗</span>{action}
                    </Link>
                    {p.appUrl && (
                      <a href={p.appUrl} target="_blank" rel="noopener noreferrer" className={s.caseLink}>
                        Visit {p.title} ↗
                      </a>
                    )}
                    {p.channelUrl && (
                      <a href={p.channelUrl} target="_blank" rel="noopener noreferrer" className={s.caseLink}>
                        View YouTube Channel ↗
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          }
          return (
            <article id={p.id} key={p.title} className={`${s.narrow} ${tone}`} style={{ gridRow: `span ${p.layout.rows}` }}>
              <Link
                href={p.href}
                className={s.narrowImg}
                style={{ minHeight: p.layout.imgHeight }}
                data-cursor="view"
                aria-label={`${action}: ${p.title}`}
              >
                <div className={s.zoom}>{img}</div>
              </Link>
              <div className={s.narrowBody}>
                <div className={s.narrowTop}>
                  <div className={s.narrowTitles}>
                    <span className={s.kickerSm}>
                      {p.num} — {p.cat}
                    </span>
                    <h3 className={s.narrowTitle}>{p.title}</h3>
                  </div>
                  <Link href={p.href} aria-label={`${action}: ${p.title}`} className={s.roundArrow}>
                    ↗
                  </Link>
                </div>
                <p className={s.narrowDesc}>{p.desc}</p>
                {tags}
              </div>
            </article>
          );
        })}
      </div>

      {shown.length === 0 && <p className={s.empty}>No projects match this category. Select All to see my work.</p>}
    </div>
  );
}
