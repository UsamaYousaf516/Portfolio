import styles from './Ticker.module.css';

const DEFAULT_ITEMS = [
  'AI Development',
  'Claude & ChatGPT',
  'MCP Servers',
  'Next.js & TypeScript',
  'Cross-Platform Mobile',
  'Web Applications',
  'Firebase',
  'Supabase',
  'REST APIs',
  'Realtime Systems',
  'Software Engineering',
  'Production Delivery',
];

/** Dark scrolling strip. The item list is rendered twice so the loop is seamless. */
export default function Ticker({ items = DEFAULT_ITEMS, speed = 40 }: { items?: string[]; speed?: number }) {
  const row = (k: string, hidden: boolean) =>
    items.map((t, i) => (
      <span key={k + i} className={styles.item} aria-hidden={hidden || undefined}>
        <span className={styles.text}>{t}</span>
        <span className={styles.star}>✦</span>
      </span>
    ));
  return (
    <div className={styles.strip}>
      <div className={styles.track} style={{ animationDuration: `${speed}s` }}>
        {row('a', false)}
        {row('b', true)}
      </div>
    </div>
  );
}
