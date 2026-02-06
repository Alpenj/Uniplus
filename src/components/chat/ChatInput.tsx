import React, { useState, KeyboardEvent } from 'react';
import styles from './ChatInput.module.css';

interface ChatInputProps {
    placeholder?: string;
    onSubmit: (value: string) => void;
    type?: 'text' | 'number' | 'tel' | 'date';
}

export default function ChatInput({ placeholder = '입력해주세요...', onSubmit, type = 'text' }: ChatInputProps) {
    const [value, setValue] = useState('');

    const handleSubmit = () => {
        if (!value.trim()) return;
        onSubmit(value);
        setValue('');
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !e.nativeEvent.isComposing) {
            handleSubmit();
        }
    };

    return (
        <div className={styles.container}>
            <input
                className={styles.input}
                type={type}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder={placeholder}
                autoFocus
            />
            <button className={styles.button} onClick={handleSubmit} disabled={!value.trim()}>
                전송
            </button>
        </div>
    );
}
