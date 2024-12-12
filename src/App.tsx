import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/home";
import AboutUs from "./components/about";
import Users from "./components/users";

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  )
}

export default App
