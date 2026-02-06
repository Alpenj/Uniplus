import React from 'react';
import styles from './admin.module.css';
import Link from 'next/link';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.container}>
            <aside className={styles.sidebar}>
                <div className={styles.logo}>HiveHash<span className={styles.badge}>PMS</span></div>
                <nav className={styles.nav}>
                    <Link href="/admin" className={styles.navItem}>대시보드</Link>
                    <Link href="/admin/projects" className={styles.navItem}>프로젝트 관리</Link>
                    <Link href="/admin/records" className={styles.navItem}>디지털 기록</Link>
                    <Link href="/admin/scm" className={styles.navItem}>자재 SCM</Link>
                    <Link href="/admin/settings" className={styles.navItem}>설정</Link>
                </nav>
                <div className={styles.profile}>
                    <div className={styles.avatar}>PM</div>
                    <div className={styles.info}>
                        <div className={styles.name}>김민수 매니저</div>
                        <div className={styles.role}>Senior PM</div>
                    </div>
                </div>
            </aside>
            <main className={styles.main}>
                {children}
            </main>
        </div>
    );
}
