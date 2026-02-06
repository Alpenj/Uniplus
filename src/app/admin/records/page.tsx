'use client';

import React from 'react';
import styles from './page.module.css';
import { useData } from '@/lib/DataContext'; // 데이터 연동

export default function DigitalRecordsPage() {
    const { consultations } = useData();

    // MD5 해시 생성 시뮬레이션 (데모용)
    const generateHash = (str: string) => {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            const char = str.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash = hash & hash;
        }
        return '0x' + Math.abs(hash).toString(16) + '...' + Math.abs(hash >> 2).toString(16);
    };

    return (
        <div>
            <h1 className={styles.title}>디지털 기록 (Smart Contract)</h1>
            <p className={styles.subtitle}>모든 상담 내역은 블록체인에 해시값으로 영구 기록되어 위변조가 불가능합니다.</p>

            <div className={styles.recordList}>
                {consultations.map((item) => (
                    <div key={item.id} className={styles.recordCard}>
                        <div className={styles.cardHeader}>
                            <div className={styles.userInfo}>
                                <span className={styles.name}>{item.customerName}</span>
                                <span className={styles.phone}>{item.phone}</span>
                            </div>
                            <div className={styles.timestamp}>{new Date(item.date).toLocaleString()}</div>
                        </div>

                        <div className={styles.content}>
                            <div className={styles.row}>
                                <span className={styles.label}>상담 공간:</span> {item.space} ({item.size})
                            </div>
                            <div className={styles.row}>
                                <span className={styles.label}>예산 범위:</span> {item.budget}
                            </div>
                            <div className={styles.row}>
                                <span className={styles.label}>선호 스타일:</span> {item.style}
                            </div>
                        </div>

                        <div className={styles.hashSection}>
                            <div className={styles.icon}>🔗</div>
                            <div className={styles.hashInfo}>
                                <div className={styles.hashLabel}>Transaction Hash</div>
                                <div className={styles.hashValue}>{generateHash(item.customerName + item.date)}</div>
                            </div>
                            <div className={styles.status}>Recorded on Block #1,024,592</div>
                        </div>
                    </div>
                ))}

                {consultations.length === 0 && (
                    <div className={styles.empty}>기록된 상담 내역이 없습니다.</div>
                )}
            </div>
        </div>
    );
}
