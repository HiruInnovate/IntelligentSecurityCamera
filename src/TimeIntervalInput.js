// TimeIntervalInput.js
import React, { useRef, useState, useEffect } from "react";
const TimeIntervalInput = (props) => {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [scheduled, setScheduled] = useState(false);

  useEffect(() => {
    const currentTime = new Date();
    const formattedStartTime = new Date(`2023-09-20T${startTime}`);
    const formattedEndTime = new Date(`2023-09-20T${endTime}`);
    setScheduled(true);
    console.log("changed");


    if (currentTime >= formattedStartTime && currentTime <= formattedEndTime ) {
        props.onAlarmOnEventTrigger();
        console.log("Triger");
    }

  
  }, [startTime]);

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const stopAlarm = () => {
   
        setScheduled(false);
        props.onAlarmOffEventTrigger();
    };

  return (
    <div className="container mt-5">
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
              <button className="btn btn-primary" onClick={stopAlarm}>
                STOP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimeIntervalInput;
