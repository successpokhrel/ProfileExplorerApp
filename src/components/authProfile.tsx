import axios from "axios";
import React, { useEffect, useState } from "react";
import { GitHubUser } from "../../types"; // Adjust the import path if necessary

interface AuthProfileProps {
  username: string;
}

const AuthProfile: React.FC<AuthProfileProps> = ({ username }) => {
  const [gitUserData, setGitUserData] = useState<GitHubUser | null>(null);

  useEffect(() => {
    const getGitUser = async () => {
      try {
        const response = await axios.get<GitHubUser>(
          `https://api.github.com/users/${username}`
        );
        console.log("USER IS HERE", response.data);
        setGitUserData(response.data);
      } catch (e) {
        console.error(e);
      }
    };
    getGitUser();
  }, [username]);

  return (
    <div className="user-profile-main-cont">
      <h2 style={{ marginTop: "40px", marginBottom: "20px" }}>YOUR PROFILE</h2>
      <div className="top-cont">
        {gitUserData ? (
          <>
            <img
              src={gitUserData.avatar_url}
              className="user-avatar-img"
              alt="user-img"
            />
            <div className="name-cont">
              <span>{gitUserData.login}</span>
              <h2>{gitUserData.name || "No name available"}</h2>
              <div>
                <span style={{ display: "block" }}>
                  Company:{" "}
                  <span style={{ color: "purple", fontWeight: "700" }}>
                    {gitUserData.company || "No company info"}
                  </span>
                </span>
                <span>Public Repos: {gitUserData.public_repos}</span>
              </div>
              <h3>{gitUserData.location || "No location info"}</h3>
              <div className="follow-cont">
                <span className="followers">
                  Followers: {gitUserData.followers}
                </span>
                <span>Following: {gitUserData.following}</span>
              </div>
              <a
                className="view-ongit-a"
                href={gitUserData.html_url}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="bottom-cont">
        <h3>{gitUserData?.bio || "No bio available"}</h3>
      </div>
    </div>
  );
};

export default AuthProfile;
