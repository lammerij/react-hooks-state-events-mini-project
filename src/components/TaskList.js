import React from "react";
import CategoryFilter from "./CategoryFilter";
import Task from "./Task";

function TaskList({ filteredTasks, deleteTask, }) {
  // console.log(CATEGORIES, TASKS);


  

  return (
    <div className="tasks">
      {filteredTasks.map((task) => {
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
