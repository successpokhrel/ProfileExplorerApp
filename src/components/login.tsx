import { useState } from "react";
import { useNavigate } from "react-router";

interface LoginProps {
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
}

const Login: React.FC<LoginProps> = ({ setIsLogged, setUsername }) => {
  const [loginUsername, setLoginUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const navigate = useNavigate();

  const dummyUserObject = {
    username: "Kolosafo",
    password: "12345",
  };

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      loginUsername === dummyUserObject.username &&
      password === dummyUserObject.password
    ) {
      setUsername(loginUsername);
      setIsLogged(true);
      navigate("/authProfile");
    } else {
      setErrorMsg("Invalid Credentials");
    }
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <span className="error-span">{errorMsg}</span>
      <label htmlFor="username" className="login-label">
        Username
      </label>
      <input
        type="text"
        name="username"
        value={loginUsername}
        onChange={(e) => {
          setLoginUsername(e.target.value);
          setErrorMsg("");
        }}
        className="login-inp"
        placeholder="username"
      />
      <label htmlFor="password" className="login-label">
        Password
      </label>
      <input
        type="password"
        name="password"
        value={password}
        className="login-inp"
        onChange={(e) => {
          setPassword(e.target.value);
          setErrorMsg("");
        }}
        placeholder="password"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
