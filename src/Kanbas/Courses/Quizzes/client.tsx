import axios from "axios";

const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_API = `${API_BASE}/api/courses`;
export const QUIZZES_API = `${API_BASE}/api/quizzes`;
export const QUESTIONS_API = `${API_BASE}/api/questions`;

const api = axios.create({
  withCredentials: true,
});

export interface IQuiz {
  _id: string;
  title: string;
  quizType: string;
  points: number;
  assignmentGroup: string;
  shuffleAnswers: boolean;
  timeLimit: number;
  multipleAttempts: boolean;
  showCorrectAnswers: boolean;
  accessCode: string;
  oneQuestionAtATime: boolean;
  webcamRequired: boolean;
  lockQuestionsAfterAnswering: boolean;
  dueDate: Date;
  availableDate: Date;
  untilDate: Date;
  courseId: string;
  published: boolean;
  description?: string;
  questions: IQuestion[]; 
}

export interface IQuestion {
  _id: string;
  quizId: string;
  questionType: string;
  title: string;
  points: string;
  question: string;
  choices: string[];
  correctAnswerIndex: number;
}

export const createQuiz = async (courseId: any, quiz: any) => {
  const response = await api.post(`${COURSES_API}/${courseId}/quizzes`, quiz);
  return response.data;
};

export const findAllQuizes = async () => {
  const response = await axios.get(`${QUIZZES_API}/`);
  return response.data;
};

export const findQuizById = async (qid: any) => {
  const response = await axios.get(`${QUIZZES_API}/${qid}`);
  return response.data;
};

export const findQuizByCourseId = async (courseId: any) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/quizzes`);
  return response.data;
};

export const updateQuiz = async (quiz: any) => {
  const response = await api.put(`${QUIZZES_API}/${quiz._id}`, quiz);
  return response.data;
};

export const deleteQuiz = async (quiz: any) => {
  const response = await api.delete(`${QUIZZES_API}/${quiz._id}`);
  return response.data;
};

export const createQuestion = async (question: any) => {
  const response = await api.post(`${QUESTIONS_API}`, question);
  return response.data;
};

export const findQuestionsByQuizId = async (quizId: any) => {
  const response = await axios.get(`${QUIZZES_API}/${quizId}/questions`);
  return response.data;
};

export const findQuestionById = async (questionId: any) => {
  const response = await axios.get(`${QUESTIONS_API}/${questionId}`);
  return response.data;
};

export const updateQuestion = async (question: any) => {
  const response = await api.put(`${QUESTIONS_API}/${question._id}`, question);
  return response.data;
};

export const deleteQuestion = async (question: any) => {
  const response = await api.delete(`${QUESTIONS_API}/${question._id}`);
  return response.data;
};