import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import RegisterMonster from '../pages/RegisterMonster';
import Battle from '../pages/Battle';

const AppRouter: React.FC = () => {
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

export default AppRouter;
