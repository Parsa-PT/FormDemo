import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import "./form.css";

const Account = ({ Id }) => {
  let [info, setInfo] = useState({});

  const history = useNavigate();

  useEffect(() => {
    let item = localStorage.getItem("token");

    const decode = jwt_decode(item);

    setInfo(decode);
  }, []);

  const logout = () => {
    localStorage.clear();
    history("/");
    window.location.reload();
  };
  const deletehandler = (id) => {
    fetch(`http://127.0.0.1:8000/deleteuser/${id}/`, {
      method: "DELETE",
      headers: { "Content-Type": "application/jsonn" },
    }).then((re) => {
      localStorage.clear();
      history("/");
      window.location.reload();
      return re.json();
    });
  };

  return (
    <div className="full">
      <h1>Profile</h1>
      <div className="base-container2">
        <h4>username : {info.username}</h4>
        <h4>Email : {info.email}</h4>
        <button className="btnreg" onClick={logout} style={{ width: "100%" }}>
          Logout
        </button>
        <button
          className="btnreg"
          onClick={() => deletehandler(info.userid)}
          style={{ width: "100%" }}
        >
          Delete account
        </button>
      </div>
    </div>
  );
};

export default Account;
