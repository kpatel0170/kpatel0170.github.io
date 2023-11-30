import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Project from "./pages/Project/Project";
import Education from "./pages/Education/Education";
import Experience from "./pages/Experience/Experience";
import HomePage from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/projects" element={<Project />} />
          <Route exact path="/education" element={<Education />} />
          <Route exact path="/experience" element={<Experience />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
