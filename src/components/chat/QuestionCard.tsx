import React from 'react';
import styles from './QuestionCard.module.css';

interface QuestionCardProps {
    options: string[];
    onSelect: (option: string) => void;
}

export default function QuestionCard({ options, onSelect }: QuestionCardProps) {
    return (
        <div className={styles.card}>
            {options.map((option, idx) => (
                <button key={idx} className={styles.option} onClick={() => onSelect(option)}>
                    {option}
                </button>
            ))}
        </div>
    );
}
