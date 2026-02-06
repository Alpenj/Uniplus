'use client';

import React, { useState, useRef, useEffect } from 'react';
import ChatBubble from './ChatBubble';
import { ChatMessage } from '@/lib/chatFlow';
import styles from './ChatContainer.module.css';

interface ChatContainerProps {
    messages: ChatMessage[];
    children?: React.ReactNode;
}

export default function ChatContainer({ messages, children }: ChatContainerProps) {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // 새 메시지 올 때마다 자동 스크롤
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.logo}>UNIPLUS</div>
                <div className={styles.subtitle}>투명한 인테리어 컨설팅</div>
            </div>

            <div className={styles.messages}>
                {messages.map((msg) => (
                    <ChatBubble key={msg.id} message={msg.content} type={msg.type} timestamp={msg.timestamp} />
                ))}
                <div ref={messagesEndRef} />
            </div>

            {children && <div className={styles.inputArea}>{children}</div>}
        </div>
    );
}
