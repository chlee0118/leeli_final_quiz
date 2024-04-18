import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation} from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Assignments from "./Assignments";
import Modules from "./Modules";
import Home from "./Home";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import { useState, useEffect } from "react";
import axios from "axios";
import Quizzes from "./Quizzes";


function Courses({ courses }: { courses: any[]; }) {
  const { courseId } = useParams();
  const BASE_API = process.env.REACT_APP_API_BASE;
  const COURSES_API = `${BASE_API}/api/courses`;

  const [course, setCourse] = useState<any>({ _id: "" });
  const findCourseById = async (courseId?: string) => {
    const response = await axios.get(
      `${COURSES_API}/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);

  const links = ["Home", "Modules", "Piazza", "Grades", "Assignments", "Quizzes"];
  const { pathname } = useLocation();
  const getCurrentPageName = () => {
    const currentPage = links.find(link => pathname.includes(link));
    return currentPage ? currentPage : "Page";
  };

  return (
    <div>
      <h3 style={{color:"red"}}> <HiMiniBars3 /> Course {course?._id} {'>'} <text style={{color:"grey", fontSize:"25px"}}>{getCurrentPageName()} </text></h3>
      <hr />
      <CourseNavigation />
      <div>
        <div className="overflow-y-scroll position-fixed bottom-0 end-0"
        style={{ left: "320px", top: "100px" }}>
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>}/>
            <Route path="Grades" element={<Grades />} />
            <Route path="Quizzes/*" element={<Quizzes/>}/>
          </Routes>
        </div>
      </div>
    </div>
);}
export default Courses;