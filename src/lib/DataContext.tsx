'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// 데이터 타입 정의
export interface Consultation {
    id: string;
    customerName: string;
    phone: string;
    space: string;
    size: number;
    budget: string;
    style: string;
    status: 'new' | 'consulting' | 'contracted' | 'construction' | 'completed';
    date: string; // JSON 직렬화 문제로 string으로 관리
}

interface DataContextType {
    consultations: Consultation[];
    addConsultation: (data: Omit<Consultation, 'id' | 'status' | 'date'>) => void;
    stats: {
        total: number;
        new: number;
        ongoing: number;
        risk: number;
    };
}

const DataContext = createContext<DataContextType | undefined>(undefined);

// 초기 더미 데이터
const INITIAL_DATA: Consultation[] = [
    { id: '1', customerName: '박서준', phone: '010-1234-5678', space: '전체 리모델링', size: 34, budget: '5천만원', style: '모던', status: 'consulting', date: new Date().toISOString() },
    { id: '2', customerName: '이재희', phone: '010-9876-5432', space: '욕실', size: 12, budget: '1천만원 이하', style: '미니멀', status: 'construction', date: new Date().toISOString() },
];

export function DataProvider({ children }: { children: ReactNode }) {
    const [consultations, setConsultations] = useState<Consultation[]>([]);

    // 초기 로드
    useEffect(() => {
        const saved = localStorage.getItem('hivehash_consultations');
        if (saved) {
            setConsultations(JSON.parse(saved));
        } else {
            setConsultations(INITIAL_DATA);
        }
    }, []);

    // 데이터 변경 시 로컬 스토리지 저장
    useEffect(() => {
        if (consultations.length > 0) {
            localStorage.setItem('hivehash_consultations', JSON.stringify(consultations));
        }
    }, [consultations]);

    // 다른 탭에서 변경사항 감지 (스토리지 이벤트)
    useEffect(() => {
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === 'hivehash_consultations' && e.newValue) {
                setConsultations(JSON.parse(e.newValue));
            }
        };
        window.addEventListener('storage', handleStorageChange);
        return () => window.removeEventListener('storage', handleStorageChange);
    }, []);

    const addConsultation = (data: Omit<Consultation, 'id' | 'status' | 'date'>) => {
        const newConsultation: Consultation = {
            ...data,
            id: Date.now().toString(),
            status: 'new',
            date: new Date().toISOString(),
        };

        // 상태 업데이트 (useEffect가 로컬 스토리지 저장을 처리함)
        setConsultations((prev) => {
            const updated = [newConsultation, ...prev];
            localStorage.setItem('hivehash_consultations', JSON.stringify(updated)); // 즉시 저장 보장
            return updated;
        });
    };

    const stats = {
        total: consultations.length,
        new: consultations.filter(c => c.status === 'new').length,
        ongoing: consultations.filter(c => ['consulting', 'contracted', 'construction'].includes(c.status)).length,
        risk: 1, // Mock
    };

    return (
        <DataContext.Provider value={{ consultations, addConsultation, stats }}>
            {children}
        </DataContext.Provider>
    );
}

export function useData() {
    const context = useContext(DataContext);
    if (!context) throw new Error('useData must be used within a DataProvider');
    return context;
}
