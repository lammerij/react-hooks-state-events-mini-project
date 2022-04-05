import React, { useState } from "react";



function Task({ text, category }) {
  const [isOnList, setIsOnList] = useState(false)
  
  function handleRemoveTaskClick(){
    setIsOnList((isOnList) => !isOnList);

  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleRemoveTaskClick}>X</button>
    </div>
  );
}

export default Task;
