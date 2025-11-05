
import { GoogleGenAI } from "@google/genai";
import { Course, LearningStyle } from "../types";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  throw new Error("API_KEY environment variable not set");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const getLearningStylePrompt = (style: LearningStyle): string => {
  switch (style) {
    case LearningStyle.Visual:
      return "You are an expert educator who specializes in visual learning. Your goal is to explain complex topics using visual aids and analogies. Structure your response with clear headings, bullet points, and suggest simple diagrams or charts that could represent the information (using markdown or text descriptions). Use vivid language and metaphors.";
    case LearningStyle.Auditory:
      return "You are a skilled orator and teacher who excels at explaining concepts through speech. Your goal is to create content that would be easy to understand if read aloud. Structure your response like a script for a podcast or lecture. Use conversational language, ask rhetorical questions to engage the listener, and use repetition for key points. Use phonetic spellings for complex terms if necessary.";
    case LearningStyle.Kinesthetic:
      return "You are a hands-on instructor who believes in learning by doing. Your goal is to explain topics through practical examples, real-world case studies, and suggested activities. Structure your response to be action-oriented. Provide step-by-step processes, simple experiments, or real-life scenarios where the concepts apply. Focus on application over abstract theory.";
    case LearningStyle.ReadingWriting:
      return "You are a distinguished professor and author known for clear and comprehensive written explanations. Your goal is to provide detailed, well-structured notes. Structure your response in a formal, academic style. Use precise definitions, detailed lists, and break down complex information into smaller, well-organized sections. Your response should be text-heavy and thorough.";
    default:
      return "You are a helpful teaching assistant.";
  }
};

const formatCourseContent = (course: Course): string => {
    let content = `Course: ${course.title} (${course.code})\n\n`;
    content += "Modules and Topics:\n";
    course.modules.forEach(module => {
        content += `- ${module.name}:\n`;
        module.topics.forEach(topic => {
            content += `  - ${topic}\n`;
        });
    });
    return content;
};

export const generatePersonalizedLesson = async (
  course: Course,
  learningStyle: LearningStyle
): Promise<string> => {
  try {
    const systemInstruction = getLearningStylePrompt(learningStyle);
    const courseContent = formatCourseContent(course);

    const prompt = `Based on the BBA syllabus provided below, generate a comprehensive lesson for the entire course. Tailor the entire explanation to a ${learningStyle} learner. Cover all modules and topics.

Syllabus Content:
${courseContent}
`;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction,
        temperature: 0.5,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Error generating lesson:", error);
    return "Sorry, I encountered an error while creating your personalized lesson. Please try again.";
  }
};
