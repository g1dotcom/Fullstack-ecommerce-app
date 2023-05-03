import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username,
      email,
      password,
    };
    if (profilePicture) {
      const data = new FormData();
      const fileName = Date.now() + profilePicture.name;
      data.append("name", fileName);
      data.append("file", profilePicture);
      user.profilePicture = fileName;
      try {
        await axios.post("/upload", data);
      } catch (err) {
        console.log(err);
      }
    }
    try {
      const res = await axios.post("/auth/register", user);
      if (res.status === 200) {
        toast.success("Registration succesfull!");
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className=" w-full h-screen flex justify-center items-center bg-gray-600 ">
      <div className=" flex h-1/2 w-1/2 bg-white">
        <img
          className="cover "
          src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          alt=""
        />
        <form
          onSubmit={handleSubmit}
          className="bg-gray-400 flex flex-col justify-center items-center w-full"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Kullanıcı Adınız</span>
            </label>
            <label className="input-group">
              <span>Username</span>
              <input
                type="text"
                placeholder="username"
                className="input input-bordered"
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>
          </div>
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

          <div className="form-control">
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
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Profil Fotoğrafınız</span>
            </label>
            <input
              type="file"
              className="file-input file-input-bordered file-input-primary w-full max-w-xs"
              onChange={(e) => setProfilePicture(e.target.files[0])}
            />
          </div>
          <button
            type="submit"
            className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg"
          >
            Responsive
          </button>
          <h1>
            Zaten Üyemisin?
            <span className="text-blue-600">
              <Link to={"/login"}>Giriş Yap</Link>
            </span>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default Register;
