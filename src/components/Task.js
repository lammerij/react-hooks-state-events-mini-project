import React, { useState } from "react";



function Task({ text, category, deleteTask }) {
  const [isOnList, setIsOnList] = useState(false)
  // console.log(text)
  function handleRemoveTask(){
    deleteTask(text)

  }
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete"  onClick={handleRemoveTask}>X</button>
    </div>
  );
}

export default Task;
