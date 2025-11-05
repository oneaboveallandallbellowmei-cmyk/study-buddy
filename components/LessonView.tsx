
import React, { useState, useEffect } from 'react';
import { Course, LearningStyle } from '../types';
import { generatePersonalizedLesson } from '../services/geminiService';

interface LessonViewProps {
  course: Course;
  learningStyle: LearningStyle;
  onBack: () => void;
}

const LoadingSpinner: React.FC = () => (
    <div className="flex flex-col items-center justify-center text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mb-4"></div>
        <h3 className="text-xl font-semibold text-gray-700 dark:text-gray-200">Crafting Your Lesson...</h3>
        <p className="text-gray-500 dark:text-gray-400">Personalizing content for your {`'${localStorage.getItem('learningStyle') || ''}'`} style.</p>
    </div>
);

const LessonView: React.FC<LessonViewProps> = ({ course, learningStyle, onBack }) => {
  const [lessonContent, setLessonContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLesson = async () => {
      setIsLoading(true);
      setError(null);
      localStorage.setItem('learningStyle', learningStyle); // Store for loading message
      try {
        const content = await generatePersonalizedLesson(course, learningStyle);
        setLessonContent(content);
      } catch (e) {
        setError('Failed to generate lesson. Please try again.');
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLesson();
  }, [course, learningStyle]);

  const renderContent = () => {
    if (isLoading) {
      return <LoadingSpinner />;
    }
    if (error) {
      return <div className="text-center text-red-500">{error}</div>;
    }
    // A simple markdown-like renderer
    return lessonContent.split('\n').map((line, index) => {
        if (line.startsWith('### ')) {
            return <h3 key={index} className="text-xl font-semibold mt-4 mb-2 text-gray-800 dark:text-gray-200">{line.substring(4)}</h3>
        }
        if (line.startsWith('## ')) {
            return <h2 key={index} className="text-2xl font-bold mt-6 mb-3 border-b pb-2 text-gray-800 dark:text-gray-100">{line.substring(3)}</h2>
        }
        if (line.startsWith('# ')) {
            return <h1 key={index} className="text-3xl font-extrabold mt-8 mb-4 text-gray-900 dark:text-white">{line.substring(2)}</h1>
        }
        if (line.startsWith('- ')) {
            return <li key={index} className="ml-5 list-disc text-gray-700 dark:text-gray-300">{line.substring(2)}</li>
        }
        return <p key={index} className="my-2 text-gray-700 dark:text-gray-300 leading-relaxed">{line}</p>;
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={onBack}
          className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 font-bold py-2 px-4 rounded-lg transition-colors"
        >
          &larr; Back to Syllabus
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 sm:p-8 lg:p-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">{course.title}</h1>
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-6">
          Personalized Lesson for a <span className="font-semibold text-blue-600 dark:text-blue-400">{learningStyle}</span> Learner
        </p>
        <div className="prose prose-lg dark:prose-invert max-w-none">
            {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default LessonView;
