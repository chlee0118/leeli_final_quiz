import React, { useState, useEffect } from "react";
import { Route, Routes, useParams } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Quiz from "./Quiz";
import QuizList from "./List";
import QuizEditor from "./Quiz/Editor";
import QuizDetail from "./Details";
import * as client from './client';
import { IQuiz } from './client';

function QuizEditorWrapper() {
    const { courseId, qid } = useParams<{ courseId: string; qid: string }>();
    const [quiz, setQuiz] = useState<IQuiz | null>(null);
  
    useEffect(() => {
      if (qid === 'new') {
        setQuiz({
          _id: uuidv4(),
          title: '',
          quizType: 'Graded Quiz',
          points: 0,
          assignmentGroup: 'Quizzes',
          shuffleAnswers: false,
          timeLimit: 0,
          multipleAttempts: false,
          showCorrectAnswers: false,
          accessCode: '',
          oneQuestionAtATime: false,
          webcamRequired: false,
          lockQuestionsAfterAnswering: false,
          dueDate: new Date(),
          availableDate: new Date(),
          untilDate: new Date(),
          courseId: courseId || '',
          published: false,
          questions: [],
          description: ''
        });
      } else {
        client.findQuizById(qid).then((fetchedQuiz) => {
          setQuiz(fetchedQuiz);
        }).catch((error) => {
          console.error("Failed to fetch quiz for editing:", error);
        });
      }
    }, [courseId, qid]);
  
    if (!quiz) {
      return <div>Loading...</div>;
    }
  
    return <QuizEditor quizData={quiz} setParentQuiz={setQuiz} />;
  }

export default function Quizzes() {
    
    return(
        <div className="container">
            <Routes>
                <Route path="/" element={<QuizList />} />
                <Route path=":qid/details" element={<QuizDetail />} />
                <Route path=":qid/edit" element={<QuizEditorWrapper />} /> {/* Updated line */}
                <Route path=":qid/*" element={<Quiz />} />
            </Routes>
        </div>
    )
};