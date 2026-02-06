interface PriceInput {
    space: string;
    area: number;
    budget: string;
    style: string;
}

interface PriceEstimate {
    min: number;
    max: number;
}

// 간단한 견적 엔진 (실제로는 더 정교해야 함)
export function calculateEstimate(input: PriceInput): PriceEstimate {
    // 기본 단가 (평당)
    let basePricePerPyeong = 150; // 150만원/평

    // 공간 타입별 보정
    const spaceMultiplier: Record<string, number> = {
        거실: 1.0,
        주방: 1.2, // 주방은 자재가 비쌈
        욕실: 1.3, // 방수/타일 작업 비용
        침실: 0.9,
        '전체 리모델링': 1.1,
    };

    // 예산 범위별 품질 계수
    const budgetFactor: Record<string, number> = {
        '1천만원 이하': 0.7,
        '3천만원': 1.0,
        '5천만원': 1.2,
        '1억원 이상': 1.5,
    };

    const multiplier = (spaceMultiplier[input.space] || 1.0) * (budgetFactor[input.budget] || 1.0);
    const baseTotal = basePricePerPyeong * input.area * multiplier;

    return {
        min: Math.round(baseTotal * 0.9 / 100) * 100, // 10% 여유, 백만원 단위로 반올림
        max: Math.round(baseTotal * 1.1 / 100) * 100,
    };
}

// 만원 단위 포맷 (예: 2500 => "2,500만원")
export function formatPrice(value: number): string {
    return `${value.toLocaleString()}만원`;
}
