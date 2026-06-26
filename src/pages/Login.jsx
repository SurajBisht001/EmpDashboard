import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useContext(AuthContext);

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      username === "admin" &&
      password === "123"
    ) {
      login();
      navigate("/dashboard");
    } else {
      alert("Invalid User");
    }
  };

  return (
    <div className="login-page">
      <h1>Employee Portal</h1>
       <p className="subtitle">
          Please enter your credentials to continue. 
        </p>
      <div className="login-card">
        <h2>Login</h2>

        <form
          className="login-form"
          onSubmit={handleLogin}
        >
          <input
            placeholder="Username"
            value={username}
            onChange={(e) =>
              setUsername(e.target.value)
            }
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />

          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
