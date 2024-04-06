// Import dependencies
import React, { useRef, useState, useEffect } from "react";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import "./App.css";
import { drawRect } from "./utilities";
import song from "./alsrmsound.mp3";

function Caption() {
  const [image, setImage] = useState(null);
  const [purpose, setPurpose] = useState('');
  const [generatedCaption, setGeneratedCaption] = useState('');
  const imageInputRef = useRef(null);

  const handleImageUpload = (e) => {
    const uploadedImage = e.target.files[0];
    if (uploadedImage) {
      const imageUrl = URL.createObjectURL(uploadedImage);
      console.log(uploadedImage)
      setImage(imageUrl);
    }
  };

  const handleGenerateCaption =async () => {
    // Here, you can implement your caption generation logic based on the image and purpose.
    // For this example, we'll simply set a placeholder caption.
 
    // For this example, we'll simply set a placeholder caption.

// Define the API endpoint URL
const apiUrl = 'http://localhost:5000/upload'; // Replace with your API URL

// Create a FormData object to send the image and text parameter


// Create an image object
const img = new Image();

// Set an event listener for when the image has loaded
img.onload = async function() {
  // The image is now loaded and you can perform actions on it
  console.log('Image loaded');
  
  const canvas = document.createElement('canvas');

  // Set the canvas dimensions to match the image dimensions
  canvas.width = img.width;
  canvas.height = img.height;

  // Get the 2D rendering context of the canvas
  const ctx = canvas.getContext('2d');

  // Draw the image onto the canvas
  ctx.drawImage(img, 0, 0);

  // Convert the canvas content to a Data URL
  const dataUrl = canvas.toDataURL('image/jpeg');
  // You can also send the image to an API or perform any other actions
  console.log(dataUrl)
  const formData = new FormData();
  formData.append('image', dataUrl); // Replace with your image blob file
  formData.append('text_param', purpose); // Replace with your text parameter
  const req={"image": dataUrl, "text_param":purpose}
  // Make a POST request to the API
  await fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify(req),
    mode: 'cors'
  })
    .then((response) => {
      if (!response.ok) {
        //throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then((data) => {
      // Handle the response data (e.g., display the result)
      console.log('API Response:', data);
      console.log(formData.get('image'))
    })
    .catch((error) => {
      // Handle errors
      console.error('Error:', error);
    });
  
};

img.src=image;



    const placeholderCaption = 'A wonderful image with a meaningful caption!';
    setGeneratedCaption(placeholderCaption);
  };

  return (
    <div className="container mt-5">
       <div className="row">
       <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Caption Generator For Social Media Posts</a>
        </div>
        <li class="nav navbar-nav">
          <li class="active"><a href="/">Home</a></li></li>
      </div>
    </nav></div>
      
    <div className="row" style={{'margin-top': '50px'}}>

      <div className="container mt-4"  style={{ top: '100px' }}>
       <div className="col-md-4">
          <h4> Upload Image</h4>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={imageInputRef}
          />
          {image && <img src={image} alt="Uploaded" className="img-fluid mt-3"  style={{ width: '400px', height: '350px' }} />}
        </div>
        <div className="col-md-7">
        <div className="col-md-4" style={{ float: 'right' }}>
          <h4>Purpose of Post</h4>
          <input
            type="text"
            placeholder="Enter purpose of post"
            value={purpose}
            onChange={(e) => setPurpose(e.target.value)}
            className="form-control mb-3"
          />
        <br></br>  
          <button
            className="btn btn-primary"
            onClick={handleGenerateCaption}
          >
            Generate Caption
          </button>
          {generatedCaption && (
            <div className="mt-3">
              <h3>Generated Caption</h3>
              <p>{generatedCaption}</p>
            </div>
          )}
        </div>
        </div>
      </div>
       
      
      </div>
    </div>
  );
}
    


export default Caption;
