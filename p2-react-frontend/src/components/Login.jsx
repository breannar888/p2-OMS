import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { OrderState } from "../context/OrderContext";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ErrorMessage } from "./ErrorMessage";

export const Login = () => {
  const navigate = useNavigate();
  const { setCookie, removeCookie } = OrderState();
  const [loginError, setloginError] = useState();

  const loginSchema = Yup.object().shape({
    username: Yup.string()
      .max(35, "Too long! Must be shorter than 35 characters")
      .required("Username required"),
    password: Yup.string()
      .max(65, "Too long! Must be shorter than 65 characters")
      .required("Password required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = (data) => {
    axios
      .post("http://localhost:8080/login", {
        username: data.username,
        password: data.password,
        enabled: true,
      })
      .then((resp) => {
        if (resp.status === 200) {
          console.log(resp.data);
          setCookie("JSESSION", resp.data.sessionID);
          setCookie("authorities", resp.data.authorities);
          navigate("../add");
        }
      })
      .catch((err) => {
        setloginError(true);
        console.log(err);
      });
  };

  return (
    <div className="row">
      <div className="col-7 container p-5 rounded-2" id="login">
        <h2>Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group p-2">
            <input
              name="username"
              {...register("username")}
              className="form-control"
              placeholder="Username"
              id="username"
            />
            <ErrorMessage>{errors.username?.message}</ErrorMessage>
          </div>
          <div className="form-group p-2">
            <input
              type="password"
              {...register("password")}
              name="password"
              className="form-control"
              placeholder="Password"
              id="password"
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
          </div>
          {loginError ? (
            <ErrorMessage>Invalid username or password. Try again</ErrorMessage>
          ) : (
            <></>
          )}
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
