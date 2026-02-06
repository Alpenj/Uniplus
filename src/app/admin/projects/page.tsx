'use client';

import React from 'react';
import styles from '../page.module.css'; // Reusing dashboard styles
import { useData } from '@/lib/DataContext';

export default function ProjectsPage() {
    const { consultations } = useData();

    return (
        <div>
            <h1 className={styles.title}>프로젝트 관리</h1>

            <div className={styles.tableCard}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>고객명</th>
                            <th>연락처</th>
                            <th>공간</th>
                            <th>평수</th>
                            <th>예산</th>
                            <th>스타일</th>
                            <th>상태</th>
                            <th>등록일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {consultations.map((item, index) => (
                            <tr key={item.id}>
                                <td>{consultations.length - index}</td>
                                <td style={{ fontWeight: 600 }}>{item.customerName}</td>
                                <td>{item.phone}</td>
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
