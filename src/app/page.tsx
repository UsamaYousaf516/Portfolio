import Link from 'next/link';
import Eyebrow from '@/components/Eyebrow';
import Placeholder from '@/components/Placeholder';
import ProjectScreens from '@/components/ProjectScreens';
import Services from '@/components/Services';
import Ticker from '@/components/Ticker';
import { aboutStats, heroPills, processSteps, responsibilities, services, toolkit, whyMe } from '@/lib/home';
import { caseStudyHref, site } from '@/lib/site';
import { nochiScreens } from '@/lib/nochi';
import { ludinoAppUrl, ludinoScreens } from '@/lib/ludino';
import { rankingChannelUrl, rankingEditorHref, rankingEditorImage } from '@/lib/rankingVideoEditor';
import s from './home.module.css';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <ServicesSection />
      <AboutSection />
      <ToolkitSection />
      <ProjectsSection />
      <ExperienceSection />
      <ProcessSection />
      <WhySection />
      <ContactCta />
    </>
  );
}

function Hero() {
  return (
    <section id="home" className={s.hero}>
      <div className={`wrap ${s.heroHead}`}>
        <span className={s.badge}>
          <span className={s.badgeDot}>
            <span />
          </span>
          Usama Yousaf • AI Developer • Software Engineer
        </span>
        <h1 className={s.heroTitle}>
          <span className="accent">AI Developer.</span>
          <br />
          Software That{' '}
          <span className={s.ship}>
            Works.
            <svg className={s.underline} viewBox="0 0 200 20" preserveAspectRatio="none" fill="none" stroke="#F5A000" strokeWidth="5" strokeLinecap="round" aria-hidden="true">
              <path d="M4 14 C 50 4, 120 4, 196 10" />
            </svg>
            <svg className={s.sparkle} width="34" height="34" viewBox="0 0 34 34" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" aria-hidden="true">
              <path d="M6 20 L2 26" />
              <path d="M15 14 L15 4" />
              <path d="M22 20 L31 15" />
            </svg>
          </span>
        </h1>
        <p className={s.heroLede}>
          I use Claude, ChatGPT and MCP servers to build software across mobile and web. With 3+ years of development experience, I bring the engineering skills
          to connect interfaces, APIs and realtime systems — and take them through to release.
        </p>
      </div>

      <div className={`wrap ${s.heroRow}`}>
        <div className={s.proof} data-parallax="-0.03">
          <div className={s.stat}>
            <span className={s.statNum}>
              3<span className="accent">+</span>
            </span>
            <span className={s.statLabel}>Years of software development experience</span>
          </div>
          <div className={s.rule} />
          <div className={s.stat}>
            <span className={s.statNum}>
              25<span className="accent">+</span>
            </span>
            <span className={s.statLabel}>Freelance projects delivered</span>
          </div>
          <div className={s.rule} />
          <span className={s.platforms}>
            Mobile <span className="accent">•</span> Web <span className="accent">•</span> Backend
          </span>
        </div>

        <div className={s.portrait}>
          <div className={s.disc} data-parallax="0.03" />
          <div className={s.ring} data-parallax="0.1" />
          <div className={s.cutout} data-parallax="0.03">
            <Placeholder
              label="Portrait cutout of Usama (transparent PNG)"
              src="/images/usama-hero.webp"
              alt="Usama Yousaf"
              fit="cover"
              transparent
            />
          </div>
          <div className={s.heroCtas}>
            <Link href="/#projects" className={`btn btn-orange btn-arrow ${s.ctaWork}`} data-magnetic="0.3">
              Explore My Projects <span className="btn-ico">→</span>
            </Link>
            {site.resume ? (
              <a href={site.resume} className={`btn ${s.ctaResume}`} data-magnetic="0.3">Download Resume ↓</a>
            ) : (
              <Link href="/contact" className={`btn ${s.ctaResume}`} data-magnetic="0.3">Request My Resume →</Link>
            )}
          </div>
        </div>

        <div className={s.pillsCol} data-parallax="-0.06">
          <p className={s.quote}>
            <span className={s.quoteMark}>“</span>I build with AI, review the code and stay responsible for the result.
          </p>
          <div className={`scroll-x ${s.pills}`}>
            {heroPills.map((p, i) => (
              <span key={p} className={i % 3 === 1 ? s.pillOrange : s.pillDark}>
                {p}
              </span>
            ))}
          </div>
          <Link href="/contact" className={s.talk}>
            Discuss a Role →
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="sec-112">
      <div className={`wrap ${s.stack48}`} data-reveal="">
        <div className={s.splitHead}>
          <div className={s.headCol}>
            <Eyebrow>Development Capabilities</Eyebrow>
            <h2 className="h2">
              From Idea to
              <br />
              <span className="accent">Production.</span>
            </h2>
          </div>
          <p className={s.headNote}>AI development, application engineering and the integrations that turn a prototype into working software.</p>
        </div>
        <Services items={services} />
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="sec-112 dark-sec rule-t rule-b">
      <div className={`wrap ${s.aboutRow}`} data-reveal="">
        <div className={s.frame}>
          <div className={s.frameShape} />
          <div className={s.frameCircle} />
          <div className={s.frameImg}>
            <Placeholder label="Portrait cutout (waist-up)" src="/images/usama-about.webp" alt="Usama Yousaf" transparent />
          </div>
          <div className={s.frameBadges}>
            <span className={s.badgeDark}>3+ years in development</span>
            <span className={s.badgeLight}>AI + Software Engineering</span>
          </div>
        </div>
        <div className={s.aboutText}>
          <Eyebrow>About Me</Eyebrow>
          <h2 className="h2">
            AI Development.
            <br /><span className="accent">Real Experience.</span>
          </h2>
          <p className={s.aboutP}>
            I&apos;m Usama Yousaf, an AI developer and software engineer based in Pakistan. I use Claude, ChatGPT and MCP servers in my development workflow,
            building on three years of Flutter experience and work across web applications, backend integrations and realtime communication.
          </p>
          <p className={s.aboutStrong}>I bring both sides to a team: practical experience delivering software and an AI workflow that helps me explore, build and solve problems across stacks.</p>
          <Link href="/about" className="btn btn-outline-orange btn-arrow-sm" style={{ alignSelf: 'flex-start' }}>
            About My Experience <span className={`btn-ico ${s.ico34}`}>→</span>
          </Link>
        </div>
      </div>
      <div className={`wrap ${s.aboutStats}`} data-reveal="">
        {aboutStats.map((st) => (
          <div key={st.l} className={s.aboutStat}>
            <span className={s.aboutStatV}>{st.v}</span>
            <span className={s.aboutStatL}>
              <span className={s.dash} />
              {st.l}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ToolkitSection() {
  return (
    <section id="skills" className="sec-112">
      <div className={`wrap ${s.stack48}`} data-reveal="">
        <div className={s.centerHead}>
          <Eyebrow>Technical Skills</Eyebrow>
          <h2 className="h2">
            <span className="accent">AI Tools.</span> Engineering Skills.
            <br />
            Practical Experience.
          </h2>
        </div>
        <div data-stagger="" className={s.toolGrid}>
          {toolkit.map((c, i) => (
            <div key={c.cat} className={s.toolCard}>
              <div className={s.toolHead}>
                <span className={s.toolCat}>{c.cat}</span>
                <span className={s.toolNum}>{String(i + 1).padStart(2, '0')}</span>
              </div>
              <div className={s.toolChips}>
                {c.items.map((t) => (
                  <span key={t.name} className={s.toolChip}>
                    {t.icon ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={t.icon} alt="" width={16} height={16} className={s.toolIcon} data-invert="" />
                    ) : (
                      <span className={s.toolDot} />
                    )}
                    {t.name}
                  </span>
                ))}
              </div>
              <div className={s.toolBar} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Tags({ items, variant }: { items: string[]; variant: 'light' | 'dark' }) {
  return (
    <div className={s.tags}>
      {items.map((t, i) => (
        <span key={t} className={i === 0 ? s.tagLead : variant === 'light' ? s.tagLight : s.tagDark}>
          {t}
        </span>
      ))}
    </div>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="sec-112 dark-sec rule-t">
      <div className={`wrap ${s.projStack}`} data-reveal="">
        <div className={`${s.splitHead} ${s.projHead}`}>
          <div className={s.headCol}>
            <Eyebrow>Selected Work</Eyebrow>
            <h2 className="h2">
              Selected Projects.
              <br />
              <span className="accent">My Work in Practice.</span>
            </h2>
          </div>
          <Link href="/projects" className={`btn btn-outline-orange btn-arrow-sm ${s.btn14}`} data-magnetic="0.25">
            View All Projects <span className={`btn-ico ${s.ico32}`}>→</span>
          </Link>
        </div>

        <article className={s.p1}>
          <Link href={rankingEditorHref} className={s.projImg} data-cursor="view" aria-label="Ranking Video Editor case study">
            <div className={s.zoom}>
              <Placeholder label="Ranking Video Editor — Desktop Workspace" src={rankingEditorImage} alt="Ranking Video Editor with project settings and live video preview" fit="contain" />
            </div>
          </Link>
          <div className={s.projText}>
            <span className={s.kicker}>01 — Desktop Application • Creator Tools</span>
            <h3 className={s.projTitle}>Ranking Video Editor</h3>
            <p className={s.projDescMuted}>Built a local-first editor for vertical ranking videos, countdowns and compilations. I use it to produce content for my YouTube channel: 500K+ views and 700 subscribers.</p>
            <Tags items={['Tauri', 'React', 'TypeScript', 'Rust', 'FFmpeg']} variant="light" />
            <div className={s.projectActions}>
              <Link href={rankingEditorHref} className={`btn btn-dark ${s.caseBtn}`} data-magnetic="0.25">
                View Case Study <span className={`btn-ico ${s.ico32}`}>→</span>
              </Link>
              <a href={rankingChannelUrl} target="_blank" rel="noopener noreferrer" className={`btn btn-outline-dark ${s.caseBtn}`}>
                View YouTube Channel ↗
              </a>
            </div>
          </div>
        </article>

        <article className={s.p1}>
          <Link href="/projects/nochi" className={s.projImg} data-cursor="view" aria-label="Nochi case study">
            <div className={s.zoom}><ProjectScreens screens={nochiScreens} /></div>
          </Link>
          <div className={s.projText}>
            <span className={s.kicker}>02 — Short-Form Video • Streaming • Mobile</span>
            <h3 className={s.projTitle}>Nochi</h3>
            <p className={s.projDescMuted}>Built a short-form anime streaming client with a vertical preloading video player, offline downloads, watch progress, a coin economy and subscription tiers.</p>
            <Tags items={['Flutter', 'Provider', 'Dio', 'ExoPlayer', 'In-App Purchases']} variant="light" />
            <Link href="/projects/nochi" className={`btn btn-dark ${s.caseBtn}`} data-magnetic="0.25">
              View Case Study <span className={`btn-ico ${s.ico32}`}>→</span>
            </Link>
          </div>
        </article>

        {/* Ludino: light card, image left */}
        <article className={s.p1}>
          <Link href={caseStudyHref} className={s.projImg} data-cursor="view" aria-label="Ludino case study">
            <div className={s.zoom}>
              <ProjectScreens screens={ludinoScreens} />
            </div>
          </Link>
          <div className={s.projText}>
            <span className={s.kicker}>03 — Social Gaming • Live Rooms • Realtime</span>
            <h3 className={s.projTitle}>Ludino</h3>
            <p className={s.projDescMuted}>
              Worked on the Flutter application for Ludino, formerly Yaro / Voicely, bringing Ludo gameplay together with live rooms, messaging, virtual gifts and in-app currency.
            </p>
            <Tags items={['Flutter', 'Agora', 'ZegoCloud', 'WebSockets', 'Firebase', 'In-App Purchases']} variant="light" />
            <div className={s.projectActions}>
              <Link href={caseStudyHref} className={`btn btn-dark ${s.caseBtn}`} data-magnetic="0.25">
                View Case Study <span className={`btn-ico ${s.ico32}`}>→</span>
              </Link>
              <a href={ludinoAppUrl} target="_blank" rel="noopener noreferrer" className={`btn btn-outline-dark ${s.caseBtn}`}>
                Visit Ludino ↗
              </a>
            </div>
          </div>
        </article>

        {/* Restart Fitness: dark card, image right */}
        <article className={s.p2}>
          <div className={s.projText}>
            <span className={s.kicker}>04 — Fitness Platform • Mobile • Admin</span>
            <h3 className={s.projTitle}>Restart Fitness</h3>
            <p className={s.projDescDark}>
              Built a ten-level fitness journey with 30-day plans, video-based progression tests, weekly challenges and admin review.
            </p>
            <Tags items={['Flutter', 'REST APIs', 'Video Uploads', 'React Admin']} variant="dark" />
            <Link href="/projects/restart-fitness" className={s.caseLink}>
              <span className={s.caseLinkIco}>↗</span>View Case Study
            </Link>
          </div>
          <Link href="/projects/restart-fitness" className={`${s.projImg} ${s.projImgDark}`} data-cursor="view" aria-label="Restart Fitness case study">
            <div className={s.zoom}>
              <Placeholder label="Restart Fitness — member app screens" src="/images/restart-fitness.png" alt="Restart Fitness app screens showing workouts and level progress" />
            </div>
          </Link>
        </article>

        <div className={s.pairRow}>
          <article className={s.p4}>
            <div className={s.p4Body}>
              <span className={s.kicker}>05 — Marketplace • Mobile</span>
              <h3 className={s.projTitleSm}>Imakler UAE</h3>
              <p className={s.p4Desc}>Multi-category listings, buyer–seller chat and a credit wallet for bumps, highlights and featured placement.</p>
              <Tags items={['Flutter', 'REST APIs', 'In-App Purchases']} variant="light" />
              <Link href="/projects/imakler-uae" className={s.caseLink}>
                <span className={s.caseLinkIco}>↗</span>View Case Study
              </Link>
            </div>
            <Link href="/projects/imakler-uae" className={s.p4Img} data-cursor="view" aria-label="Imakler UAE case study">
              <div className={s.zoom}>
                <Placeholder label="Imakler UAE app screens" src="/images/imakler-uae.png" alt="Imakler UAE listing and marketplace app screens" />
              </div>
            </Link>
          </article>
          <article className={s.p4}>
            <div className={s.p4Body}>
              <span className={s.kicker}>06 — Fitness • Membership • Nutrition</span>
              <h3 className={s.projTitleSm}>Elite Fitness</h3>
              <p className={s.p4Desc}>A member app combining workout building, progress tracking and nutrition with gym access integrations.</p>
              <Tags items={['Flutter', 'Supabase', 'ExerciseDB', 'FatSecret']} variant="light" />
              <Link href="/projects/elite-fitness" className={s.caseLink}>
                <span className={s.caseLinkIco}>↗</span>View Case Study
              </Link>
            </div>
            <Link href="/projects/elite-fitness" className={s.p4Img} data-cursor="view" aria-label="Elite Fitness case study">
              <div className={s.zoom}>
                <Placeholder label="Elite Fitness app screens" src="/images/elite-fitness.png" alt="Elite Fitness workout and nutrition app screens" />
              </div>
            </Link>
          </article>
          <article className={s.p4}>
            <div className={s.p4Body}>
              <span className={s.kicker}>07 — Web Development • AI Workflow</span>
              <h3 className={s.projTitleSm}>Portfolio Website</h3>
              <p className={s.p4Desc}>This Next.js and TypeScript portfolio brings together responsive pages, project content and interactive UI, developed with an AI-assisted workflow.</p>
              <Tags items={['Next.js', 'React', 'TypeScript', 'AI-Assisted Development']} variant="light" />
            </div>
            <Link href="/projects#portfolio-website" className={s.p4Img} data-cursor="view" aria-label="Portfolio website project summary">
              <div className={s.zoom}>
                <Placeholder label="Portfolio Website — Next.js & TypeScript" src="/images/portfolio-website.png" alt="Usama Yousaf portfolio homepage with AI developer introduction and portrait" />
              </div>
            </Link>
          </article>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="sec-112">
      <div className={`wrap ${s.twoCol}`} data-reveal="">
        <div className={s.leftCol}>
          <Eyebrow>Experience</Eyebrow>
          <h2 className="h2">
            Professional
            <br />
            <span className="accent">Experience.</span>
          </h2>
          <p className={s.leftNote}>Hands-on application development in a product team, alongside 25+ freelance projects for independent clients.</p>
        </div>
        <div className={s.rightCol}>
          <div className={s.jobCard}>
            <div className={s.jobHead}>
              <div className={s.jobWho}>
                <span className={s.logoDark}>IT</span>
                <div className={s.jobTitles}>
                  <h3 className={s.jobRole}>Flutter Developer</h3>
                  <span className={s.jobOrg}>InfiniTech</span>
                </div>
              </div>
              <span className={s.when}>
                <span className={s.whenDot} />
                2023 — Present
              </span>
            </div>
            <div className={s.resp}>
              {responsibilities.map((r) => (
                <span key={r} className={s.respChip}>
                  {r}
                </span>
              ))}
            </div>
          </div>
          <div className={s.freeCard}>
            <div className={s.jobWho}>
              <span className={s.logoOrange}>FL</span>
              <div className={s.jobTitles}>
                <h3 className={s.jobRole}>Freelance Software Developer</h3>
                <span className={s.freeSub}>Mobile apps, web applications &amp; backend integrations</span>
              </div>
            </div>
            <span className={s.freeCount}>
              25<span className="accent">+</span> <span className={s.freeCountLabel}>completed projects</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  return (
    <section id="process" className="sec-b112">
      <div className={`wrap ${s.stack48}`} data-reveal="">
        <div className={s.centerHead}>
          <Eyebrow>How I Work</Eyebrow>
          <h2 className="h2">
            From <span className="accent">Requirements</span>
            <br />
            to Release.
          </h2>
        </div>
        <div data-stagger="" className={s.processGrid}>
          {processSteps.map((p) => (
            <div key={p.n} className={s.processCard}>
              <div className={s.processTop}>
                <span className={s.processNum}>{p.n}</span>
                <span className={s.processArrow}>{p.arrow}</span>
              </div>
              <h3 className={s.processTitle}>{p.t}</h3>
              <p className={s.processDesc}>{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhySection() {
  return (
    <section className="sec-112 dark-sec rule-t">
      <div className={`wrap ${s.twoCol}`} data-reveal="">
        <div className={s.leftCol}>
          <Eyebrow>What I Bring to a Team</Eyebrow>
          <h2 className={`h2 ${s.whyTitle}`}>
            Build with AI.
            <br />
            <span className="accent">Own the Outcome.</span>
          </h2>
        </div>
        <div data-stagger="" className={s.whyGrid}>
          {whyMe.map((w) => (
            <div key={w.t} className={s.whyCard}>
              <span className={s.whyBar} />
              <h3 className={s.whyTitleSm}>{w.t}</h3>
              <p className={s.whyDesc}>{w.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCta() {
  return (
    <section className="sec-112">
      <div className={`wrap ${s.cta}`} data-reveal="">
        <div className={s.ctaCircle} />
        <div className={s.ctaDisc} />
        <h2 className={s.ctaTitle}>Hiring an AI Developer or Software Engineer?</h2>
        <p className={s.ctaText}>
          I&apos;m open to roles where I can use AI tools, build applications and contribute across the development lifecycle. Let&apos;s talk about your team and the problems you&apos;re solving.
        </p>
        <div className={s.ctaBtns}>
          <Link href="/contact" className={`btn btn-dark btn-lift ${s.ctaTalk}`} data-magnetic="0.25">
            Discuss an Opportunity <span className={`btn-ico ${s.ico38}`}>→</span>
          </Link>
          {site.resume ? (
            <a href={site.resume} className="btn btn-outline-dark">Download Resume ↓</a>
          ) : (
            <Link href="/contact" className="btn btn-outline-dark">Request My Resume →</Link>
          )}
        </div>
      </div>
    </section>
  );
}
