import React from "react";

function Login({ username }) {
  return (
    <div className="container">

      <h1>Welcome  to {username}</h1>
      <form>

        <input placeholder="Email" />

        <input placeholder="Password" />

        <button>Login</button>

      </form>

    </div>
  );
}

export default Login;