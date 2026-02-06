import React from 'react';
import styles from './ChatBubble.module.css';

interface ChatBubbleProps {
    message: string;
    type: 'user' | 'bot';
    timestamp?: Date;
}

export default function ChatBubble({ message, type, timestamp }: ChatBubbleProps) {
    return (
        <div className={`${styles.bubble} ${styles[type]}`}>
            <div className={styles.content}>{message}</div>
            {timestamp && (
                <div className={styles.timestamp}>
                    {timestamp.toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' })}
                </div>
            )}
        </div>
    );
}
