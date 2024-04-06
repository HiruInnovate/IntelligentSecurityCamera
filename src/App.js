// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import Webcam from "react-webcam";
import "./App.css";
import { drawRect } from "./utilities";
import song from "./alsrmsound.mp3";
import SecurityCam from "./securityCam";
import Caption from "./caption";
import Home from "./home";

function App() {


  return (
    <div>
      <Router>
      <div className="App">
        <Routes>
        <Route exact path="/" element={<Home/>}/>
          <Route path="/securitycam" element={<SecurityCam/>}/>
          <Route path="/caption" element={<Caption/>}/>
        </Routes>
       
       </div>

      </Router>
    
    </div>

  );
}

export default App;
