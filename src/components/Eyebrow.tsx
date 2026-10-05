/** Small label above section headings: two overlapping dots + text. */
export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="eyebrow">
      <span className="eyebrow-dots" aria-hidden="true" />
      {children}
    </span>
  );
}
