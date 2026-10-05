import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Fragment } from 'react';
import Placeholder from '@/components/Placeholder';
import ProjectScreens from '@/components/ProjectScreens';
import Ticker from '@/components/Ticker';
import { caseStudies, getCaseStudy } from '@/lib/caseStudies';
import s from './case.module.css';

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const cs = getCaseStudy((await params).slug);
  if (!cs) return {};
  const name = [cs.title, cs.titleAccent].filter(Boolean).join(' ');
  return { title: { absolute: `${name} — Case Study` }, description: cs.overview };
}

const galleryShape = [s.g1, s.g2, s.g3, s.g4];

export default async function CaseStudyPage({ params }: Params) {
  const cs = getCaseStudy((await params).slug);
  if (!cs) notFound();
  const name = [cs.title, cs.titleAccent].filter(Boolean).join(' ');

  return (
    <>
      <section className={s.hero}>
        <div className={`wrap ${s.heroInner}`}>
          <span className="breadcrumb">
            <Link href="/">Home</Link> / <Link href="/projects">Projects</Link> <span className="accent">/ {name}</span>
          </span>
          <h1 className="h1">
            {cs.title} {cs.titleAccent && <span className="accent">{cs.titleAccent}</span>}
          </h1>
          <span className={s.cats}>
            {cs.categories.map((c, i) => (
              <Fragment key={c}>
                {i > 0 && <span className="accent"> • </span>}
                {c}
              </Fragment>
            ))}
          </span>
          {cs.previousName && <p className={s.archNote}>Formerly {cs.previousName}</p>}
          {cs.results && (
            <>
              <dl className={s.results}>
                {cs.results.map((result) => (
                  <div key={result.label}>
                    <dt>{result.label}</dt>
                    <dd>{result.value}</dd>
                  </div>
                ))}
              </dl>
              {cs.resultsNote && <p className={s.archNote}>{cs.resultsNote}</p>}
            </>
          )}
          {cs.channelUrl && (
            <a href={cs.channelUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-arrow" data-magnetic="0.25">
              View YouTube Channel <span className="btn-ico">↗</span>
            </a>
          )}
          {cs.appUrl && (
            <a href={cs.appUrl} target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-arrow" data-magnetic="0.25">
              Visit {cs.title} <span className="btn-ico">↗</span>
            </a>
          )}
        </div>
      </section>

      <Ticker items={cs.ticker} />

      <section className={s.heroImgSec}>
        <div className={`wrap ${s.heroImg} ${cs.galleryLayout === 'showcase' ? s.heroImgShowcase : cs.galleryLayout === 'desktop' ? s.desktopHero : ''}`} data-reveal="">
          {cs.heroScreens ? <ProjectScreens screens={cs.heroScreens} /> : <Placeholder label={cs.heroImage.label} src={cs.heroImage.src} alt={`${name} product screens`} fit={cs.galleryLayout === 'desktop' ? 'contain' : 'cover'} />}
        </div>
      </section>

      <section className="sec-72">
        <div className={`wrap ${s.overview}`} data-reveal="">
          <div className={s.overviewText}>
            <h2 className="h2-xs">
              <span className="accent">Project</span> Overview
            </h2>
            <p className={s.lead}>{cs.overview}</p>
            <p className={s.leadMuted}>{cs.context}</p>
          </div>
          <aside className={s.info}>
            <span className={s.infoLabel}>PROJECT INFORMATION</span>
            {cs.info.map((i) => (
              <div key={i.k} className={s.infoRow}>
                <span className={s.infoK}>{i.k}</span>
                <span className={s.infoV}>{i.v}</span>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className="sec-b72">
        <div className={`wrap ${s.pairGrid}`} data-reveal="">
          <div className={s.challenge}>
            <span className={s.pairNum}>01</span>
            <h3 className={s.pairTitle}>The Challenge</h3>
            <p className={s.pairP}>{cs.challenge}</p>
          </div>
          <div className={s.solution}>
            <span className={s.pairNum}>02</span>
            <h3 className={s.pairTitle}>The Solution</h3>
            <p className={s.pairP}>{cs.solution}</p>
          </div>
        </div>
      </section>

      <section className="sec-88 dark-sec rule-t rule-b">
        <div className={`wrap ${s.stack40}`} data-reveal="">
          <h2 className="h2-xs">
            Key <span className="accent">Features</span>
          </h2>
          <div className={s.features}>
            {cs.features.map((f) => (
              <div key={f} className={s.feature}>
                <span className={s.check}>✓</span>
                <span className={s.featureText}>{f}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-88">
        <div className={`wrap ${s.stack40}`} data-reveal="">
          <div className={s.archHead}>
            <h2 className="h2-xs">
              Technical <span className="accent">Integrations</span>
            </h2>
            <p className={s.archNote}>{cs.architectureNote}</p>
          </div>
          <div className={s.arch}>
            {cs.architecture.map((a) => (
              <div key={a.layer} className={s.archCard}>
                <span className={s.archLayer}>{a.layer}</span>
                <span className={s.archTitle}>{a.title}</span>
                <span className={s.archD}>{a.d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-b88">
        <div className={`wrap ${s.contribRow}`} data-reveal="">
          <div className={s.contribHead}>
            <h2 className="h2-xs">
              My <span className="accent">Contribution</span>
            </h2>
          </div>
          <ol className={s.contrib}>
            {cs.contribution.map((c, i) => (
              <li key={c} className={s.contribItem}>
                <span className={s.contribNum}>{String(i + 1).padStart(2, '0')}</span>
                <span className={s.contribText}>{c}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="sec-b88">
        <div className={`wrap ${s.stack32}`} data-reveal="">
          <h2 className="h2-xs">
            Product <span className="accent">Gallery</span>
          </h2>
          <div className={cs.galleryLayout === 'desktop' ? s.desktopGallery : cs.galleryLayout === 'screens' ? s.screenGallery : cs.galleryLayout === 'showcase' ? s.showcaseGallery : s.gallery}>
            {cs.gallery.map((g, i) => (
              cs.galleryLayout === 'desktop' ? (
                <figure key={g.label} className={s.screenFigure}>
                  <a href={g.src} target="_blank" rel="noopener noreferrer" className={s.desktopShot} aria-label={`Open full-size screenshot: ${g.label}`}>
                    <Placeholder label={g.label} src={g.src} alt={g.label} fit="contain" />
                  </a>
                  <figcaption className={s.screenCaption}>{g.label} ↗</figcaption>
                </figure>
              ) : cs.galleryLayout === 'screens' ? (
                <figure key={g.label} className={s.screenFigure}>
                  <div className={s.screenShot}>
                    <Placeholder label={g.label} src={g.src} alt={g.label} fit="contain" />
                  </div>
                  <figcaption className={s.screenCaption}>{g.label}</figcaption>
                </figure>
              ) : cs.galleryLayout === 'showcase' ? (
                <figure key={g.label} className={s.showcaseFigure}>
                  <div className={s.showcaseShot}>
                    <Placeholder label={g.label} src={g.src} alt={g.label} fit="contain" />
                  </div>
                  <figcaption className={s.screenCaption}>{g.label}</figcaption>
                  {g.src && <a href={g.src} target="_blank" rel="noopener noreferrer" className={s.fullImageLink}>Open full-size image ↗</a>}
                </figure>
              ) : (
                <div key={g.label} className={`${s.shot} ${galleryShape[i % galleryShape.length]}`}>
                  <Placeholder label={g.label} src={g.src} alt={g.label} />
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      <section className="sec-b88">
        <div className={`wrap ${s.pairGrid}`} data-reveal="">
          <div className={s.impact}>
            <h3 className={s.pairTitle}>
              Contribution <span className="accent">Summary</span>
            </h3>
            <p className={s.impactP}>{cs.impact}</p>
          </div>
          <div className={s.learned}>
            <h3 className={s.pairTitle}>
              Engineering <span className="accent">Takeaways</span>
            </h3>
            <p className={s.pairP}>{cs.learned}</p>
          </div>
        </div>
      </section>

      <section className="sec-b112">
        <Link href={cs.next.href} className={`wrap ${s.next}`}>
          <div className={s.nextText}>
            <span className={s.nextLabel}>More of My Work</span>
            <span className={s.nextTitle}>{cs.next.title}</span>
          </div>
          <span className={s.nextIco}>→</span>
        </Link>
      </section>
    </>
  );
}
