// src/components/QuestionCard.tsx
import React from 'react';

interface QuestionCardProps {
  day: number;
  question: string;
}

const QuestionCard: React.FC<QuestionCardProps> = ({ day, question }) => (
  <div className="question-card">
    <h2>Day {day}</h2>
    <p>{question}</p>
  </div>
);

export default QuestionCard;
