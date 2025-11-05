
import React from 'react';
import { Syllabus, Course, LearningStyle } from '../types';

interface SyllabusViewProps {
  syllabus: Syllabus;
  onSelectCourse: (course: Course) => void;
  learningStyle: LearningStyle | null;
}

const LearningStyleCard: React.FC<{ style: LearningStyle }> = ({ style }) => {
    let description = '';
    let icon = '🧠';
    switch (style) {
        case LearningStyle.Visual:
            description = 'You learn best with charts, diagrams, and visual aids.';
            icon = '🎨';
            break;
        case LearningStyle.Auditory:
            description = 'You retain information through listening and discussion.';
            icon = '🎧';
            break;
        case LearningStyle.Kinesthetic:
            description = 'You understand concepts best by doing and hands-on activities.';
            icon = '🏃‍♂️';
            break;
        case LearningStyle.ReadingWriting:
            description = 'You excel with detailed notes, lists, and reading texts.';
            icon = '✍️';
            break;
    }

    return (
        <div className="bg-blue-100 dark:bg-blue-900/50 border border-blue-300 dark:border-blue-700 text-blue-800 dark:text-blue-200 px-4 py-3 rounded-xl mb-8" role="alert">
            <p className="font-bold text-lg">{icon} Your Learning Style: {style}</p>
            <p>{description} Your notes will be tailored to this preference.</p>
        </div>
    );
};


const SyllabusView: React.FC<SyllabusViewProps> = ({ syllabus, onSelectCourse, learningStyle }) => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white">BBA Syllabus</h1>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-8">Select a course to get started with your personalized lesson plan.</p>
      
      {learningStyle && <LearningStyleCard style={learningStyle} />}

      {syllabus.semesters.map((semester) => (
        <div key={semester.id} className="mb-10">
          <h2 className="text-2xl font-semibold mb-6 border-b-2 border-blue-500 pb-2 text-gray-700 dark:text-gray-200">{semester.id}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {semester.courses.map((course) => (
              <div
                key={course.code}
                onClick={() => onSelectCourse(course)}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col justify-between"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{course.title}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{course.code} - {course.category}</p>
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full">
                    {course.credits} Credits
                  </span>
                </div>
                <div className="bg-gray-50 dark:bg-gray-700 px-6 py-3 text-right">
                    <span className="text-blue-600 dark:text-blue-400 font-semibold">Start Learning &rarr;</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SyllabusView;
