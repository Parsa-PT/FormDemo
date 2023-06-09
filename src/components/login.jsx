import React from "react";
import { useState } from "react";
import "./form.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
  const [Uname, setUname] = useState("");
  const [Pass, setPass] = useState("");
  let [Submit, setSubmit] = useState(false);
  const [err, setErr] = useState("");
  const [suc, setSuc] = useState("");
  const [detail, setDetail] = useState("");
  const history = useNavigate();

  const LogHandle = async (e) => {
    e.preventDefault();

    if (Uname || Pass === "") {
      setSubmit(false);
      setErr(true);
    } else {
      setSubmit((Submit = true));
    }

    if (Uname || Pass !== "") {
      await fetch("http://127.0.0.1:8000/api/token/", {
        method: "POST",
        body: JSON.stringify({
          username: Uname,
          password: Pass,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((res) => {
          if (res.status === 200) {
            setSuc("Login successful");
            setInterval(() => {
              history("/");
              window.location.reload();
            }, 2000);
          } 

          return res.json();
        })
        .then((data) => {
          console.log(data);
          localStorage.setItem("token", JSON.stringify(data.access));
          localStorage.setItem("loggedIn", true);
          setDetail(data.detail);
        });
    }
  };

  return (
    <div className="full">
      <h1>Login</h1>
      {suc ? <h2>{suc}</h2> : <h3 style={{ color: "red" }}>{detail}</h3>}

      <div className="base-container">
        <form onSubmit={LogHandle}>
          <input
            type="text"
            className="login-input"
            placeholder="Username"
            name="fname"
            value={Uname}
            onChange={(e) => setUname(e.target.value)}
          />
          {err && Uname.length <= 0 ? (
            <label>You need to enter your name</label>
          ) : null}
          <input
            type="password"
            className="login-input"
            placeholder="Password"
            name="pass"
            value={Pass}
            onChange={(e) => setPass(e.target.value)}
          />
          {err && Pass.length <= 0 ? (
            <label>You need to enter your password</label>
          ) : null}
          {Submit ? (
            <button className="btnreg">Done</button>
          ) : (
            <button className="btnreg">Submit</button>
          )}
          <p>
            <Link style={{ textDecoration: "none" }} to="/reg">
              If you don`t have an account <span>Register</span>{" "}
            </Link>
          </p>
        </form>

        {/* <Link to='/acc'>hhh</Link> */}
      </div>
    </div>
  );
};

export default Login;
