'use client';

import { useEffect, useRef } from 'react';
import styles from './Hero.module.css';

interface HeroProps {
    title: string;
    subtitle: string;
    theme: 'interior' | 'architecture';
    // In a real app, you might pass an image URL or component here
    // For now we'll use CSS gradients/patterns in the style
}

export default function Hero({ title, subtitle, theme }: HeroProps) {
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (bgRef.current) {
                const scrolled = window.scrollY;
                // Parallax speed: background moves slower than scroll
                bgRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={`${styles.hero} ${styles[theme]}`}>
            <div
                ref={bgRef}
                className={styles.background}
                style={{
                    // Placeholder backgrounds - normally this would be an Image component or URL
                    backgroundImage: theme === 'interior'
                        ? 'linear-gradient(45deg, #1a1a1a 25%, #2a2a2a 25%, #2a2a2a 50%, #1a1a1a 50%, #1a1a1a 75%, #2a2a2a 75%, #2a2a2a 100%)' // Warm pattern
                        : 'radial-gradient(circle at 50% 50%, #333 1px, transparent 1px), radial-gradient(circle at 0% 0%, #333 1px, transparent 1px)' // Structural pattern
                    ,
                    backgroundSize: theme === 'interior' ? '40px 40px' : '30px 30px',
                    backgroundColor: theme === 'interior' ? '#121212' : '#0a0a0a'
                }}
            />
            <div className={styles.overlay} />

            <div className={styles.content}>
                <h1 className={styles.title}>{title}</h1>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>

            <div className={styles.scrollIndicator}>
                <span style={{ color: 'white', fontSize: '1.5rem' }}>↓</span>
            </div>
        </section>
    );
}
