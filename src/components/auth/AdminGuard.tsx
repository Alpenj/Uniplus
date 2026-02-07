'use client';

import React, { useState, useEffect } from 'react';
import styles from './AdminGuard.module.css';

const ACCESS_KEY = 'hivehash_admin_access';
const REQUIRED_PIN = '0000'; // [SECURITY] Default PIN. Change this to an environment variable in production!

export default function AdminGuard({ children }: { children: React.ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [pin, setPin] = useState('');
    const [error, setError] = useState('');

    useEffect(() => {
        const storedKey = sessionStorage.getItem(ACCESS_KEY);
        if (storedKey === REQUIRED_PIN) {
            setIsAuthenticated(true);
        }
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (pin === REQUIRED_PIN) {
            sessionStorage.setItem(ACCESS_KEY, pin);
            setIsAuthenticated(true);
        } else {
            setError('보안 코드가 올바르지 않습니다.');
            setPin('');
        }
    };

    if (isAuthenticated) {
        return <>{children}</>;
    }

    return (
        <div className={styles.guardContainer}>
            <div className={styles.card}>
                <h2 className={styles.title}>관리자 접근 제한</h2>
                <p className={styles.subtitle}>보안 코드를 입력하세요.</p>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        type="password"
                        value={pin}
                        onChange={(e) => setPin(e.target.value)}
                        placeholder="PIN Code"
                        className={styles.input}
                        maxLength={4}
                    />
                    {error && <p className={styles.error}>{error}</p>}
                    <button type="submit" className={styles.button}>
                        확인
                    </button>
                </form>
            </div>
        </div>
    );
}
