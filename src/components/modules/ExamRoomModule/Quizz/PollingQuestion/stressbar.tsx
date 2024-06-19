"use client"
import React, { useState, ChangeEvent } from "react";

type CustomCSSProperties = React.CSSProperties & {
  "--progress-value"?: number;
};

const StressBar = () => {   
  const [progressValue, setProgressValue] = useState(50);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.valueAsNumber;
    if (value >= 0 && value <= 100) {
      setProgressValue(value);
    } else {
      setProgressValue(50);
    }
  };

  return (
    <div className="flex justify-center flex-col mr-4 mt-4 content-center">
      <div
        className={`progress ${progressValue > 50 ? "progress--upper-half-value" : ""}`}
        style={{ "--progress-value": progressValue } as CustomCSSProperties}
        data-value={progressValue}
        role="progressbar"
      >
        <div className="progress-inner">
          <div className="progress-indicator"></div>
          <div className="progress-indicator"></div>
        </div>
        <span className="progress-label">
          <strong>{progressValue}</strong>
          <span>%</span>
        </span>
      </div>
      
      {/* <div className="description">
        <input
          type="number"
          min="0"
          max="100"
          step="1"
          value={progressValue}
          onChange={handleInputChange}
        />
      </div> */}
    </div>
  );
};

export default StressBar;
