import React from "react";
import CategoryFilter from "./CategoryFilter";
import Task from "./Task";

function TaskList({ tasks, deleteTask, }) {
  // console.log(CATEGORIES, TASKS);


  

  return (
    <div className="tasks">
      {tasks.map((task) => {
        return (
          <Task
            key={task.text}
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
