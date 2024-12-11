import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterMonster from "../pages/RegisterMonster";
import Battle from "../pages/Battle";
import Statistic from "../pages/Stats";
import StartGame from "../pages/Start";

export default function AppRouter(){
  return (
      <Router>
        <Routes>
          <Route path="/register-monster" element={<RegisterMonster />} />
          <Route path="/battle" element={<Battle />} />
          <Route path="/stats" element={<Statistic />} />
          <Route path="/" element={<StartGame />} />
        </Routes>
      </Router>
  );
};

