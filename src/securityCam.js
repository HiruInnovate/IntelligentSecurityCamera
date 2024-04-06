// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import "./App.css";
import { drawRect } from "./utilities";
import song from "./alsrmsound.mp3";

function SecurityCam() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [isAlarmActive, setIsAlarmActive] = useState(false);

    const [isSirenPlaying, setIsSirenPlaying] = useState(false);
  
    const playSiren = () => {
      setIsSirenPlaying(true);
    };
  
    const stopSiren = () => {
      setIsSirenPlaying(false);
    };

// Handle changes in the start and end time inputs
const handleStartTimeChange = (e) => {
  setStartTime(e.target.value);
};

const handleEndTimeChange = (e) => {
  setEndTime(e.target.value);
};

// Function to check if the current time is within the range
const checkCurrentTime = () => {
  const currentTime = new Date();
  const formattedStartTime = new Date(`2024-04-06T${startTime}`);
  const formattedEndTime = new Date(`2024-04-06T${endTime}`);

  if (currentTime >= formattedStartTime && currentTime <= formattedEndTime) {
    // Raise the alarm
    console.log('Alarm activated!');
    runCoco();

    setIsAlarmActive(true);
  }
};

// Function to stop the alarm
const stopAlarm = () => {
  setStartTime('');
  setEndTime('');
  stopSiren();
  setIsAlarmActive(false);
  window.location.reload(false);
};

  // Main function
  const runCoco = async () => {
    const net = await cocossd.load();
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };


  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const detections = await net.detect(video);

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");

        detections.forEach(prediction => {
      
          const text = prediction['class']; 

          if (text==="person")
        {  console.log("ALARMMMMMM");
          
           if(isSirenPlaying!=true)
           playSiren();
              }      
            }
        );
      
      drawRect(detections, ctx); 
    }
  };


 useEffect(()=>{

  if(isSirenPlaying===true)
  playSirenSound()

},[isSirenPlaying]);

  const playSirenSound=() =>{
    new Audio(song).play();
  };


  return (
    <div className="Security">
         <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Security Camera : Burglar Alarm</a>
        </div>
        <li class="nav navbar-nav">
          <li class="active"><a href="/">Home</a></li></li>
      </div>
    </nav>
       <audio
       id="sirenAudio"
        src="alarmsound.mp3" // Replace with the actual path or URL of your sound file
        autoPlay={isSirenPlaying}
        onEnded={stopSiren}
      />
      <header className="App-header">
      <div className="container mt-1">
      <div className="row">
        <div className="col-md-2 offset-md-3">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title">Set Time Interval</h2>
              <div className="form-group">
                <label>Start Time:</label>
                <input
                  type="time"
                  className="form-control"
                  value={startTime}
                  onChange={handleStartTimeChange}
                />
              </div>
              <div className="form-group">
                <label>End Time:</label>
                <input
                  type="time"
                  className="form-control"
                  value={endTime}
                  onChange={handleEndTimeChange}
                />
              </div>
              <button className="btn btn-primary" onClick={checkCurrentTime}>
                Check Time
              </button>
              {isAlarmActive && (
                <button className="btn btn-danger ml-2" onClick={stopAlarm}>
                  Stop Alarm
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div> 
        <Webcam
          ref={webcamRef}
          muted={true} 
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 9,
            width: 640,
            height: 480,
          }}
        />

        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            marginLeft: "auto",
            marginRight: "auto",
            left: 0,
            right: 0,
            textAlign: "center",
            zindex: 8,
            width: 640,
            height: 480,
          }}
        />
      </header>
    </div>
  );
}

export default SecurityCam;
