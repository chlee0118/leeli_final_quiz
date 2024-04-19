import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  FaBan,
  FaCalendar,
  FaCheckCircle,
  FaEllipsisV,
  FaRocket,
  FaPlus,
  FaPlusCircle, 
} from "react-icons/fa";
import { IQuiz } from "../client";
import * as client from "../client";

export default function QuizList() {
  const [quizzes, setQuizzes] = useState<IQuiz[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const { courseId } = useParams();
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredQuizzes = quizzes.filter(quiz => quiz.title.toLowerCase().includes(searchTerm.toLowerCase()));

  useEffect(() => {
    if (courseId) {
      client.findQuizByCourseId(courseId)
        .then(setQuizzes)
        .catch(error => console.error('Failed to fetch quizzes', error));
    }
  }, [courseId]);

  const handleNewQuiz = () => {
    const newQuiz = {
      title: "New Quiz",
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
      courseId: courseId,
      published: false,
    };
    client.createQuiz(courseId, newQuiz).then((quiz) => {
      navigate(`/Kanbas/Courses/${courseId}/Quizzes/${quiz._id}/Edit`);
    });
  };

  const handleEditQuiz = (quizId) => {
    navigate(`/Kanbas/Courses/${courseId}/Quizzes/${quizId}/Edit`);
  };

  const handleDeleteQuiz = (quizId) => {
    if (window.confirm("Are you sure you want to delete this quiz?")) {
      client.deleteQuiz(quizId).then(() => {
        setQuizzes(prevQuizzes => prevQuizzes.filter(q => q._id !== quizId));
      });
    }
  };

  const handlePublishQuiz = (quiz) => {
    const updatedQuiz = { ...quiz, published: !quiz.published };
    client.updateQuiz(updatedQuiz).then(() => {
      setQuizzes(prevQuizzes =>
        prevQuizzes.map(q => q._id === updatedQuiz._id ? updatedQuiz : q)
      );
    });
  };

  return (
    <div className="overflow-y-scroll position-fixed bottom-0 end-0" style={{ left: "320px", top: "250px" }}>
      <div className="d-flex justify-content-between align-items-center mb-3" style={{ paddingLeft: "15px", paddingRight: "15px" }}>
        <input
          className="form-control"
          placeholder="Search for Quiz"
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ width: "20%", marginRight: "auto" }}
        />
        <div>
          <button className="btn btn-danger" onClick={handleNewQuiz} style={{ marginLeft: "5px" }}>
            <FaPlusCircle /> Add Quiz
          </button>
          <button className="btn btn-secondary" style={{ marginLeft: "5px" }}>
            ︙
          </button>
        </div>
      </div>
      <hr />
      <ul className="list-group wd-modules">
        {filteredQuizzes.length > 0 ? (
          filteredQuizzes.map((quiz, index) => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
              <div className="d-flex align-items-center">
                {quiz.published ? <FaRocket className="text-success me-2" /> : <FaBan className="text-secondary me-2" />}
                <Link to={`/Kanbas/Courses/${courseId}/Quizzes/${quiz._id}`}>{quiz.title}</Link>
              </div>
              <div>
                <button className="btn btn-outline-secondary btn-sm me-2" onClick={() => handleEditQuiz(quiz._id)}>
                  Edit
                </button>
                <button className="btn btn-danger btn-sm me-2" onClick={() => handleDeleteQuiz(quiz._id)}>
                  Delete
                </button>
                <button className="btn btn-info btn-sm" onClick={() => handlePublishQuiz(quiz)}>
                  {quiz.published ? "Unpublish" : "Publish"}
                </button>
              </div>
            </li>
          ))
        ) : (
          <li className="list-group-item">No quizzes available.</li>
        )}
      </ul>
    </div>
  );
}