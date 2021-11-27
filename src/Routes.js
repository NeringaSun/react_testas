import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Navigation, Header, Button, Container } from "./components";
import { Register, Login, Home, Add, NotFound } from "./pages";

const pages = [
  { url: "/Register", name: "Register" },
  { url: "/Login", name: "Login" },
  { url: "/Home", name: "Home" },
  { url: "/Add", name: "Add" },
];

const PageRoutes = () => {
  return (
    <Router>
      <Header>
        <Navigation links={pages} />
      </Header>
      <Container>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add" element={<Add />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default PageRoutes;
