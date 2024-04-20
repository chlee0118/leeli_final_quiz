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

  const handlePreview = () => {
    navigate(`/Kanbas/Courses/${courseId}/Quizzes/${qid}/preview`);
  };

  if (!quiz) {
    return <div>Loading quiz details...</div>;
  }

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
    <div className="overflow-y-scroll position-fixed bottom-0 end-0" style={{ left: "320px", top: "250px" }}>
    <div className="quiz-detail-container">
      <div className="quiz-detail-header">
        <div style={{ float: 'right' }}>
          <button onClick={togglePublished} className={`btn ${quiz.published ? 'btn-success' : 'btn-secondary'}`}>
            {quiz.published ? <><FaCheck /> Published</> : 'Unpublished'}
          </button>
          <button className="btn btn-info" onClick={handlePreview} >
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
      <div style={{font:"Helvetica", fontSize: "20px", marginLeft: 200}}>
      <div><b>Quiz Type: </b> {quiz.quizType}</div>
      <div><b>Points: </b> {quiz.points}</div>
      <div><b>Assignment Group: </b> {quiz.assignmentGroup}</div>
      <div><b>Shuffle Answers: </b> {quiz.shuffleAnswers ? "Yes" : "No"}</div>
      <div><b>Time Limit: </b> {quiz.timeLimit} Minutes</div>
      <div><b>Multiple Attempts: </b> {quiz.multipleAttempts ? "Yes" : "No"}</div>
      <div><b>Show Correct Answers: </b> {quiz.showCorrectAnswers ? "Immediately" : "No"}</div>
      <div><b>One Question at a Time: </b> {quiz.oneQuestionAtATime ? "Yes" : "No"}</div>
      <div><b>Webcam Required: </b> {quiz.webcamRequired ? "Yes" : "No"}</div>
      <div><b>Lock Questions After Answering: </b> {quiz.lockQuestionsAfterAnswering ? "Yes" : "No"}</div>
      <div><b>Due Date: </b> {new Date(quiz.dueDate).toLocaleDateString()}</div>
      <div><b>Available from: </b> {new Date(quiz.availableDate).toLocaleDateString()}</div>
      <div><b>Until: </b> {new Date(quiz.untilDate).toLocaleDateString()}</div>
      </div>
    </div>
    </div>
    </div>
  );
}