
import React, { useState } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import { LearningStyle } from '../types';

interface LearningStyleQuizProps {
  onQuizComplete: (style: LearningStyle) => void;
}

const LearningStyleQuiz: React.FC<LearningStyleQuizProps> = ({ onQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<LearningStyle[]>([]);

  const handleAnswer = (style: LearningStyle) => {
    const newAnswers = [...answers, style];
    setAnswers(newAnswers);

    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      finishQuiz(newAnswers);
    }
  };

  const finishQuiz = (finalAnswers: LearningStyle[]) => {
    const counts: Record<string, number> = {};
    for (const style of finalAnswers) {
      counts[style] = (counts[style] || 0) + 1;
    }

    const dominantStyle = Object.keys(counts).reduce((a, b) => (counts[a] > counts[b] ? a : b));
    onQuizComplete(dominantStyle as LearningStyle);
  };
  
  const progress = ((currentQuestionIndex + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-xl">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 dark:text-white mb-2">Learning Style Quiz</h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-6">Question {currentQuestionIndex + 1} of {QUIZ_QUESTIONS.length}</p>

        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-8">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progress}%`, transition: 'width 0.3s ease-in-out' }}></div>
        </div>
      
        <div className="text-center">
            <p className="text-xl sm:text-2xl font-semibold mb-8 text-gray-700 dark:text-gray-200">
            {QUIZ_QUESTIONS[currentQuestionIndex].question}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {QUIZ_QUESTIONS[currentQuestionIndex].options.map((option, index) => (
                <button
                key={index}
                onClick={() => handleAnswer(option.style)}
                className="w-full text-left p-4 rounded-lg border-2 border-gray-200 dark:border-gray-600 hover:bg-blue-50 dark:hover:bg-gray-700 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                >
                <span className="text-lg text-gray-800 dark:text-gray-100">{option.text}</span>
                </button>
            ))}
            </div>
        </div>
    </div>
  );
};

export default LearningStyleQuiz;
