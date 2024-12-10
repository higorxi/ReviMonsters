import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import RegisterMonster from "../pages/RegisterMonster";
import Battle from "../pages/Battle";
import Statistic from "../pages/Stats";

export default function AppRouter(){
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register-monster" element={<RegisterMonster />} />
          <Route path="/battle" element={<Battle />} />
          <Route path="/stats" element={<Statistic />} />
        </Routes>
      </Router>
  );
};

