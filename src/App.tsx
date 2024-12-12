import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/home";
import AboutUs from "./components/about";
import Users from "./components/users";
import Navbar from "./components/navbar";
import NotFound from "./components/notFound";
import UserProfile from "./components/userProfile";
import SearchUser from "./components/searchUser";
import { useState } from "react";
import Login from "./components/login";
import AuthProfile from "./components/authProfile";

function App() {
  const [username, setUsername] = useState<string>("");
  const [isLogged, setIsLogged] = useState<boolean>(false);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/user/:username" element={<UserProfile />} />
          <Route path="/search" element={<SearchUser />} />
          <Route 
            element={<Login setIsLogged={setIsLogged} setUsername={setUsername}/>}
            path="/login"
          />
          <Route 
            element={<AuthProfile username={username}/>}
            path="/authProfile"
          />
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
