'use client';

import React from 'react';
import styles from './page.module.css';
import { useData } from '@/lib/DataContext';

export default function AdminDashboard() {
    const { consultations, stats } = useData();

    return (
        <div>
            <h1 className={styles.title}>대시보드</h1>
            <div className={styles.grid}>
                <div className={styles.card}>
                    <h3>전체 프로젝트</h3>
                    <div className={styles.number}>{stats.total}</div>
                    <p className={styles.desc}>누적 상담 건수</p>
                </div>
                <div className={styles.card}>
                    <h3>신규 상담 요청</h3>
                    <div className={`${styles.number} ${styles.danger}`}>{stats.new}</div>
                    <p className={styles.desc}>실시간 업데이트</p>
                </div>
                <div className={styles.card}>
                    <h3>진행중인 공사</h3>
                    <div className={styles.number}>{stats.ongoing}</div>
                    <p className={styles.desc}>계약/시공 단계</p>
                </div>
                <div className={styles.card}>
                    <h3>이슈/리스크</h3>
                    <div className={styles.number}>{stats.risk}</div>
                    <p className={styles.desc}>자재 지연 리스크</p>
                </div>
            </div>

            <h2 className={styles.sectionTitle}>최근 프로젝트 현황</h2>
            <div className={styles.tableCard}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>고객명</th>
                            <th>상담 공간</th>
                            <th>평수</th>
                            <th>예산</th>
                            <th>스타일</th>
                            <th>상태</th>
                            <th>접수일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {consultations.slice(0, 5).map((item) => (
                            <tr key={item.id}>
                                <td style={{ fontWeight: 600 }}>{item.customerName}</td>
                                <td>{item.space}</td>
                                <td>{item.size}평</td>
                                <td>{item.budget}</td>
                                <td>{item.style}</td>
                                <td>
                                    {item.status === 'new' ? (
                                        <span className={styles.statusNew}>신규</span>
                                    ) : item.status === 'consulting' ? (
                                        <span className={styles.statusNormal}>상담중</span>
                                    ) : (
                                        <span className={styles.statusWarning}>{item.status}</span>
                                    )}
                                </td>
                                <td style={{ color: '#999', fontSize: '13px' }}>{new Date(item.date).toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
