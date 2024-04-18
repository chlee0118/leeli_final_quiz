import React, { useState, useEffect } from "react";
import { useNavigate, useParams, Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as client from "../client";
import {
  addAssignment,
  updateAssignment,
  setAssignment,
} from "../assignmentsReducer";
import { KanbasState } from "../../../store";

function AssignmentEditor() {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [isNewAssignment, setIsNewAssignment] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setIsNewAssignment(location.pathname.endsWith("/new"));
  }, [location.pathname]);

  const assignment = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignment
  );
  const dispatch = useDispatch();

  const handleSave = async () => {
    if (isNewAssignment) {
      client.createAssignment(courseId, assignment).then((assignment) => {
        dispatch(addAssignment(assignment));
      });
    } else {
      const status = await client.updateAssignment(assignment);
      dispatch(updateAssignment(assignment));
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div
      className="overflow-y-scroll position-fixed bottom-0 end-0"
      style={{ left: "320px", top: "250px" }}
    >
      <h2>{isNewAssignment ? "Create Assignment" : "Edit Assignment"}</h2>
      <input
        name="title"
        value={assignment.title}
        onChange={(e) =>
          dispatch(setAssignment({ ...assignment, title: e.target.value }))
        }
        className="form-control mb-2"
      />
      <textarea
        name="description"
        value={assignment.description}
        onChange={(e) =>
          dispatch(
            setAssignment({ ...assignment, description: e.target.value })
          )
        }
        className="form-control mb-2"
      />
      <input
        name="points"
        type="number"
        value={assignment.points}
        onChange={(e) =>
          dispatch(setAssignment({ ...assignment, points: e.target.value }))
        }
        className="form-control mb-2"
      />
      <input
        name="dueDate"
        type="date"
        value={assignment.dueDate}
        onChange={(e) =>
          dispatch(setAssignment({ ...assignment, due_date: e.target.value }))
        }
        className="form-control mb-2"
      />
      <input
        name="availableFromDate"
        type="date"
        value={assignment.availableFromDate}
        onChange={(e) =>
          dispatch(
            setAssignment({ ...assignment, available_from: e.target.value })
          )
        }
        className="form-control mb-2"
      />
      <input
        name="availableUntilDate"
        type="date"
        value={assignment.availableUntilDate}
        onChange={(e) =>
          dispatch(
            setAssignment({ ...assignment, available_until: e.target.value })
          )
        }
        className="form-control mb-2"
      />
      <button onClick={handleSave} className="btn btn-success ms-2 float-end">
        Save
      </button>
      <Link
        to={`/Kanbas/Courses/${courseId}/Assignments`}
        className="btn btn-danger float-end"
      >
        Cancel
      </Link>
    </div>
  );
}

export default AssignmentEditor;
