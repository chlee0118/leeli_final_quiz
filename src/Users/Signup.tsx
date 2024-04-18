import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as client from "./client";
export default function Signup() {
  const [error, setError] = useState("");
  const [user, setUser] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const signup = async () => {
    await client.signup(user);
    navigate("/Kanbas/Account/Profile");
  };
  return (
    <div>
      <h1>Signup</h1>
      {error && <div>{error}</div>}
      <input
        placeholder="username"
        style={{ marginBottom: 10 }}
        value={user.username}
        onChange={(e) =>
          setUser({
            ...user,
            username: e.target.value,
          })
        }
      />
      <br />
      <input
        placeholder="password"
        style={{ marginBottom: 10 }}
        value={user.password}
        onChange={(e) =>
          setUser({
            ...user,
            password: e.target.value,
          })
        }
      />
      <br />
      <button className="btn btn-primary" onClick={signup}>
        {" "}
        Signup{" "}
      </button>
    </div>
  );
}
