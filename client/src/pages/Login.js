import React, { useState } from "react";
import API from "../utils/API";

const Login = () => {
  const [userInput, setUserInput] = useState({});

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (userInput.email && userInput.password) {
      API.login(userInput)
        .then(() => {
          window.location.assign("/todos");
        })
        .catch(e => {
          console.log("error!", e);
        });
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form>
        <div class="input-group input-group-sm mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm">Email</span>
          </div>
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name="email"  onChange={handleInputChange} />
        </div>

        <div class="input-group input-group-sm mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-sm">Password</span>
          </div>
          <input type="password" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" name="password"  onChange={handleInputChange} />
        </div>
        <button onClick={handleFormSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default Login;
