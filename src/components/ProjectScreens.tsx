import styles from './ProjectScreens.module.css';

export default function ProjectScreens({ screens }: { screens: { src: string; alt: string }[] }) {
  return (
    <div className={styles.screens} role="group" aria-label="Application screenshots" tabIndex={0}>
      {screens.map((screen) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img key={screen.src} src={screen.src} alt={screen.alt} width={540} height={1224} className={styles.screen} />
      ))}
    </div>
  );
}
