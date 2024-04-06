// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import hiru from './hiru.jpg'

import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

import "./App.css";
import SecurityCam from "./securityCam";
import Caption from "./caption";

function Home() {
  

 return (
 <div>
<div className="top-navbar">
      <div className="logo">
        <h1 className="title">Final Project : CEP IIT DELHI</h1>
      </div>
    </div>
    <div id="about" class="section">
			<div class="container" style={{ marginLeft: '250px' }}>
			<div style={{ borderRadius: '50%', overflow: 'hidden', width: '200px', height: '200px' }}>
      <img
        src={hiru}
        alt="Rounded Image"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
				
				<div class="row" style={{ marginLeft: '20px' }}>
					<div class="col-md-6 col-xs-11 wow fadeInLeft" data-wow-delay="0.9s">
						<h2>About Hiranmoy</h2>
						<h4>Microservice Engineer and AI enthusiast</h4>
						<p>I'm a seasoned Senior Developer with a passion for crafting innovative solutions that drive results for e-commerce clients. 
                        </p>
						<p>With 4+ years of hands-on experience, I thrive in the world of Java, microservice architecture, and REST API development. I firmly believe in the power of teamwork and agile methodologies to deliver exceptional outcomes.</p>
					</div>
					
				</div>
			</div>
		</div>
      <div className="portfolio">
		<div id="work" class="section">
			<div class="container">
				<div class="row">
					<div class="col-md-12 wow bounce">
						<h2>Welcome to my AI Lab</h2>
					</div>
                </div>  
                
                <div class="row" style={{ marginLeft: '250px' }}>
					<div class="col-md-4 col-xs-11 wow fadeInUp" data-wow-delay="0.6s">
						<div class="media">
							<div class="media-object media-left">
								<i class="fa fa-laptop"></i>
							</div>
							<div class="media-body">
								<a href="/securitycam"><h3 class="media-heading">Security Camera : AI Alarm</h3></a>
								<p>An intelligent security camera system based on Real Time Object Detection - using COCO SSD and Tensorflow.js </p>
							</div>
						</div>
					</div>
                    
                    
				</div>
			</div>
		</div>
	
		
	
      </div>

 </div>
    
  );
}
export default Home;
