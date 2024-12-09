import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import RegisterMonster from "../pages/RegisterMonster";
import Battle from "../pages/Battle";

export default function AppRouter(){
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register-monster" element={<RegisterMonster />} />
          <Route path="/battle" element={<Battle />} />
        </Routes>
      </Router>
  );
};

