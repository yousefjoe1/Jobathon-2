import React from "react";
import { useState } from "react";

import st from "./login.module.css";

const LogIn = ({ submit }) => {
  const [user, setUser] = useState({ user_name: "", user_password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    submit(user.user_name, user.user_password);
    console.log(user);
  };

  const handleChange = (e) => {
    const theUser = { [e.target.name]: e.target.value };
    setUser({ ...user, ...theUser });
  };

  return (
    <>
      <section className={st.login_section}>
        <div className={st.loginDiv}>
          <form className={st.form} onSubmit={handleSubmit}>
            <label htmlFor="username-input">User Name</label>
            <input
              onChange={handleChange}
              name="user_name"
              id="username-input"
              type="email"
            />
            <label htmlFor="password-input">User Password</label>
            <input
              onChange={handleChange}
              name="user_password"
              id="password-input"
              type="password"
            />
            <br />
            <button id="login-button" className="btn btn-primary my-2">
              Login
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default LogIn;
