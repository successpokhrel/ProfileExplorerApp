import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";

const SearchUser = () => {
  const [username, setUsername] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState<string>("Submit");
  const [attempts, setAttempts] = useState<number>(3);

  const handleGetUser = async (): Promise<any> => {
    if (username) {
      try {
        const response = await axios.get(
          `https://api.github.com/users/${username}`
        );
        if (response.status === 200) {
          console.log(response.data);
        }
        return response;
      } catch (error) {
        throw new Error("User does not exist");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading("Loading...");
    if (username) {
      handleGetUser().catch(() => {
        setLoading("Submit");
        setAttempts((currentAttempt) => currentAttempt - 1);
        setErrorMsg(
          `User Does Not Exist! ${attempts - 1} Attempts remaining`
        );
      });
    }
  };

  useEffect(() => {
    if (attempts <= 0) {
      setErrorMsg("Too many attempts, REDIRECTING...");
    }
  }, [attempts]);

  return (
    <>
      <h3>Search User</h3>
      <form className="login-form" onSubmit={handleSubmit}>
        {errorMsg && (
          <span style={{ fontSize: "12px", color: "orangered" }}>
            {errorMsg}
          </span>
        )}
        <input
          type="text"
          placeholder="Github Surname"
          className="login-inp"
          onChange={(e) => {
            setUsername(e.target.value);
            setErrorMsg(null);
          }}
          value={username ? username : ""}
        />
        <button type="submit" className="login-submit-btn">
          {loading}
        </button>
      </form>
    </>
  );
};

export default SearchUser;
