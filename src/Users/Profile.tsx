import React from "react";
import * as client from "./client";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
export default function Profile() {
  const [profile, setProfile] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    role: "USER",
  });
  
  const navigate = useNavigate();
  const save = async () => {
    await client.updateUser(profile);
  };
  const signout = async () => {
    await client.signout();
    navigate("/Kanbas/Account/Signin");
  };
  const fetchProfile = async () => {
    const account = await client.profile();
    setProfile(account);
  };
  useEffect(() => {
    fetchProfile();
  }, []);
  
  return (
    <div>
      <h1>Profile</h1>
      {profile && (
        <div>
          <Link
            to="/Kanbas/Account/Admin/Users"
            className="btn btn-warning w-100"
            style={{ marginBottom: 10 }}
          >
            Users
          </Link>
          <br />
          <input
            value={profile.username}
            style={{ marginBottom: 10 }}
            onChange={(e) =>
              setProfile({ ...profile, username: e.target.value })
            }
          />
          <br />
          <input
            value={profile.password}
            style={{ marginBottom: 10 }}
            onChange={(e) =>
              setProfile({ ...profile, password: e.target.value })
            }
          />
          <br />
          <input
            value={profile.firstName}
            style={{ marginBottom: 10 }}
            onChange={(e) =>
              setProfile({ ...profile, firstName: e.target.value })
            }
          />
          <br />
          <input
            value={profile.lastName}
            style={{ marginBottom: 10 }}
            onChange={(e) =>
              setProfile({ ...profile, lastName: e.target.value })
            }
          />
          <br />
          <input
            value={profile.dob}
            style={{ marginBottom: 10 }}
            type="date"
            onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
          />
          <br />
          <input
            value={profile.email}
            style={{ marginBottom: 10 }}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
          <br />
          <select
            style={{ marginBottom: 10 }}
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          >
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <br />
          <button style={{ marginBottom: 10 }} className="btn btn-success" onClick={save}>
            Save
          </button>
          <br />
          <button className="btn btn-danger" onClick={signout}>Signout</button>
        </div>
      )}
    </div>
  );
}
