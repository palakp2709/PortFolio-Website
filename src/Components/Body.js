import React from "react";

import { Home } from "./Home";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";
import Skill from "./Skill";

const Body = () => {
  return (
     <div>
       <Home/>
       <Skill/>
       <Project/>
       <About/>
       <Contact/>
     </div>
  )
};

export default Body;
