import React from "react";

import { BrowserRouter } from "react-router-dom";


import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AddEvent from "./components/addEvent";



function App() {
  return (
    <BrowserRouter>
        <Navbar/>
          
        <Footer/>


     
        
    </BrowserRouter>


  );
}

export default App;
