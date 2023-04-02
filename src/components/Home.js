// import { BrowserRouter as Router , Routes  , Route } from "react-router-dom";
import React from "react";
import Header from "./Header"
import Project from "./project";
import Contact from "./contact";
import Footer from "./footer";
import SUBFooter from "./sub";
import MYSlider from "./sliderbox";
function Home() {
  return (
 <div className=" bg-[#151515]">
 
 <Header/>
  <MYSlider/>
  <Project/>
  <Contact/>
  <SUBFooter/>
   <Footer/>
    </div>   
    //    <Router>
    //  <div className=" bg-[#151515]">
    //  <Routes>
    //  <Route  path="/home"  element={<Header/>} />
    //  <Route  path="/skill"  element={ <MYSlider/>} />
    //  <Route  path="/projects"  element={<Project/>} />
    //  <Route  path="/contact"  element={<Contact/>} />
    //  </Routes>
    //  <SUBFooter/>
    //   <Footer/>
      
            
    //     </div>
    //     </Router>
  )
}

export default Home;




