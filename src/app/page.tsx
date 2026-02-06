import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Interior Section */}
      <Link href="/interior" className={`${styles.split} ${styles.interior}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>Interior</h2>
          <p className={styles.subtitle}>Design for Living</p>
        </div>
      </Link>

      {/* Architecture Section */}
      <Link href="/architecture" className={`${styles.split} ${styles.architecture}`}>
        <div className={styles.content}>
          <h2 className={styles.title}>Architecture</h2>
          <p className={styles.subtitle}>Build for Eternity</p>
        </div>
      </Link>
    </main>
  );
}
