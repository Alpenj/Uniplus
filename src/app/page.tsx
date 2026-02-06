'use client';

import React, { useState, useEffect } from 'react';
import ChatContainer from '@/components/chat/ChatContainer';
import QuestionCard from '@/components/chat/QuestionCard';
import ChatInput from '@/components/chat/ChatInput';
import ConsultationForm from '@/components/chat/ConsultationForm';
import { ChatMessage, ChatState, QUESTIONS, getNextQuestion, QuestionType } from '@/lib/chatFlow';
import { calculateEstimate, formatPrice } from '@/lib/priceCalculator';
import { useData } from '@/lib/DataContext'; // Import

export default function Home() {
  const { addConsultation } = useData(); // Hook
  const [state, setState] = useState<ChatState>({
    currentQuestion: 'space',
    answers: {},
    messages: [],
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false); // form submission state

  // 첫 메시지 자동 추가
  useEffect(() => {
    if (state.messages.length === 0) {
      addBotMessage(QUESTIONS.space.text, QUESTIONS.space.options);
    }
  }, []);

  function addBotMessage(content: string, options?: string[]) {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'bot',
      content,
      timestamp: new Date(),
      options,
    };
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, newMessage],
    }));
  }

  function addUserMessage(content: string) {
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content,
      timestamp: new Date(),
    };
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, newMessage],
    }));
  }

  function handleInput(value: string) {
    const current = state.currentQuestion as QuestionType;
    addUserMessage(value);

    const updatedAnswers = { ...state.answers, [current]: value };
    proceedToNext(current, updatedAnswers);
  }

  function handleOptionSelect(option: string) {
    const current = state.currentQuestion as QuestionType;
    addUserMessage(option);

    // 답변 저장
    const updatedAnswers = { ...state.answers, [current]: option };
    proceedToNext(current, updatedAnswers);
  }

  function proceedToNext(current: QuestionType, updatedAnswers: any) {
    setTimeout(() => {
      const next = getNextQuestion(current);

      if (next === 'complete') {
        showEstimate(updatedAnswers);
      } else {
        const nextQ = QUESTIONS[next];
        addBotMessage(nextQ.text, nextQ.options || undefined);
        setState((prev) => ({
          ...prev,
          currentQuestion: next,
          answers: updatedAnswers,
        }));
      }
    }, 600);
  }

  function showEstimate(answers: ChatState['answers']) {
    // 필수 정보가 없으면 기본값 처리 (데모용)
    const area = parseInt(answers.area?.toString() || '0') || 25;
    const estimate = calculateEstimate({
      space: answers.space || '전체 리모델링',
      area,
      budget: answers.budget || '3천만원',
      style: answers.style || '모던',
    });

    const message = `예상 견적이 나왔습니다!\n\n${formatPrice(estimate.min)} ~ ${formatPrice(estimate.max)}\n\n상담을 원하시면 연락처를 남겨주세요.`;
    addBotMessage(message);

    setState((prev) => ({
      ...prev,
      currentQuestion: 'complete',
    }));
  }

  function handleFormSubmit(name: string, phone: string) {
    console.log('Lead Captured:', { ...state.answers, name, phone });

    // 데이터 저장 (Admin으로 전송)
    addConsultation({
      customerName: name,
      phone: phone,
      space: (state.answers.space as string) || '미정',
      size: parseInt(state.answers.area?.toString() || '0') || 0,
      budget: (state.answers.budget as string) || '미정',
      style: (state.answers.style as string) || '미정',
    });

    // 성공 메시지
    addBotMessage(`감사합니다, ${name}님!\n상담 신청이 접수되었습니다.\n담당 매니저가 곧(${phone})으로 연락드리겠습니다.`);
    setIsFormSubmitted(true);
  }

  const currentQ = state.currentQuestion as QuestionType | 'complete';
  const currentQuestionData = currentQ !== 'complete' ? QUESTIONS[currentQ] : null;

  const showOptions = currentQ !== 'complete' && currentQuestionData?.options;
  const showInput = currentQ !== 'complete' && !currentQuestionData?.options;
  const showForm = currentQ === 'complete' && !isFormSubmitted;

  return (
    <ChatContainer messages={state.messages}>
      {showOptions && <QuestionCard options={currentQuestionData!.options!} onSelect={handleOptionSelect} />}
      {showInput && (
        <ChatInput
          onSubmit={handleInput}
          type={currentQ === 'area' ? 'number' : 'text'}
          placeholder={currentQ === 'area' ? '평수 (예: 25)' : '답변을 입력해주세요'}
        />
      )}
      {showForm && <ConsultationForm onSubmit={handleFormSubmit} />}
    </ChatContainer>
  );
}
