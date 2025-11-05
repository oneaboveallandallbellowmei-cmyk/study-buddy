
import React, { useState, useCallback } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import LearningStyleQuiz from './components/LearningStyleQuiz';
import SyllabusView from './components/SyllabusView';
import LessonView from './components/LessonView';
import { LearningStyle, Course } from './types';
import { BBA_SYLLABUS } from './constants';

type AppState = 'welcome' | 'quiz' | 'syllabus' | 'lesson';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('welcome');
  const [learningStyle, setLearningStyle] = useState<LearningStyle | null>(null);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleStartQuiz = () => {
    setAppState('quiz');
  };

  const handleQuizComplete = useCallback((style: LearningStyle) => {
    setLearningStyle(style);
    setAppState('syllabus');
  }, []);

  const handleSelectCourse = useCallback((course: Course) => {
    setSelectedCourse(course);
    setAppState('lesson');
  }, []);
  
  const handleBackToSyllabus = useCallback(() => {
      setSelectedCourse(null);
      setAppState('syllabus');
  }, []);

  const renderContent = () => {
    switch (appState) {
      case 'welcome':
        return <WelcomeScreen onStartQuiz={handleStartQuiz} />;
      case 'quiz':
        return <LearningStyleQuiz onQuizComplete={handleQuizComplete} />;
      case 'syllabus':
        return <SyllabusView syllabus={BBA_SYLLABUS} onSelectCourse={handleSelectCourse} learningStyle={learningStyle} />;
      case 'lesson':
        if (selectedCourse && learningStyle) {
          return <LessonView course={selectedCourse} learningStyle={learningStyle} onBack={handleBackToSyllabus} />;
        }
        // Fallback to syllabus if something is wrong
        setAppState('syllabus');
        return <SyllabusView syllabus={BBA_SYLLABUS} onSelectCourse={handleSelectCourse} learningStyle={learningStyle} />;
      default:
        return <WelcomeScreen onStartQuiz={handleStartQuiz} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300">
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
