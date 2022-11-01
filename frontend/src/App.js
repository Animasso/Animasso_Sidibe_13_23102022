import Home from "./Pages/Home ";
import { Routes, Route } from "react-router-dom";
import "./styles/index.css";
import Signin from "./Pages/Signin";
import UserProfil from "./Pages/UserProfil";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route />
        <Route path="/login" element={<Signin />} />
        <Route />
        <Route path="/user/login" element={<UserProfil />} />
        <Route />
      </Routes>
    </div>
  );
}

export default App;
