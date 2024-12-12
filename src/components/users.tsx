import axios from "axios";
import { useEffect, useState } from "react";
import { GitHubUser } from "../../types";

const Users = () => {
  const [gitUsers, setGitUsers] = useState<GitHubUser[]>([]);

  const getGitUsers = async () => {
    const response = await axios.get("https://api.github.com/users?since=XXXX");
    console.log(response.data);
    setGitUsers(response.data);
    return response.data;
  };

  useEffect(() => {
    getGitUsers().catch((e) => console.error(e));
  }, []);
  return (
    <div style={{ marginTop: "50px" }}>
      {" "}
      <div className="users-cont">
        {gitUsers.map((user) => (
          <div className="user-card-cont" key={user.id}>
            <img
              src={user.avatar_url}
              alt="userAvatar"
              className="user-avatar"
            />
            <span className="username">{user.login}</span>
            <button className="view-btn">View User</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;