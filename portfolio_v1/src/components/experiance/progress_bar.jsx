import React from 'react'
import ProgressBar from 'react-animated-progress-bar';


const Progress_bar = ({level}) => {
	

		
	return (
	<div >
	<ProgressBar
        width="100"
        height="9px"
        rect="var(--color-primary)"
        fontColor="var(--color-primary)"
        percentage={level}
        rectPadding="1px"
        rectBorderRadius="5px"
        trackPathColor="transparent"
        bgColor="#333333"
        trackBorderColor="grey"
      />
	</div>
	)
}

export default Progress_bar;




// import React, { useEffect, useState } from "react";
// import "./experiance.css";

// const ProgressLine = ({
//   label,
//   backgroundColor = "#e5e5e5",
//   // expected format for visual parts
//   visualParts = [
//     {
//       percentage: "0%",
//       color: "white"
//     }
//   ]
// }) => {
//   // Starting values needed for the animation
//   // Mapped by "visualParts" so it can work with multiple values dynamically
//   // It's an array of percentage widths
//   const [widths, setWidths] = useState(
//     visualParts.map(() => {
//       return 0;
//     })
//   );

//   useEffect(() => {
//     // https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame
//     // You need to wrap it to trigger the animation
//     requestAnimationFrame(() => {
//       // Set a new array of percentage widths based on the props
//       setWidths(
//         visualParts.map(item => {
//           return item.percentage;
//         })
//       );
//     });
//   }, [visualParts]);

//   return (
//     <>
//       <div className="progressLabel">{label}</div>

//       <div className="progressVisualFull"
//         // to change the background color dynamically
//         style={{
//           backgroundColor
//         }}
//       >
//         {visualParts.map((item, index) => {
//           // map each part into separate div and each will be animated
//           // because of the "transition: width 2s;" css in class "progressVisualPart"
//           // and because of the new width ("widths[index]", previous one was 0)
//           return (
//             <div
//               // There won't be additional changes in the array so the index can be used
//               /* eslint-disable-next-line react/no-array-index-key */
//               key={index}
//               style={{
//                 width: widths[index],
//                 // setting the actual color of bar part
//                 backgroundColor: item.color
//               }}
//               className="progressVisualPart"
//             />
//           );
//         })}
//       99</div>
//     </>
//   );
// };

// export default ProgressLine;
