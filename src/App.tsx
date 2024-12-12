import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/home";
import AboutUs from "./components/about";
import Users from "./components/users";
import Navbar from "./components/navbar";
import NotFound from "./components/notFound";
import UserProfile from "./components/userProfile";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/users" element={<Users />} />
          <Route path="/users/user/:username" element={<UserProfile />} />
        </Route>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
