import React, { useEffect, useState } from "react";
import axios from "axios";

function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment";
  const [module, setModule] = useState({
    id: 1,
    name: "NodeJS Module",
    description: "Create a NodeJS Module",
    course: "Web Development",
  });
  const MODULE_URL = "http://localhost:4000/a5/module";
  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(
      `${ASSIGNMENT_URL}/title/${assignment.title}`
    );
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div>
      <h3>Working With Objects</h3>
      <h4>Modifying Properties</h4>
      <h3>Modifying Properties</h3>
      <input
        onChange={(e) =>
          setAssignment({
            ...assignment,
            title: e.target.value,
          })
        }
        value={assignment.title}
        type="text"
      />
      <br />
      <button className="btn btn-warning btn-sm" onClick={updateTitle}>Update Title to: {assignment.title}</button>
      <button className="btn btn-success btn-sm mx-1" onClick={fetchAssignment}>Fetch Assignment</button>

      <h5>Modifying Assignment Title</h5>
      <a
        className="btn btn-primary"
        href={`${ASSIGNMENT_URL}/title/${assignment.title}`}
      >
        Update Title
      </a>
      <br />
      <input
        type="text"
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
        value={assignment.title}
      />
      <br />
      <h5>Modifying Assignment Score</h5>
      <input
        type="number"
        value={assignment.score}
        onChange={(e) =>
          setAssignment({ ...assignment, score: parseInt(e.target.value) })
        }
      />
      <a
        className="btn btn-primary mx-2"
        href={`${ASSIGNMENT_URL}/score/${assignment.score}`}
      >
        Update Score
      </a>
      <br />
      <h5>Modifying Assignment Completion</h5>
      <input
        type="checkbox"
        checked={assignment.completed}
        onChange={(e) =>
          setAssignment({ ...assignment, completed: e.target.checked })
        }
      />
      <br />
      <a
        className="btn btn-primary mx-2"
        href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}
      >
        Update Completion
      </a>
      <br />
      <h5>Modifying Module Name</h5>
      <a className="btn btn-primary mx-2" style={{marginBottom:10}}href={`${MODULE_URL}/name/${module.name}`}>
        Update Module Name
      </a>
      <br />
      <input
        type="text"
        value={module.name}
        onChange={(e) => setModule({ ...module, name: e.target.value })}
      />
      <h4>Retrieving Objects</h4>
      <a className="btn btn-primary mx-2" href="http://localhost:4000/a5/assignment">
        Get Assignment
      </a>
      <a className="btn btn-primary mx-2" href="http://localhost:4000/a5/module">
        Get Module
      </a>
      <h4>Retrieving Properties</h4>
      <a
        className="btn btn-primary mx-2"
        href="http://localhost:4000/a5/assignment/title"
      >
        Get Title
      </a>
      <a
        className="btn btn-primary mx-2"
        href="http://localhost:4000/a5/module/name"
      >
        Get Module Name
      </a>
    </div>
  );
}
export default WorkingWithObjects;
