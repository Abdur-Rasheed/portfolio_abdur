import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Resume from "./Resume";
import Project from "./Project";
import Contact from "./Contact";

const Main = () => (
  <Routes>
    <Route exact path="/" element={<Home/>} />
    <Route path="/About" element={<About/>} />
    <Route path="/Resume" element={<Resume/>} />
    <Route path="/Project" element={<Project/>} />
    <Route path="/Contact" element={<Contact/>} />
  </Routes>
);
export default Main;