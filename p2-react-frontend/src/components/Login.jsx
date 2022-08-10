import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";
import { OrderState } from "../context/OrderContext";
import { useCookies } from "react-cookie";

export const Login = () => {
  const navigate = useNavigate();
  const { cookies, setCookie } = OrderState();

  const userRef = useRef();
  const passRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/login", {
        username: userRef.current.value,
        password: passRef.current.value,
        enabled: true,
      })
      .then((resp) => {
        console.log(resp.data);
        if (resp.status === 200) {
          setCookie("JSESSIONID", resp.data.sessionID);
          setCookie("authorities", resp.data.authorities);
          navigate("../add");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="row">
      <div className="col-7 login container p-5 rounded-2">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group p-2">
            <input
              name="username"
              ref={userRef}
              className="form-control"
              placeholder="Username"
              id="username"
            />
          </div>
          <div className="form-group p-2">
            <input
              type="password"
              ref={passRef}
              name="password"
              className="form-control"
              placeholder="Password"
              id="password"
            />
          </div>
          <div className="form-group p-2">
            <button type="submit" className="btn" id="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
