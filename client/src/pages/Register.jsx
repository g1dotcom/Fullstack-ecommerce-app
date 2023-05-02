import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePicture, setProfilePicture] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username,
      email,
      password,
    };

    if (profilePicture) {
      const data = new FormData();
      const filename = Date.now() + profilePicture.name;
      data.append("name", filename);
      data.append("file", profilePicture);
      user.profilePicture = filename;
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
          onChange={handleSubmit}
          className="bg-gray-400 flex flex-col justify-center items-center w-full"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text">Kullanıcı Adınız</span>
            </label>
            <label className="input-group">
              <span>Username</span>
              <input
                type="email"
                placeholder="info@site.com"
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
          <h1>
            Zaten Üyemisin?
            <span className="text-blue-600">
              {" "}
              <Link to={"/login"}>Giriş Yap</Link>
            </span>
          </h1>
        </form>
      </div>
    </div>
  );
};

export default Register;
