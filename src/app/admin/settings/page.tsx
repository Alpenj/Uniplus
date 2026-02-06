'use client';

import React from 'react';
import styles from '../page.module.css';

export default function SettingsPage() {
    return (
        <div>
            <h1 className={styles.title}>설정</h1>

            <div className={styles.card}>
                <h3>시스템 설정</h3>
                <p className={styles.desc}>현재는 데모 버전입니다.</p>

                <div style={{ marginTop: '20px', padding: '12px', background: '#F5F5F5', borderRadius: '8px' }}>
                    <strong>버전 정보:</strong> HiveHash v1.0.0 (MVP) <br />
                    <strong>환경:</strong> Local Development <br />
                    <strong>데이터 연동:</strong> LocalStorage (Active)
                </div>
            </div>
        </div>
    );
}
