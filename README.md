# Intelligent Security Camera
This is my final project in IIT Delhi CEP course 2023 batch, - a Computer Vision project which runs on React JS powered by COCO SSD tensorflow.js model.
The COCO SSD helps us to detect objects in real time. This project provides an utility to switch on a security camera where you can set the time interval in which you want to trigger an alarm if any person trespasses your 
room or shop etc without your permission.

This project is for demonstrating object detection algorithm and utilizing it to solve a security problem.
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run?

1. Make sure you have Node JS installed
2. Update the date in securityCam.js to today's date ( you can customise this to be  picked up on the go)
3. Run `npm install`
4. Run `npm start`
5. A portfolio page will appear, go to the project section and click on Security Cam project
6. Set the start time to current time, and end time to some time later (as desired)
7. Click on Check Time - this will check if start time is equal to current time or not.
If its equal the alarm app will start.
8. It might take some time to load the COCO SSD ML model first time and start object detections, depending on your hardware configurations 
9. Set the time interval in which you want to test the alarm
10. First make sure you are away from the web camera scope, bring some objects like bottles, mobile phones etc
to test the object detection
11. Now ask some one (or you) , to come infront of the camera
12. The alarm triggers since it will identify a person.


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

# About me
I am `Hiranmoy Goswami`, I am passionate about `AI/ML/DL` , `Generative AI applications` and their use in different domains, I also love to build `web applications` using `Java, React`, I have backend development experience with Java[Microservices]. For any work, you can reach out to me at...

* [LinkedIn](https://www.linkedin.com/in/hiranmoy-goswami-1997-dev/)
* [Youtube](https://www.youtube.com/channel/UCzQ9e6BsI1XiBWD3wlBRfrQ)