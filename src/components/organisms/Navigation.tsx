'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navigation.module.css';

export default function Navigation() {
    const pathname = usePathname();

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link href="/">I&A</Link>
            </div>
            <ul className={styles.links}>
                <li>
                    <Link
                        href="/interior"
                        className={pathname.startsWith('/interior') ? styles.active : ''}
                    >
                        Interior
                    </Link>
                </li>
                <li>
                    <Link
                        href="/architecture"
                        className={pathname.startsWith('/architecture') ? styles.active : ''}
                    >
                        Architecture
                    </Link>
                </li>
                <li>
                    <Link
                        href="/contact"
                        className={pathname === '/contact' ? styles.active : ''}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
