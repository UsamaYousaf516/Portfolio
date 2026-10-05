import type { Metadata } from 'next';
import Link from 'next/link';
import Eyebrow from '@/components/Eyebrow';
import Placeholder from '@/components/Placeholder';
import Ticker from '@/components/Ticker';
import { toolkit } from '@/lib/home';
import s from './about.module.css';

export const metadata: Metadata = {
  title: 'About — AI Developer & Software Engineer',
  description: 'Meet Usama Yousaf: an AI developer using Claude, ChatGPT and MCP servers, with 3+ years of application development experience and 25+ freelance projects.',
};

const strengths = [
  { n: '01', t: 'AI Development Workflows', d: 'Claude, ChatGPT and MCP servers support my research, prototyping, implementation and debugging across technology stacks.' },
  { n: '02', t: 'Application Engineering', d: 'Three years of Flutter experience, plus web applications and admin dashboards, from interface implementation to release.' },
    { n: '03', t: 'Backend & API Integration', d: 'Authentication, data, payments and external services, using Firebase, Supabase, REST APIs and integrations such as ExerciseDB, FatSecret, Gymmater and Gatekeeper.' },
  { n: '04', t: 'Realtime Communication', d: 'Voice rooms, messaging, live events and push notifications with Agora, ZegoCloud, WebSockets and Firebase Cloud Messaging.' },
];

const timeline = [
  {
    when: '2023 — PRESENT',
    role: 'Flutter Developer',
    org: 'InfiniTech',
    d: 'Develop and maintain mobile applications and Flutter web admin portals. Integrate APIs, Firebase, Supabase and realtime features, resolve production issues and support releases.',
  },
  { when: 'ONGOING', role: 'Freelance Software Developer', org: '25+ projects delivered', d: 'Build mobile and web applications for independent clients, translating requirements into interfaces, integrations and working releases.' },
];

const stack = [...new Set(toolkit.flatMap((category) => category.items.map((tool) => tool.name)))];

const achievements = [
  { t: 'Desktop creator tool used in production', d: 'Built Ranking Video Editor and use it for a YouTube channel with 500K+ views and 700 subscribers.' },
  { t: 'Social gaming & live application development', d: 'Contributed to Ludino’s gaming, live rooms, chat, gifting and purchase flows.' },
    { t: 'Fitness platform development', d: 'Built Restart Fitness progression and video review flows, plus Elite Fitness workout, nutrition and member access integrations.' },
  { t: '25+ freelance projects delivered', d: 'Mobile apps, web applications and backend integrations for independent clients.' },
];

export default function AboutPage() {
  return (
    <>
      <section className={s.hero}>
        <div className={`wrap ${s.heroInner}`}>
          <span className="breadcrumb">
            <Link href="/">Home</Link> <span className="accent">/ About</span>
          </span>
          <h1 className="h1">
            About <span className="accent">Usama.</span>
          </h1>
        </div>
      </section>

      <Ticker />

      <section className="sec-72">
        <div className={`wrap ${s.intro}`} data-reveal="">
          <div className={s.wide}>
            <Placeholder label="Usama Yousaf — AI Developer & Software Engineer" />
          </div>
          <div className={s.introGrid}>
            <div className={`${s.introCard} ${s.r1}`}>
              <span className={s.introHead}>
                <span className={s.icoDark}>✦</span>AI Developer &amp; Software Engineer
              </span>
              <p className={s.introP}>
                I&apos;m Usama, a developer based in Pakistan. I build software with Claude, ChatGPT and MCP servers, backed by 3+ years of application development experience.
              </p>
            </div>
            <div className={`${s.introCard} ${s.r2}`}>
              <span className={s.introHead}>
                <span className={s.icoOrange}>→</span>My Next Role
              </span>
              <p className={s.introP}>
                I&apos;m looking for an AI developer or software engineering role where I can build useful applications, take ownership of features and contribute to a team that values practical problem solving.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-112 dark-sec rule-t rule-b">
        <div className={`wrap ${s.storyRow}`} data-reveal="">
          <div className={s.frame}>
            <div className={s.frameShape} />
            <div className={s.frameImg}>
              <Placeholder label="Portrait cutout" src="/images/usama-about.webp" alt="Usama Yousaf" transparent />
            </div>
          </div>
          <div className={s.storyText}>
            <Eyebrow>Career Story</Eyebrow>
            <h2 className="h2-sm">
              Built on Experience.
              <br />
              <span className="accent">Expanded with AI.</span>
            </h2>
            <p className={s.storyP}>
              My experience spans a Flutter development role at InfiniTech and more than 25 freelance projects. That work includes mobile applications,
              web admin portals, APIs, realtime audio, payments and production releases.
            </p>
            <p className={s.storyP}>Today, Claude, ChatGPT and MCP servers are part of how I develop software. They help me explore solutions and work across stacks. I combine that workflow with hands-on debugging, code review and release experience to turn ideas into applications people can use.</p>
            <div className={s.storyStats}>
              <div className={s.storyStat}>
                <span className={s.storyStatV}>
                  3<span className="accent">+</span>
                </span>
                <span className={s.storyStatL}>Years in Development</span>
              </div>
              <div className={s.storyStat}>
                <span className={s.storyStatV}>
                  25<span className="accent">+</span>
                </span>
                <span className={s.storyStatL}>Freelance Projects Delivered</span>
              </div>
              <div className={s.storyStat}>
                <span className={s.storyStatV}>AI</span>
                <span className={s.storyStatL}>Claude · ChatGPT · MCP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-112">
        <div className={`wrap ${s.stack48}`} data-reveal="">
          <div className={s.centerHead}>
            <Eyebrow>Core Strengths</Eyebrow>
            <h2 className={`h2-sm ${s.thinkTitle}`}>
              <span className="accent">AI tools.</span> Practical engineering. Ownership from start to finish.
            </h2>
          </div>
          <div className={s.strengths}>
            {strengths.map((x) => (
              <div key={x.n} className={s.card}>
                <span className={s.cardNum}>{x.n}</span>
                <h3 className={s.cardTitle}>{x.t}</h3>
                <p className={s.cardP}>{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-b112">
        <div className={`wrap ${s.timelineRow}`} data-reveal="">
          <div className={s.timelineHead}>
            <Eyebrow>Experience</Eyebrow>
            <h2 className="h2-sm">
              Professional
              <br />
              <span className="accent">Experience.</span>
            </h2>
          </div>
          <div className={s.timeline}>
            {timeline.map((t) => (
              <div key={t.role} className={s.tlItem}>
                <span className={s.tlDot} />
                <span className={s.tlWhen}>{t.when}</span>
                <h3 className={s.tlRole}>{t.role}</h3>
                <span className={s.tlOrg}>{t.org}</span>
                <p className={s.cardP}>{t.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sec-112 dark-sec rule-t">
        <div className={`wrap ${s.stack56}`} data-reveal="">
          <div className={s.stack20}>
            <h2 className={s.h2dark}>
              Technical <span className="accent">Skills</span>
            </h2>
            <div className={s.stackChips}>
              {stack.map((x) => (
                <span key={x} className={s.stackChip}>
                  {x}
                </span>
              ))}
            </div>
          </div>
          <div className={s.stack20}>
            <h2 className={s.h2dark}>
              Selected <span className="accent">Contributions</span>
            </h2>
            <div className={s.achGrid}>
              {achievements.map((a) => (
                <div key={a.t} className={s.achCard}>
                  <span className={s.achBar} />
                  <h3 className={s.achTitle}>{a.t}</h3>
                  <p className={s.achP}>{a.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="sec-112">
        <div className={`wrap ${s.cta}`} data-reveal="">
          <h2 className={s.ctaTitle}>See My Work. Let&apos;s Talk About Your Team.</h2>
          <div className={s.ctaBtns}>
            <Link href="/projects" className="btn btn-dark btn-arrow" data-magnetic="0.25">
              View Projects <span className="btn-ico">→</span>
            </Link>
            <Link href="/contact" className={`btn btn-outline-dark ${s.ctaContact}`}>
              Discuss a Role
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
