import React, { useState, useEffect } from "react";
import axios from "axios";

function WorkingWithArrays() {
  const API_BASE = process.env.REACT_APP_API_BASE;
  const API = `${API_BASE}/a5/todos`;
  const [todo, setTodo] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-09-09",
    completed: false,
  });
  const [todos, setTodos] = useState<
    {
      id: number;
      title: string;
      description: string;
      due: string;
      completed: boolean;
    }[]
  >([]);

  const fetchTodos = async () => {
    const response = await axios.get(API);
    setTodos(response.data);
  };
  useEffect(() => {
    fetchTodos();
  }, []);

  const removeTodo = async (todo) => {
    const response = await axios.get(`${API}/${todo.id}/delete`);
    setTodos(response.data);
  };
  const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    setTodos(response.data);
  };
  const fetchTodoById = async (id) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };
  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };
  const [errorMessage, setErrorMessage] = useState(null);
  const deleteTodo = async (todo) => {
    try {
      const response = await axios.delete(`${API}/${todo.id}`);
      setTodos(todos.filter((t) => t.id !== todo.id));
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };
  const updateTodo = async () => {
    try {
      const response = await axios.put(`${API}/${todo.id}`, todo);
      setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    } catch (error) {
      console.log(error);
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div>
      {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">{errorMessage}</div>
      )}

      <h3>Working with Arrays</h3>
      <h4>Todos</h4>
      <button
        className="mx-3 btn btn-info"
        style={{ marginBottom: 10 }}
        onClick={createTodo}
      >
        Create Todo
      </button>
      <br />
      <button
        className="mx-3 btn btn-success"
        style={{ marginBottom: 10 }}
        onClick={updateTitle}
      >
        Update Title
      </button>
      <br />
      <button
        className="mx-3 btn btn-secondary"
        style={{ marginBottom: 10 }}
        onClick={updateTodo}
      >
        Update Todo
      </button>
      <br />
      <input
        style={{ marginBottom: 10 }}
        type="text"
        value={todo.title}
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
      />
      <br />
      <textarea
        style={{ marginBottom: 10 }}
        value={todo.description}
        onChange={(e) =>
          setTodo({
            ...todo,
            description: e.target.value,
          })
        }
      />
      <br />
      <input
        style={{ marginBottom: 10 }}
        value={todo.due}
        type="date"
        onChange={(e) =>
          setTodo({
            ...todo,
            due: e.target.value,
          })
        }
      />
      <br />
      <label>
        <input
          style={{ marginBottom: 10 }}
          value={todo.completed.toString()}
          type="checkbox"
          onChange={(e) =>
            setTodo({
              ...todo,
              completed: e.target.checked,
            })
          }
        />
        Completed
      </label>
      <br />
      <button
        style={{ marginBottom: 10 }}
        className="mx-3 btn btn-warning"
        onClick={postTodo}
      >
        {" "}
        Post Todo{" "}
      </button>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: 10 }}>
            <input checked={todo.completed} type="checkbox" readOnly />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>

            <button
              className="mx-3 btn btn-warning btn-sm"
              onClick={() => fetchTodoById(todo.id)}
            >
              Edit
            </button>

            <button
              onClick={() => deleteTodo(todo)}
              className="btn btn-danger ms-2"
              style={{ marginRight: 10 }}
            >
              Delete
            </button>

            {todo.title}
          </li>
        ))}
      </ul>
      <h4>Retrieving Arrays</h4>
      <a href={API}>Get Todos</a>
      <h4>Retrieving an Item from an Array by ID</h4>
      <input
        value={todo.id}
        onChange={(e) => setTodo({ ...todo, id: parseInt(e.target.value) })}
      />
      <a className="mx-3 btn btn-info" href={`${API}/${todo.id}`}>
        Get Todo by ID
      </a>
      <h3>Filtering Array Items</h3>
      <a className="mx-3 btn btn-success" href={`${API}?completed=true`}>
        Get Completed Todos
      </a>
      <h3>Creating new Items in an Array</h3>
      <a className="mx-3 btn btn-dark" href={`${API}/create`}>
        Create Todo
      </a>
      <h3>Deleting from an Array</h3>
      <a className="mx-3 btn btn-secondary" href={`${API}/${todo.id}/delete`}>
        Delete Todo with ID = {todo.id}
      </a>

      <h3>Updating an Item in an Array</h3>
      <a
        style={{ marginBottom: 10 }}
        className="mx-3 btn btn-warning"
        href={`${API}/${todo.id}/title/${todo.title}`}
      >
        Update Title to {todo.title}
      </a>
      <input
        type="text"
        value={todo.title}
        onChange={(e) =>
          setTodo({
            ...todo,
            title: e.target.value,
          })
        }
      />
      <br />
      <textarea
        value={todo.description}
        onChange={(e) =>
          setTodo({
            ...todo,
            description: e.target.value,
          })
        }
      />
      <br />
      <a
        style={{ marginBottom: 10 }}
        className="mx-3 btn btn-info"
        href={`${API}/${todo.id}/description/${todo.description}`}
      >
        Describe Todo ID = {todo.id}
      </a>

      <br />

      <input
        type="checkbox"
        checked={todo.completed}
        onChange={(e) =>
          setTodo({
            ...todo,
            completed: e.target.checked,
          })
        }
      />

      <a
        className="mx-3 btn btn-success"
        href={`${API}/${todo.id}/completed/${todo.completed}`}
      >
        Complete Todo ID = {todo.id}
      </a>
      <br />
    </div>
  );
}
export default WorkingWithArrays;
