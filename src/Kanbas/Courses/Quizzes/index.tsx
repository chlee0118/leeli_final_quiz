import React from "react";
import { Route, Routes } from "react-router-dom";
import QuizList from "./List";
import Quiz from "./Quiz";
// import QuizEditor from "./Quiz/Editor";

export default function Quizzes() {
    return (
        <div className="container">
            <Routes>
                <Route path="/" element={<QuizList />} />
                <Route path=":qid/*" element={<Quiz />} />
            </Routes>
        </div>
    );
};
