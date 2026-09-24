import styles from './Placeholder.module.css';

type Props = {
  /** What should eventually go here, e.g. "Portrait cutout (transparent PNG)". */
  label: string;
  /** Real image to show instead of the placeholder. */
  src?: string;
  alt?: string;
  fit?: 'cover' | 'contain';
  /** Drop the striped fill, e.g. for cutouts that sit over a shape. */
  transparent?: boolean;
  className?: string;
};

/** Image area: shows `src` when set, otherwise a striped box with a caption. */
export default function Placeholder({ label, src, alt = '', fit = 'cover', transparent, className }: Props) {
  if (src) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={src} alt={alt} className={`${styles.img} ${className ?? ''}`} style={{ objectFit: fit }} />
    );
  }
  return (
    <div
      className={`${styles.ph} ${transparent ? styles.clear : ''} ${className ?? ''}`}
      role="img"
      aria-label={`Placeholder: ${label}`}
      data-placeholder=""
    >
      <span className={styles.cap}>{label}</span>
    </div>
  );
}
