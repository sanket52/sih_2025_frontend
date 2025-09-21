import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import About from "./Components/AboutUs/About";
import Project from "./Components/ProjectImpli/Project";
import Contact from "./Components/ContactUs/Contact";
import Faq from "./Components/Faqs/Faq";
import ProblemStat from "./Components/ProblemStat/ProblemStat";
import Footer from "./Footer";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/problem" element={<ProblemStat />} />
        <Route path="/project" element={<Project />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
