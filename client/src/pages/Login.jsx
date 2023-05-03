import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/AuthContext";
import { loginCall } from "../apiCalls";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isFething, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    loginCall({ email, password }, dispatch);
    navigate("/");
  };

  return (
    <div className=" w-full h-screen flex justify-center items-center bg-gray-600 ">
      <div className=" flex h-1/2 w-1/2 bg-white">
        <img
          className="cover "
          src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
        <div className="bg-gray-400 flex flex-col justify-center items-center w-full">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email Adresiniz</span>
            </label>
            <label className="input-group ">
              <span className="w-24"> Email</span>
              <input
                type="text"
                placeholder="info@site.com"
                className="input input-bordered"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>

          <form onSubmit={handleSubmit} className="form-control">
            <label className="label">
              <span className="label-text">Şifreniz</span>
            </label>
            <label className="input-group">
              <span>Password</span>
              <input
                type="password"
                placeholder="info@site.com"
                className="input input-bordered"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button
              type="submit"
              className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
            >
              {isFething ? "LÜtfen Bekleyiniz..." : "Giriş Yap"}
            </button>
          </form>
          <h1>
            Henuz Üye Olmadınız Mı?
            <span className="text-blue-600">
              {" "}
              <Link to={"/register"}>Üye Ol</Link>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
