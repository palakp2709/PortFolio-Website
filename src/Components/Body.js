import React from "react";

import { Home } from "./Home";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact";

const Body = () => {
  return (
     <div>
       <Home/>
      
       <Project/>
       <About/>
       <Contact/>
     </div>
  )
};

export default Body;
