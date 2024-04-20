import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams, Routes, Route } from "react-router-dom";
import { IQuestion, IQuiz } from "../client";
import * as client from "../client";
import QuizEditor from "./Editor";
import QuestionEditor from "./QuestionEditor";
import { v4 as uuidv4 } from 'uuid';

import {
    addQuestion, 
    deleteQuestion,
    updateQuestion,
    setQuestion,
    setQuestions,
} from "./QuizReducer"
import { KanbasState } from "../../../store";

export default function Quiz() {

    const dispatch = useDispatch(); 
    const navigate = useNavigate();
    const { courseId, qid }  = useParams<{ courseId: string, qid: string }>();
    const [quiz, setQuiz] = useState<IQuiz | null>(null);

    useEffect(() => {
        if (qid === 'new') {
            const newQuiz = {
                title: "New Quiz",
                quizType: "Graded Quiz",
                points: 0,
                description: "",
                assignmentGroup: "Quizzes",
                shuffleAnswers: false,
                timeLimit: 20,
                multipleAttempts: false,
                showCorrectAnswers: false,
                accessCode: "",
                oneQuestionAtATime: true,
                webcamRequired: false,
                lockQuestionsAfterAnswering: false,
                dueDate: new Date(),
                availableDate: new Date(),
                untilDate: new Date(),
                courseId: courseId,
                published: false,
                _id: 'new',
                questions: []
            };
            setQuiz(newQuiz);
        } else if (qid) {
            client.findQuizById(qid).then(fetchedQuiz => {
                setQuiz(fetchedQuiz);
                client.findQuestionsByQuizId(fetchedQuiz._id)
                      .then(questions => dispatch(setQuestions(questions)))
                      .catch(error => console.error("Failed to fetch questions", error));
            }).catch(error => {
                console.error("Failed to fetch quiz", error);
                navigate(`/Kanbas/Courses/${courseId}/Quizzes`);
            });
        }
    }, [qid, courseId, dispatch, navigate]);

    if (!quiz) {
        return <div>No Quiz...</div>;
    }

    return(
        <div className="container">
            <Routes>
                <Route path="/" element={<QuizEditor quizData={quiz} setParentQuiz={setQuiz}/>} />
                <Route path="new" element={<QuizEditor quizData={quiz} setParentQuiz={setQuiz}/>} />
                <Route path="Edit" element={<QuizEditor quizData={quiz} setParentQuiz={setQuiz}/>} />
                <Route path=":questionId/Edit" element={<QuestionEditor />} />
                <Route path="Preview" element={<div>Preview not yet implemented</div>} />
            </Routes>
        </div>
    );
};
