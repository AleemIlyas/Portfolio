import { useState } from "react";
import { adminInstance } from "../../axios";
import style from "./adminLogin.module.css"; // import your CSS file here
import { useAuth } from "../../Context/AuthContext";

function AdminLogin() {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // send request to backend to authenticate user
    const data = JSON.stringify({ email, password });
    adminInstance
      .post("/adminLogin", data)
      .then((res) => {
        const token = res.data.token;
        localStorage.setItem("token", "Bearer " + token);
        login(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <h2>Admin Login</h2>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={email}
        onChange={handleEmailChange}
      />
      <label htmlFor="password">Password</label>
      <input
        type="text"
        name="password"
        id="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default AdminLogin;
