// Quizzes/QuizDetail.tsx
import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import * as client from "../client";
import { IQuiz } from "../client";
import { FaCheck, FaEdit, FaEllipsisV } from "react-icons/fa";

export default function QuizDetail() {
  const { courseId, qid } = useParams();
  const [quiz, setQuiz] = useState<IQuiz | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (qid) {
      client.findQuizById(qid).then((fetchedQuiz) => {
        setQuiz(fetchedQuiz);
      }).catch((error) => {
        console.error("Failed to fetch quiz:", error);
      });
    }
  }, [qid]);

  const togglePublished = () => {
    if (quiz) {
      const updatedQuiz = { ...quiz, published: !quiz.published };
      client.updateQuiz(updatedQuiz).then(() => {
        setQuiz(updatedQuiz);
      }).catch((error) => {
        console.error("Failed to update quiz published status:", error);
      });
    }
  };

  if (!quiz) {
    return <div>Loading quiz details...</div>;
  }

  return (
    <div className="quiz-detail-container">
      <div className="quiz-detail-header">
        <div style={{ float: 'right' }}>
          <button onClick={togglePublished} className={`btn ${quiz.published ? 'btn-success' : 'btn-secondary'}`}>
            {quiz.published ? <><FaCheck /> Published</> : 'Unpublished'}
          </button>
          <button className="btn btn-info" onClick={() => alert('Preview not yet implemented')}>
            Preview
          </button>
          <Link to={`/Kanbas/Courses/${courseId}/Quizzes/${qid}/edit`}>
            <button className="btn btn-primary">
              <FaEdit /> Edit
            </button>
          </Link>
          <button className="btn btn-outline-secondary">
            <FaEllipsisV />
          </button>
        </div>
      </div>
      <div style={{ clear: 'both' }}>
      <div style={{ paddingTop: '5px' }}>
        <hr />
      </div>
      <h1>{quiz.title}</h1>
      <div>Quiz Type: {quiz.quizType}</div>
      <div>Points: {quiz.points}</div>
      <div>Assignment Group: {quiz.assignmentGroup}</div>
      <div>Shuffle Answers: {quiz.shuffleAnswers ? "Yes" : "No"}</div>
      <div>Time Limit: {quiz.timeLimit} Minutes</div>
      <div>Multiple Attempts: {quiz.multipleAttempts ? "Yes" : "No"}</div>
      <div>Show Correct Answers: {quiz.showCorrectAnswers ? "Immediately" : "No"}</div>
      <div>One Question at a Time: {quiz.oneQuestionAtATime ? "Yes" : "No"}</div>
      <div>Webcam Required: {quiz.webcamRequired ? "Yes" : "No"}</div>
      <div>Lock Questions After Answering: {quiz.lockQuestionsAfterAnswering ? "Yes" : "No"}</div>
      <div>Due Date: {new Date(quiz.dueDate).toLocaleDateString()}</div>
      <div>Available from: {new Date(quiz.availableDate).toLocaleDateString()}</div>
      <div>Until: {new Date(quiz.untilDate).toLocaleDateString()}</div>
      </div>
    </div>
  );
}