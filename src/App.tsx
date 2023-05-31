import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PostsList from "./components/PostsList";
import AboutMe from "./components/AboutMe";
import User from "./components/User";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PostsList />} />
        <Route path="aboutme" element={<AboutMe />} />
        <Route path="user" element={<User />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
