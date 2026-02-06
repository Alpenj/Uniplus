'use client';

import React from 'react';
import styles from './page.module.css';

export default function SCMPage() {
    return (
        <div>
            <h1 className={styles.title}>자재 SCM (공급망 관리)</h1>

            <div className={styles.grid}>
                {/* 자재 카드 1 */}
                <div className={styles.materialCard}>
                    <div className={styles.cardHeader}>
                        <span className={styles.tag}>주문 완료</span>
                        <span className={styles.date}>2024.02.06</span>
                    </div>
                    <div className={styles.imagePlaceholder}>LX Z:IN 바닥재</div>
                    <h3>강그린 프로 / 쉬폰 화이트</h3>
                    <p className={styles.project}>반포 래미안 34평 리모델링</p>

                    <div className={styles.timeline}>
                        <div className={`${styles.step} ${styles.active}`}>
                            <div className={styles.dot}></div>
                            <span>발주</span>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.dot}></div>
                            <span>출고</span>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.dot}></div>
                            <span>배송중</span>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.dot}></div>
                            <span>현장도착</span>
                        </div>
                    </div>

                    <div className={styles.qrSection}>
                        <div className={styles.qrPlaceholder}>QR Code</div>
                        <div>
                            <div className={styles.hash}>Block Hash: 0x7f...3a2b</div>
                            <div className={styles.verify}>위변조 검증됨</div>
                        </div>
                    </div>
                </div>

                {/* 자재 카드 2 */}
                <div className={styles.materialCard}>
                    <div className={styles.cardHeader}>
                        <span className={`${styles.tag} ${styles.shipping}`}>배송중</span>
                        <span className={styles.date}>2024.02.05</span>
                    </div>
                    <div className={styles.imagePlaceholder} style={{ background: '#E8F5E9' }}>American Standard 도기</div>
                    <h3>플랫 라운드 욕조</h3>
                    <p className={styles.project}>한남 더힐 욕실 공사</p>

                    <div className={styles.timeline}>
                        <div className={`${styles.step} ${styles.completed}`}>
                            <div className={styles.dot}></div>
                        </div>
                        <div className={`${styles.step} ${styles.completed}`}>
                            <div className={styles.dot}></div>
                        </div>
                        <div className={`${styles.step} ${styles.active}`}>
                            <div className={styles.dot}></div>
                            <span>배송중</span>
                        </div>
                        <div className={styles.step}>
                            <div className={styles.dot}></div>
                            <span>현장도착</span>
                        </div>
                    </div>

                    <div className={styles.qrSection}>
                        <div className={styles.qrPlaceholder}>QR Code</div>
                        <div>
                            <div className={styles.hash}>Block Hash: 0x8a...9c1d</div>
                            <div className={styles.verify}>위변조 검증됨</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
