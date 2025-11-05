
import React from 'react';

interface WelcomeScreenProps {
  onStartQuiz: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStartQuiz }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center p-4">
      <div className="max-w-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-400 mb-4">
          Welcome to Your BBA Learning Hub
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8">
          Discover your unique learning style and get personalized study materials tailored just for you. Let's start by finding out how you learn best.
        </p>
        <button
          onClick={onStartQuiz}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          Find My Learning Style
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
