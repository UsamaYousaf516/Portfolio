import type { Metadata } from 'next';
import Link from 'next/link';
import Eyebrow from '@/components/Eyebrow';
import Placeholder from '@/components/Placeholder';
import Ticker from '@/components/Ticker';
import s from './about.module.css';

export const metadata: Metadata = { title: 'About' };

const strengths = [
  { n: '01', t: 'Flutter depth', d: 'Three years of production Flutter: architecture, state management, native integrations and releases.' },
  { n: '02', t: 'Realtime systems', d: 'Voice rooms, live chat, presence and notifications with Agora, ZegoCloud, WebSockets and FCM.' },
  { n: '03', t: 'Integrations', d: 'Firebase, Supabase, REST APIs, payments and third-party services like Kisi and Glofox.' },
  { n: '04', t: 'Range beyond Flutter', d: 'React Native, web admin portals and AI-assisted workflows to get productive in new stacks quickly.' },
];

// TODO(usama): fill in or remove the bracketed earliest role.
const timeline = [
  {
    when: '2023 — PRESENT',
    role: 'Flutter Developer',
    org: 'Black Tech / Parashoot',
    d: 'Mobile apps, Flutter web/admin portals, API and Firebase/Supabase integrations, realtime features, debugging and production deployment.',
  },
  { when: 'ONGOING', role: 'Freelance Developer', org: '25+ completed projects', d: 'Mobile, web and backend builds for independent clients across industries.' },
  { when: '[YEAR]', role: '[Earlier role or education]', org: '[Organisation]', d: '[Optional — remove if not needed.]' },
];

const stack = ['Flutter', 'Dart', 'React Native', 'Firebase', 'Supabase', 'REST APIs', 'WebSockets', 'Provider', 'GetX', 'ChangeNotifier', 'Agora', 'ZegoCloud', 'FCM', 'Figma-to-Code', 'AI Coding Assistants'];

const achievements = [
  { t: 'Shipped a realtime social audio platform', d: 'Voice rooms, gifting and in-app currency on Yaro / Voicely.' },
  { t: 'Integrated physical access & gym systems', d: 'Kisi and Glofox integrations for Restart Fitness.' },
  { t: '25+ freelance projects delivered', d: 'Across mobile, web and backend work for independent clients.' },
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
            <Placeholder label="Wide photo — Usama at his desk / working setup" />
          </div>
          <div className={s.introGrid}>
            <div className={`${s.introCard} ${s.r1}`}>
              <span className={s.introHead}>
                <span className={s.icoDark}>✦</span>Who I am
              </span>
              <p className={s.introP}>
                A software developer from Pakistan with around three years of professional experience, building cross-platform products with Flutter as my core.
              </p>
            </div>
            <div className={`${s.introCard} ${s.r2}`}>
              <span className={s.introHead}>
                <span className={s.icoOrange}>→</span>What I&apos;m looking for
              </span>
              <p className={s.introP}>
                A product team where I can own features end to end — mobile, web and the integrations behind them — and keep growing as an engineer.
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
              <Placeholder label="Portrait cutout" transparent />
            </div>
          </div>
          <div className={s.storyText}>
            <Eyebrow>Career Story</Eyebrow>
            <h2 className="h2-sm">
              Started With Flutter.
              <br />
              <span className="accent">Kept Going.</span>
            </h2>
            <p className={s.storyP}>
              I&apos;m Usama Yousaf, a software developer focused on turning product ideas into reliable, polished digital experiences. Flutter has been my core
              specialization for the past three years, but my work increasingly spans mobile, web, backend services, realtime systems and AI-assisted development.
            </p>
            {/* TODO(usama): career story */}
            <p className={s.storyP}>[Add a few sentences on how you got into development, your freelance years, and joining Black Tech.]</p>
            <div className={s.storyStats}>
              <div className={s.storyStat}>
                <span className={s.storyStatV}>
                  3<span className="accent">+</span>
                </span>
                <span className={s.storyStatL}>Years Experience</span>
              </div>
              <div className={s.storyStat}>
                <span className={s.storyStatV}>
                  25<span className="accent">+</span>
                </span>
                <span className={s.storyStatL}>Freelance Projects</span>
              </div>
              <div className={s.storyStat}>
                <span className={s.storyStatV}>2</span>
                <span className={s.storyStatL}>Platforms: Mobile + Web</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sec-112">
        <div className={`wrap ${s.stack48}`} data-reveal="">
          <div className={s.centerHead}>
            <Eyebrow>How I Think</Eyebrow>
            <h2 className={`h2-sm ${s.thinkTitle}`}>
              I care about the <span className="accent">complete product</span> — how it looks, feels, performs and ships.
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
              The Journey
              <br />
              <span className="accent">So Far.</span>
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
              Technology <span className="accent">Stack</span>
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
              Selected <span className="accent">Achievements</span>
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
          <h2 className={s.ctaTitle}>See what I&apos;ve built, or start a conversation.</h2>
          <div className={s.ctaBtns}>
            <Link href="/projects" className="btn btn-dark btn-arrow" data-magnetic="0.25">
              View Projects <span className="btn-ico">→</span>
            </Link>
            <Link href="/contact" className={`btn btn-outline-dark ${s.ctaContact}`}>
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
