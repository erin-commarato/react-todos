import React, { useState } from "react";
import API from "../utils/API";

// TODO add validation for email
// TODO add password confirm field
// TODO validate password and password confirm matches

const Register = () => {
  const [userInput, setUserInput] = useState({});

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUserInput({ ...userInput, [name]: value });
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (userInput.email && userInput.password) {
      API.register(userInput)
        .then(res => {
          console.log('res', res)
          alert('You are now registered! Please login')
          window.location.assign('/login')
        })
        .catch(e => {
          console.log("error!", e);
        });
    }
  };

  return (
    <div>
      <h1>Register</h1>
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

export default Register;
