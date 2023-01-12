import React, {  useEffect, useState } from "react";
import "../components/progress-bar.css"
const Progress = (props) => {
//   const subsCount = props.count;
  const [subsPercent, setsubsPercent] = useState(props.count);
  const goal = props.goal;
 useEffect(() => {
  if(subsPercent === goal){
    setsubsPercent(100);
  }
    }, [goal, subsPercent]);


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