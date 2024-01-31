import React, { useState } from 'react';
import axios from 'axios';

function SignUp() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  function signUpButton_click() {
    let url = "http://localhost:3005/api/signup";
    axios.post(url, { username, password}).then((resData) => {
    //   console.log(resData.data);
      setResult(resData.data.message)
    }).catch(error => {
      console.error('Sign-up failed', error.response.data);
    });
  }

  return (
    <>
      <fieldset>
        <legend>Create New Account</legend>

        <label>User Name : </label>
        <input type="text" value={username} onChange={(event) => setUsername(event.target.value)} />
        <br /><br />

        <label>Password  : </label>
        <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
        <br /><br />

        <input type="button" onClick={signUpButton_click} value="Sign Up" />
        <p style={{ color: "red" }}>{result}</p>
      </fieldset>
    </>
  );
}

export default SignUp;