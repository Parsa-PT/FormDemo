import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./form.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [username, setFname] = useState("");
  const [fullname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPass] = useState("");
  const [password2, setCPass] = useState("");
  let [Submit, setSubmit] = useState(false);
  let [disabled, setDisabled] = useState(false);
  const [err, setErr] = useState("");
  const [userid, setId] = useState();
  const history = useNavigate();

  useEffect(() => {
    setId(Math.floor(Math.random() * 500));
  }, []);

  const RegHandle = async (e) => {
    e.preventDefault();

    const data = { username, fullname, email, password1, password2, userid };

    if (username || fullname || email || password1 || password2 === "") {
      setSubmit(false);
      setErr(true);
      if (password1 !== password2) {
        alert("Passwords is not match");
      }
    } else {
      setSubmit((Submit = true));
    }

    if (username || fullname || email || password1 || password2 !== "") {
      await fetch("http://127.0.0.1:8000/register/", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }).then((response) => {
        if (response.ok === true) {
          setTimeout(() => {
            history("/login");
          }, 1000);

          setDisabled(true);
        } else {
          alert("please try again");
        }

        return response.json();
      });
    }
  };

  return (
    <div className="full">
      <h1>Sign up</h1>
      <div className="base-container">
        <form onSubmit={RegHandle}>
          <input
            type="text"
            placeholder="Username"
            name="username"
            value={username}
            onChange={(e) => setFname(e.target.value)}
          />
          {err && username.length <= 0 ? (
            <label>You need to enter your name</label>
          ) : null}

          <input
            type="text"
            placeholder="Fullname"
            name="fullname"
            value={fullname}
            onChange={(e) => setLname(e.target.value)}
          />
          {err && fullname.length <= 0 ? (
            <label>You need to enter your name</label>
          ) : null}

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {err && email.length <= 0 ? (
            <label>You need to enter your email</label>
          ) : null}

          <input
            type="password"
            placeholder="Password"
            name="pass"
            value={password1}
            onChange={(e) => setPass(e.target.value)}
          />
          {err && password1.length <= 0 ? (
            <label>You need to enter your password</label>
          ) : null}

          <input
            type="password"
            placeholder="Confirm"
            name="pass"
            value={password2}
            onChange={(e) => setCPass(e.target.value)}
          />
          {err && password2.length <= 0 ? (
            <label>You need to confirm your password</label>
          ) : null}

          {Submit ? (
            <button className="btnreg" type="submit">
              Done
            </button>
          ) : (
            <button className="btnreg" disabled={disabled} type="submit">
              Submit
            </button>
          )}
          <p>
            {" "}
            <Link style={{ textDecoration: "none" }} to="/login">
              If you have an account <span>Login</span>{" "}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;