
export enum LearningStyle {
  Visual = 'Visual',
  Auditory = 'Auditory',
  Kinesthetic = 'Kinesthetic',
  ReadingWriting = 'Reading/Writing',
}

export interface QuizQuestion {
  question: string;
  options: { text: string; style: LearningStyle }[];
}

export interface Module {
  id: string;
  name: string;
  topics: string[];
  hours: number;
}

export interface Course {
  code: string;
  title: string;
  category: string;
  credits: number;
  modules: Module[];
}

export interface Semester {
  id: string;
  courses: Course[];
}

export interface Syllabus {
  title: string;
  semesters: Semester[];
}
