import React from "react";
import "../components/progress-bar.css"
const Progress = (props) => {
//   const subsCount = props.count;
  const subsPercent = props.count;
  const goal = props.goal;

  return (
    <div className="progress-bar">
      <span style={{ width: `${subsPercent}%`}} className="fill">
          {subsPercent}
      </span>
      <p>{goal}</p>
    </div>
  )
}

export default Progress;