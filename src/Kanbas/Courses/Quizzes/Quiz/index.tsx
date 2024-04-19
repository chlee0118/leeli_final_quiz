import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams, Routes, Route } from "react-router-dom";
import { IQuestion, IQuiz } from "../client";
import * as client from "../client";
import QuizEditor from "./Editor";
import QuestionEditor from "./QuestionEditor";

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

    const { courseId, qid }  = useParams<{ courseId: string, qid: string }>();
    const [quiz, setQuiz] = useState<IQuiz>(
        {
            _id: "",
            title: "",
            description: "",
            quizType: "Graded Quiz",
            points: 0,
            assignmentGroup: "Quizzes",
            shuffleAnswers: true,
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
            courseId: courseId || "",
            published: false,
        }
    );

    const questions = useSelector((state: KanbasState) =>
        state.questionsReducer.questions
    );

    useEffect(() => {
        client.findQuizById(qid).then((quiz) => {
            setQuiz(quiz)
            client.findQuestionsByQuizId(quiz._id).then((questions) => {
                dispatch(setQuestions(questions))
            })
        })
    }, [qid]);

    return(
        <div className="container">

            <Routes>
                <Route path="/" />
                <Route path="new" element={<QuizEditor quizData={quiz} setParentQuiz={setQuiz}/>}/>
                <Route path="/Edit" element={<QuizEditor quizData={quiz} setParentQuiz={setQuiz}/>} />
                <Route path=":questionId/Edit" element={<QuestionEditor />} />
                <Route path="Preview"  />
            </Routes>
        </div>
    )
};