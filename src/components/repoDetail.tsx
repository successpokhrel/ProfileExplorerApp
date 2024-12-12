import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router";
import { Repo } from "../../types";

const RepoDetail = () => {
  const [gitRepoData, setGitRepoData] = useState<Repo | null>(null);
  const [cloneCopy, setCloneCopy] = useState<boolean>(false);
  const { name, username } = useParams();

  useEffect(() => {
    const getGitUser = async () => {
      const response = await axios.get<Repo>(
        `https://api.github.com/repos/${username}/${name}`
      );
      console.log("USER IS HERE", response.data);
      setGitRepoData(response.data);
      return response.data;
    };
    getGitUser().catch((e) => console.error(e));
  }, [username, name]);
  return (
    <div>
      <div className="top-cont">
        {gitRepoData ? (
          <>
            <img
              className="avatar-img"
              src={gitRepoData.owner.avatar_url}
              alt=""
              style={{ width: "30%" }}
            />
            <div className="name-cont">
              <span className="username">
                Owner:{" "}
                <Link to={`/users/user/${gitRepoData.owner.login}`}>
                  {gitRepoData.owner.login}
                </Link>
              </span>
              <span className="repo-lang-span">
                Language: {gitRepoData.language}
              </span>
              <h2>{gitRepoData.name}</h2>
              <div className="follow-cont">
                <a
                  className="view-ongit-a"
                  href={gitRepoData.html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  View on GitHub
                </a>
                <div>
                  <input
                    className="clone-url-inp"
                    type="text"
                    value={gitRepoData.clone_url}
                  />
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(gitRepoData.clone_url);
                      setCloneCopy((isCopied) => !isCopied);
                      setTimeout(
                        () => setCloneCopy((isCopied) => !isCopied),
                        3000
                      );
                    }}
                  >
                    {cloneCopy ? "Copied" : "Clone"}
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          <h1>Loadin...</h1>
        )}
      </div>
    </div>
  );
};
export default RepoDetail;
