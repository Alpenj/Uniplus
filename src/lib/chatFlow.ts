export type QuestionType = 'space' | 'area' | 'budget' | 'style' | 'contact';

export interface ChatMessage {
    id: string;
    type: 'user' | 'bot';
    content: string;
    timestamp: Date;
    options?: string[]; // 객관식 선택지가 있을 경우
}

export interface ChatState {
    currentQuestion: QuestionType | 'complete';
    answers: {
        space?: string;
        area?: number;
        budget?: string;
        style?: string;
        name?: string;
        phone?: string;
        date?: string;
    };
    messages: ChatMessage[];
}

// 질문 템플릿 정의
export const QUESTIONS = {
    space: {
        text: '안녕하세요! HiveHash입니다.\n어떤 공간을 리모델링하시나요?',
        options: ['거실', '주방', '욕실', '침실', '전체 리모델링'],
    },
    area: {
        text: '평수를 알려주세요. (예: 25)',
        options: null, // 직접 입력
    },
    budget: {
        text: '예산 범위는 어느 정도 생각하고 계신가요?',
        options: ['1천만원 이하', '3천만원', '5천만원', '1억원 이상'],
    },
    style: {
        text: '선호하시는 스타일은 무엇인가요?',
        options: ['모던', '클래식', '미니멀', '북유럽', '빈티지'],
    },
    contact: {
        text: '거의 다 왔습니다! 상담을 위해 정보를 입력해주세요.',
        options: null, // 폼 입력
    },
};

// 다음 질문으로 진행하는 로직
export function getNextQuestion(current: QuestionType | 'complete'): QuestionType | 'complete' {
    const flow: (QuestionType | 'complete')[] = ['space', 'area', 'budget', 'style', 'contact', 'complete'];
    const currentIndex = flow.indexOf(current);
    return flow[currentIndex + 1] || 'complete';
}
