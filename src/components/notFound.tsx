import { Link } from "react-router";

const NotFound = () => {
  return (
      <div>
        <h1>Page Not found</h1>
        <Link to={"/"}>Go back to home</Link>
      </div>
  );
};

export default NotFound;
