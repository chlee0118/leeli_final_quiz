import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  updateAssignment,
} from "../assignmentsReducer";


function AssignmentEditor() {
  const { courseId, assignmentId } = useParams();
  const navigate = useNavigate();
  const isNewAssignment = assignmentId === "new";
  const dispatch = useDispatch();
  
  const foundAssignment = assignments.find(
    (assignment) => assignment._id === assignmentId);
  
  const [assignment, setAssignment] = useState({
    title: foundAssignment?.title || "",
    description: foundAssignment?.description || "",
    points: foundAssignment?.points || 0,
    dueDate: foundAssignment?.dueDate || "",
    availableFromDate: foundAssignment?.availableFromDate || "",
    availableUntilDate: foundAssignment?.availableUntilDate || ""
  });

  useEffect(() => {
    if (foundAssignment) {
      setAssignment({
        title: foundAssignment.title,
        description: foundAssignment.description,
        points: foundAssignment.points,
        dueDate: foundAssignment.dueDate,
        availableFromDate: foundAssignment.availableFromDate,
        availableUntilDate: foundAssignment.availableUntilDate
      });
    }
  }, [foundAssignment]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAssignment((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    const assignmentToSave = { ...assignment, course: courseId, _id: isNewAssignment ? `A${Date.now()}` : assignmentId };
    if (isNewAssignment) {
      dispatch(addAssignment(assignmentToSave));
    } else {
      dispatch(updateAssignment(assignmentToSave));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  

  return (
    <div
    className="overflow-y-scroll position-fixed bottom-0 end-0"
    style={{ left: "320px", top: "250px" }} >
      <h2>{isNewAssignment ? "Create Assignment" : "Edit Assignment"}</h2>
      <input
        name="title"
        value={assignment.title}
        onChange={handleInputChange}
        placeholder="Assignment Title"
        className="form-control mb-2"
      />
      <textarea
        name="description"
        value={assignment.description}
        onChange={handleInputChange}
        placeholder="Assignment Description"
        className="form-control mb-2"
      />
      <input
        name="points"
        type="number"
        value={assignment.points}
        onChange={handleInputChange}
        placeholder="Points"
        className="form-control mb-2"
      />
      <input
        name="dueDate"
        type="date"
        value={assignment.dueDate}
        onChange={handleInputChange}
        className="form-control mb-2"
      />
      <input
        name="availableFromDate"
        type="date"
        value={assignment.availableFromDate}
        onChange={handleInputChange}
        className="form-control mb-2"
      />
      <input
        name="availableUntilDate"
        type="date"
        value={assignment.availableUntilDate}
        onChange={handleInputChange}
        className="form-control mb-2"
      />
      <button onClick={handleSave} className="btn btn-success ms-2 float-end">
        Save
      </button>
      <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-danger float-end">
        Cancel
      </Link>
    </div>
  );
}

export default AssignmentEditor;