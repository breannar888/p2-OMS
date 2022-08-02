import React from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {

  const navigate = useNavigate();

  return (
    <div className="row">
        <div className="col-7 login container p-5 rounded-2">
            <h2>Login</h2>
            <form onSubmit={() => {navigate("../add")}}>
                <div className="form-group p-2">
                    <input name="notes" className="form-control" placeholder="Username" id="username"/>
                </div>
                <div className="form-group p-2">
                    <input type="password" name="notes" className="form-control" placeholder="Password" id="password"/>
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
