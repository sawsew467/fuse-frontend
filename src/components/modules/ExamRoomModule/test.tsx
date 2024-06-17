// "use client"
// import React, { useState, ChangeEvent } from "react";
// import "./Progress.css"; // Assuming you will convert your SASS to CSS and place it in this file
// import FlipClock from "./Clock";

// // Extend the CSSProperties type to allow custom CSS variables
// type CustomCSSProperties = React.CSSProperties & {
//   "--progress-value"?: number;
// };

// const ExamRoomModule = () => {
//   const [progressValue, setProgressValue] = useState(10);

//   const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.valueAsNumber;
//     if (value >= 0 && value <= 100) {
//       setProgressValue(value);
//     } else {
//       setProgressValue(50); // Fallback to 50 if the input value is out of range
//     }
//   };

//   return (
//     // <div>
//     //   <div
//     //     className={`progress ${progressValue > 50 ? "progress--upper-half-value" : ""}`}
//     //     style={{ "--progress-value": progressValue } as CustomCSSProperties}
//     //     data-value={progressValue}
//     //     role="progressbar"
//     //   >
//     //     <div className="progress-inner">
//     //       <div className="progress-indicator"></div>
//     //       <div className="progress-indicator"></div>
//     //     </div>
//     //     <span className="progress-label">
//     //       <strong>{progressValue}</strong>
//     //       <span>%</span>
//     //     </span>
//     //   </div>
      
//     //   <div className="description">
//     //     <span>progress percentage is </span>
//     //     <input
//     //       type="number"
//     //       min="0"
//     //       max="100"
//     //       step="1"
//     //       value={progressValue}
//     //       onChange={handleInputChange}
//     //     />
//     //     <span>%</span>
//     //   </div>
      
//     //   <a href="https://codepen.io/mikoloism" className="watermark">@mikoloism</a>
//     // </div>
//     <FlipClock/>
//   );
// };

// export default ExamRoomModule;
