import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import Task from "./Task";

function TaskList({ CATEGORIES, TASKS }) {
  // console.log(CATEGORIES, TASKS);
  const [listOfTasks, setListOfTasks] = useState(TASKS);

  function deleteTask(taskName) {
    // console.log("task", task)
    const updatedList = listOfTasks.filter((task) => {
      return task.text != taskName;
    });
    setListOfTasks(updatedList);
  }

  
  

  return (
    <div className="tasks">
      {listOfTasks.map((task) => {
        return (
          <Task
            text={task.text}
            category={task.category}
            deleteTask={deleteTask}
          />
          
        );
      })}
      
    </div>
  );
}

export default TaskList;
