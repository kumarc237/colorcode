import React, { useState } from "react";

const Content = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className="container">
      <div className="card my-3 mt-3 w-50 mx-auto bg-primary">
        <div className="text-center mt-3">
          {""}
          <h2>Login page</h2>
        </div>
        <div className="card-body p-3">
          <input
            type="text"
            className="form-control my-3"
            placeholder="Enter your name"
            onChange={(e) => handleName(e)}
          />
          <input
            type="email"
            className="form-control my-3"
            placeholder="Enter your email"
            onChange={(e) => handleEmail(e)}
          />
          <input
            type="password"
            className="form-control my-3"
            placeholder="Enter your password"
            onChange={(e) => handlePassword(e)}
          />
        </div>
        <div className="text-center">
          <button className="btn btn-info my-2">Submit</button>
        </div>
      </div>
    </div>
  );
};
export default Content;
