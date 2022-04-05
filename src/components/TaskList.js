import React from "react";
import Task from "./Task";

function TaskList({ CATEGORIES, TASKS }) {
  console.log(CATEGORIES, TASKS);
  const listOfTasks = TASKS;

  return (
    <div className="tasks">
      {listOfTasks.map((task) => {
       return <Task text={task.text} category={task.category} />;
      })}
    </div>
  );
}

export default TaskList;
