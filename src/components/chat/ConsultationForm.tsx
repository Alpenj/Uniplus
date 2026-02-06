import React, { useState } from 'react';
import styles from './ConsultationForm.module.css';

interface ConsultationFormProps {
    onSubmit: (name: string, phone: string) => void;
}

export default function ConsultationForm({ onSubmit }: ConsultationFormProps) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (name && phone) {
            onSubmit(name, phone);
        }
    };

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <h3 className={styles.title}>상담 신청하기</h3>
            <div className={styles.field}>
                <input
                    type="text"
                    placeholder="이름"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={styles.input}
                    required
                />
            </div>
            <div className={styles.field}>
                <input
                    type="tel"
                    placeholder="연락처 (010-0000-0000)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className={styles.input}
                    required
                />
            </div>
            <button type="submit" className={styles.button}>
                무료 상담 신청하기
            </button>
        </form>
    );
}
