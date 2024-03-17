import React, { useState } from "react";
import "./index.css";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import { KanbasState } from "../../store";

function ModuleList() {
  const { courseId } = useParams();
  const moduleList = useSelector(
    (state: KanbasState) => state.modulesReducer.modules
  );
  const module = useSelector(
    (state: KanbasState) => state.modulesReducer.module
  );
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <button type="button">Collapse All</button>
        <button type="button">View Progress</button>
        <select id="Publish All">
          <option value="all">Publish All</option>
        </select>
        <button type="button">Module</button>
      </div>
      <hr />
      <ul className="list-group wd-modules">
        <li className="list-group-item d-flex align-items-start">
          <button
            className="button-green"
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}
          >
            Add
          </button>
          <button
            className="button-blue"
            onClick={() => dispatch(updateModule(module))}
          >
            Update
          </button>

          <div
            className="input-container"
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "10px",
            }}
          >
            <input
              style={{ padding: "2px", marginBottom: "10px" }}
              value={module.name}
              onChange={(e) =>
                dispatch(setModule({ ...module, name: e.target.value }))
              }
            />
            <textarea
              style={{ padding: "2px" }}
              value={module.description}
              onChange={(e) =>
                dispatch(setModule({ ...module, description: e.target.value }))
              }
            />
          </div>
        </li>

        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li className="list-group-item">
              <div>
                <FaEllipsisV className="me-2" />
                {module.name}
                <span className="float-end">
                  <button
                    className="button-blue-1"
                    onClick={() => dispatch(setModule(module))}
                  >
                    Edit
                  </button>

                  <button
                    className="button-red"
                    onClick={() => dispatch(deleteModule(module._id))}
                  >
                    Delete
                  </button>
                  <FaCheckCircle className="text-success" />
                  <FaPlusCircle className="ms-2" />
                  <FaEllipsisV className="ms-2" />
                </span>
              </div>
              {module._id === module._id && (
                <ul className="list-group">
                  {module.lessons?.map((lesson) => (
                    <li className="list-group-item">
                      <FaEllipsisV className="me-2" />
                      {lesson.name}
                      <span className="float-end">
                        <FaCheckCircle className="text-success" />
                        <FaEllipsisV className="ms-2" />
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </>
  );
}
export default ModuleList;
