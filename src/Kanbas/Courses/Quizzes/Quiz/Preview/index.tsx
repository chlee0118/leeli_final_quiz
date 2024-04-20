import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import * as client from "../../client";
import { IQuiz, IQuestion } from "../../client";
import { FaExclamationCircle, FaQuestionCircle } from "react-icons/fa";

export default function QuizPreview() {
  const { courseId, qid } = useParams();
  const navigate = useNavigate();
  const [quiz, setQuiz] = useState<IQuiz | null>(null);
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    if (qid) {
      client.findQuizById(qid).then((fetchedQuiz) => {
        setQuiz(fetchedQuiz);
        client.findQuestionsByQuizId(fetchedQuiz._id)
          .then(setQuestions)
          .catch((error) => console.error("Failed to fetch questions", error));
      }).catch((error) => {
        console.error("Failed to fetch quiz", error);
      });
    }
  }, [qid]);

  const goToNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex < questions.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const editQuiz = () => navigate(`/Kanbas/Courses/${courseId}/Quizzes/${qid}/edit`);

  if (!quiz || questions.length === 0) {
    return <div>No Questions in this Quiz yet... Add questions</div>;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const choiceLetters = ["A", "B", "C", "D"];

  return (
    <div className="overflow-y-scroll position-fixed bottom-0 end-0" style={{ left: "320px", top: "250px" }}>
      <h1>{quiz.title}</h1>
        <div style={{ background: 'lightcoral', color: 'white', padding: '10px', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
            <FaExclamationCircle style={{ marginRight: '10px' }} />
        This is a preview of the published version of the quiz
        </div>
        <p style={{ paddingTop: '10px' }}>Started: {new Date().toLocaleTimeString()}</p>
        <h2>Quiz Instructions</h2>
        <hr />
        <div style={{ border: '1px solid #ccc', borderRadius: '5px', marginBottom: '20px' }}>
      <div style={{ background: 'lightgray', padding: '10px', fontWeight: 'bold', display: 'flex', justifyContent: 'space-between' }}>
        Question {currentQuestionIndex + 1} <span>{currentQuestion.points} pts</span>
      </div>
      <div style={{ padding: '10px' }}>
        <p>{currentQuestion.question}</p>
          {currentQuestion.choices.length > 0 ? (
            currentQuestion.choices.map((choice, index) => (
              <div key={index}>
                <input type="radio" id={`choice_${index}`} name="choice" value={choice} />
                <label htmlFor={`choice_${index}`}>{choiceLetters[index]}) {choice}</label>
              </div>
            ))
          ) : (
            choiceLetters.map((letter, index) => (
              <div key={index}>
                <input type="radio" id={`choice_${index}`} name="choice" value="" disabled />
                <label htmlFor={`choice_${index}`}>{letter})</label>
              </div>
            ))
          )}
        </div>
      </div>
      <div style={{ textAlign: 'center', margin: '20px' }}>
      {currentQuestionIndex > 0 && (
        <button 
          onClick={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
          style={{ marginRight: '10px' }}
        >
          Previous
        </button>
      )}
      {currentQuestionIndex < questions.length - 1 && (
        <button 
          onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
        >
          Next
        </button>
      )}
    </div>
    <br />
    <button onClick={editQuiz}>Keep Editing This Quiz</button>
    <div>
      <h2 style={{ fontWeight: 'bold' }}>Questions</h2>
      {questions.map((question, index) => (
        <div key={question._id} style={{ color: 'red' }}>
          <FaQuestionCircle style={{ marginRight: '5px' }} />
          Question {index + 1}
        </div>
      ))}
    </div>
    </div>
  );
};