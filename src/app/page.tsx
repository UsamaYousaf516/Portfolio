import Link from 'next/link';
import Eyebrow from '@/components/Eyebrow';
import Placeholder from '@/components/Placeholder';
import Services from '@/components/Services';
import Ticker from '@/components/Ticker';
import { aboutStats, heroPills, processSteps, responsibilities, services, toolkit, whyMe } from '@/lib/home';
import { caseStudyHref, site } from '@/lib/site';
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
          Flutter Developer • Product Engineer • AI-Assisted Builder
        </span>
        <h1 className={s.heroTitle}>
          I Build <span className="accent">Digital Products</span>
          <br />
          That Actually{' '}
          <span className={s.ship}>
            Ship.
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
          3+ years building production-ready mobile and web experiences — from polished interfaces to APIs, realtime systems, payments, backend integrations and
          deployment.
        </p>
      </div>

      <div className={`wrap ${s.heroRow}`}>
        <div className={s.proof} data-parallax="-0.03">
          <div className={s.stat}>
            <span className={s.statNum}>
              3<span className="accent">+</span>
            </span>
            <span className={s.statLabel}>Years shipping Flutter in production</span>
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
          <div className={s.disc} data-parallax="-0.05" />
          <div className={s.ring} data-parallax="0.1" />
          <div className={s.cutout} data-parallax="0.03">
            {/* TODO(usama): portrait cutout with a transparent background, e.g. src="/portrait.png" */}
            <Placeholder label="Portrait cutout of Usama (transparent PNG)" fit="cover" transparent />
          </div>
          <div className={s.heroCtas}>
            <Link href="/#projects" className={`btn btn-orange btn-arrow ${s.ctaWork}`} data-magnetic="0.3">
              View My Work <span className="btn-ico">→</span>
            </Link>
            <a href={site.resume} className={`btn ${s.ctaResume}`} data-magnetic="0.3">
              Download Resume ↓
            </a>
          </div>
        </div>

        <div className={s.pillsCol} data-parallax="-0.06">
          <p className={s.quote}>
            <span className={s.quoteMark}>“</span>Flutter is my foundation. The products span mobile, web, backend and realtime.
          </p>
          <div className={`scroll-x ${s.pills}`}>
            {heroPills.map((p, i) => (
              <span key={p} className={i % 3 === 1 ? s.pillOrange : s.pillDark}>
                {p}
              </span>
            ))}
          </div>
          <Link href="/contact" className={s.talk}>
            Let&apos;s Talk →
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
            <Eyebrow>What I Do</Eyebrow>
            <h2 className="h2">
              From Idea to
              <br />
              <span className="accent">Production.</span>
            </h2>
          </div>
          <p className={s.headNote}>Six things I do on real products — usually several at once, on the same project.</p>
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
            <Placeholder label="Portrait cutout (waist-up)" transparent />
          </div>
          <div className={s.frameBadges}>
            <span className={s.badgeDark}>Flutter · 3 yrs</span>
            <span className={s.badgeLight}>Realtime systems</span>
          </div>
        </div>
        <div className={s.aboutText}>
          <Eyebrow>About Me</Eyebrow>
          <h2 className="h2">
            More Than Just
            <br />A <span className="accent">Flutter Developer.</span>
          </h2>
          <p className={s.aboutP}>
            I&apos;m Usama Yousaf, a software developer focused on turning product ideas into reliable, polished digital experiences. Flutter has been my core
            specialization for the past three years, but my work increasingly spans mobile, web, backend services, realtime systems and AI-assisted development.
          </p>
          <p className={s.aboutStrong}>I care about the complete product — how it looks, how it feels, how it performs and how reliably it ships.</p>
          <Link href="/about" className="btn btn-outline-orange btn-arrow-sm" style={{ alignSelf: 'flex-start' }}>
            More About Me <span className={`btn-ico ${s.ico34}`}>→</span>
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
          <Eyebrow>My Toolkit</Eyebrow>
          <h2 className="h2">
            <span className="accent">The Tools</span> Behind
            <br />
            What I Build.
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
              Products I&apos;ve Helped
              <br />
              <span className="accent">Bring to Life.</span>
            </h2>
          </div>
          <Link href="/projects" className={`btn btn-outline-orange btn-arrow-sm ${s.btn14}`} data-magnetic="0.25">
            View All Projects <span className={`btn-ico ${s.ico32}`}>→</span>
          </Link>
        </div>

        {/* 01: light card, image left */}
        <article className={s.p1}>
          <Link href={caseStudyHref} className={s.projImg} data-cursor="view" aria-label="Yaro / Voicely case study">
            <div className={s.zoom}>
              <Placeholder label="Yaro / Voicely — 3–5 app screens (voice room, chat, gifts)" />
            </div>
          </Link>
          <div className={s.projText}>
            <span className={s.kicker}>01 — Social Audio • Realtime • Mobile</span>
            <h3 className={s.projTitle}>Yaro / Voicely</h3>
            <p className={s.projDescMuted}>
              A realtime social audio platform featuring voice rooms, live chat, virtual gifts, in-app currency, social interactions and extensive admin tooling.
            </p>
            <Tags items={['Flutter', 'Agora', 'ZegoCloud', 'WebSockets', 'Firebase', 'In-App Purchases']} variant="light" />
            <Link href={caseStudyHref} className={`btn btn-dark ${s.caseBtn}`} data-magnetic="0.25">
              View Case Study <span className={`btn-ico ${s.ico32}`}>→</span>
            </Link>
          </div>
        </article>

        {/* 02: dark card, image right */}
        <article className={s.p2}>
          <div className={s.projText}>
            <span className={s.kicker}>02 — Fitness Platform • Mobile • Admin</span>
            <h3 className={s.projTitle}>Restart Fitness</h3>
            <p className={s.projDescDark}>
              A structured fitness platform built around progressive workout programs, weekly plan generation, exercise management and external service integrations.
            </p>
            <Tags items={['Flutter', 'APIs', 'Kisi', 'Glofox', 'Admin Platform']} variant="dark" />
            <Link href={caseStudyHref} className={s.caseLink}>
              <span className={s.caseLinkIco}>↗</span>View Case Study
            </Link>
          </div>
          <Link href={caseStudyHref} className={`${s.projImg} ${s.projImgDark}`} data-cursor="view" aria-label="Restart Fitness case study">
            <div className={s.zoom}>
              <Placeholder label="Restart Fitness — program + weekly plan screens, admin panel" />
            </div>
          </Link>
        </article>

        {/* 03 + 04: side by side, varied proportions */}
        <div className={s.pairRow}>
          <article className={s.p3}>
            <Link href={caseStudyHref} className={s.p3Img} data-cursor="view" aria-label="Ludino case study">
              <div className={s.zoom}>
                <Placeholder label="Ludino — game board + profile screens" />
              </div>
            </Link>
            <div className={s.p3Body}>
              <div className={s.p3Top}>
                <div className={s.p3TitleCol}>
                  <span className={s.kickerDark}>03 — Social Gaming</span>
                  <h3 className={s.projTitleSm}>Ludino</h3>
                </div>
                <Link href={caseStudyHref} aria-label="Ludino case study" className={s.roundArrow}>
                  ↗
                </Link>
              </div>
              <p className={s.p3Desc}>A social gaming experience combining Ludo gameplay, profiles, friendships and realtime social features.</p>
              <div className={s.tags}>
                {['Flutter', 'Realtime', 'Gaming', 'Social'].map((t) => (
                  <span key={t} className={s.tagSolidDark}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </article>
          <article className={s.p4}>
            <div className={s.p4Body}>
              <span className={s.kicker}>04 — Production App • Black Tech</span>
              <h3 className={s.projTitleSm}>Parashoot</h3>
              {/* TODO(usama): real one-line description */}
              <p className={s.p4Desc}>[One-line description of your strongest production project — what it does and who uses it.]</p>
              <Tags items={['Flutter', 'Supabase', 'Flutter Web']} variant="light" />
            </div>
            <Link href={caseStudyHref} className={s.p4Img} data-cursor="view" aria-label="Parashoot case study">
              <div className={s.zoom}>
                <Placeholder label="Project 04 — hero screen" />
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
            The Journey
            <br />
            <span className="accent">So Far.</span>
          </h2>
          <p className={s.leftNote}>A full-time product role alongside a steady run of freelance builds for clients across industries.</p>
        </div>
        <div className={s.rightCol}>
          <div className={s.jobCard}>
            <div className={s.jobHead}>
              <div className={s.jobWho}>
                <span className={s.logoDark}>BT</span>
                <div className={s.jobTitles}>
                  <h3 className={s.jobRole}>Flutter Developer</h3>
                  <span className={s.jobOrg}>Black Tech / Parashoot</span>
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
                <h3 className={s.jobRole}>Freelance Development</h3>
                <span className={s.freeSub}>Mobile, web &amp; backend for independent clients</span>
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
          <Eyebrow>My Process</Eyebrow>
          <h2 className="h2">
            How I Turn <span className="accent">Ideas</span>
            <br />
            Into Products.
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
          <Eyebrow>Why Work With Me</Eyebrow>
          <h2 className={`h2 ${s.whyTitle}`}>
            Engineering With
            <br />
            <span className="accent">A Product Mindset.</span>
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
        <h2 className={s.ctaTitle}>Have a Product to Build or a Team I Could Join?</h2>
        <p className={s.ctaText}>
          I&apos;m open to software engineering opportunities, product teams and ambitious projects where I can build useful things and keep growing.
        </p>
        <div className={s.ctaBtns}>
          <Link href="/contact" className={`btn btn-dark btn-lift ${s.ctaTalk}`} data-magnetic="0.25">
            Let&apos;s Talk <span className={`btn-ico ${s.ico38}`}>→</span>
          </Link>
          <a href={site.resume} className="btn btn-outline-dark">
            Download Resume ↓
          </a>
        </div>
      </div>
    </section>
  );
}
