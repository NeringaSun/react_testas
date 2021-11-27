import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Register, Home, NotFound } from "./pages";

const PageRoutes = () => {
  return (
    <Router>
      <header>Cia turetu but navigacija</header>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default PageRoutes;
