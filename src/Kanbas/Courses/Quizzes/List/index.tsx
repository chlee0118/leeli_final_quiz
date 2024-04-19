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
  const today = new Date();
  const navigate = useNavigate();
  const { courseId } = useParams();
  useEffect(() => {
    client.findQuizByCourseId(courseId).then((quizzes) => setQuizzes(quizzes));
  }, [courseId]);

  const [quizzes, setQuizzes] = useState<IQuiz[]>([]);
  const [quizzesExist, setQuizzesExist] = useState<boolean>(false);
  const [selectedQuiz, setSelectedQuiz] = useState<IQuiz | null>(null);
  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredQuizzes = quizzes.filter((quiz) =>
    quiz.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddQuizClick = () => {
    navigate(`/Kanbas/Courses/${courseId}/Quizzes/new`);
  };
  
  const handleNewQuiz = () => {
  navigate(`/Kanbas/Courses/${courseId}/Quizzes/new`);
};

  const handleEditQuiz = (quiz: IQuiz) => {
    navigate(`/Kanbas/Courses/${courseId}/Quizzes/${quiz._id}/Edit`);
  };

  const handleDeleteQuiz = (quiz: IQuiz) => {
    client.deleteQuiz(quiz).then(() => {
      setQuizzes(quizzes.filter((q) => q._id !== quiz._id));
    });
  };

  const handlePublishQuiz = (quiz: IQuiz) => {
    const updatedQuiz = { ...quiz, published: !quiz.published };
    client.updateQuiz(updatedQuiz).then(() => {
      setQuizzes((prevQuizzes) =>
        prevQuizzes.map((q) => (q._id === updatedQuiz._id ? updatedQuiz : q))
      );
      setMenuVisible(!menuVisible);
    });
  };

  const toggleMenu = (quiz: IQuiz) => {
    setSelectedQuiz(quiz);
    setMenuVisible(!menuVisible);
  };

  useEffect(() => {
    const quizzesExist = quizzes.length > 0;
    setQuizzesExist(quizzesExist);
  }, [quizzes]);

  return (
    <div className="overflow-y-scroll position-fixed bottom-0 end-0" style={{ left: "320px", top: "250px" }}>
        <div className="container">
                <div className="d-flex justify-content-between align-items-center">
          <form className="form-inline">
            <input
              id="text-fields-SA"
              className="form-control"
              placeholder="Search Quizzes"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </form>

          <div className="float-end">
            <button className="btn btn-outline-primary me-2"> ︙</button>
            <button className="btn btn-primary float-end" onClick={handleNewQuiz}>
              <FaPlus /> Quiz
            </button>
          </div>
        </div>

      <div className="container">
      <ul className="list-group wd-modules">
          <li className="list-group-item">
            <div>
              <FaEllipsisV className="me-2" /> QUIZZES
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
        <ul className="list-group">
          {quizzes.map((quiz) => (
            <li className="list-group-item" key={quiz._id}>
              <div className="container">
                <div className="row">
                  <div className="col-8">

                  {quiz.published ? (
                      <FaRocket className="text-success" style={{marginRight: 10}} />
                    ) : (
                      <FaRocket className="text-secondary" style={{marginRight: 10}} />
                    )}
                    <Link to={`/Kanbas/Courses/${courseId}/Quizzes/${quiz._id}/details`}>
                      {quiz.title}
                    </Link>
                  </div>
                  <div className="col-4 text-right">
                    {quiz.published ? (
                      <FaCheckCircle className="float-end text-success ms-2" />
                    ) : (
                      <FaBan className="float-end text-danger ms-2" />
                    )}
                    <FaEllipsisV
                      className="ms-2 float-end"
                      onClick={() => toggleMenu(quiz)}
                    />
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-4">
                    {new Date(quiz.availableDate) > today
                      ? "Not available until " +
                        new Date(quiz.availableDate).toLocaleDateString()
                      : new Date(quiz.dueDate) > today
                      ? "Available"
                      : "Closed"}
                  </div>
                  <div className="col-md-4">
                    <FaCalendar className="text-secondary" />
                    {" Due Date: " +
                      new Date(quiz.dueDate).toLocaleDateString()}
                  </div>
                  <div className="col-md-4">
                    {quiz.points + " pts" + "｜ 0 Questions"}
                  </div>
                </div>
                {menuVisible && selectedQuiz === quiz && (
                  <div className="row">
                    <div className="col text-right">
                      <button
                        className="btn btn-sm btn-success me-2"
                        onClick={() => handleEditQuiz(quiz)}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => handleDeleteQuiz(quiz)}
                      >
                        Delete
                      </button>
                      {quiz.published ? (
                        <button
                          className="btn btn-sm btn-secondary me-2"
                          onClick={() => handlePublishQuiz(quiz)}
                        >
                          Unpublish
                        </button>
                      ) : (
                        <button
                          className="btn btn-sm btn-info me-2"
                          onClick={() => handlePublishQuiz(quiz)}
                        >
                          Publish
                        </button>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
        </li>
        </ul>
      </div>
      </div>
    </div>
  );
}
