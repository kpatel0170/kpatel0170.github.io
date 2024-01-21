import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Project from "./pages/Project/Project";
import Education from "./pages/Education/Education";
import Experience from "./pages/Experience/Experience";
import HomePage from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Resume from "./components/Resume/Resume";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/projects", element: <Project /> },
  { path: "/education", element: <Education /> },
  { path: "/experience", element: <Experience /> },
  { path: "/resume", element: <Resume /> }, 
];

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <NavBar />
    <main className="flex-grow">{children}</main>
    <Footer />
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map(({ path, element }, index) => (
            <Route key={index} path={path} element={<Layout>{element}</Layout>} />
          ))}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
