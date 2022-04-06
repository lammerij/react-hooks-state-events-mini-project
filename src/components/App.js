import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import Task from "./Task";
// console.log("Here's the data you're working with");
// console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [tasks, setTasks] = useState(TASKS);
  const filteredTasks = tasks.filter((task) => {
    if (selectedCategory === "All") return true;

    return task.category === selectedCategory;
  });

  function deleteTask(taskName) {
    // console.log("task", task)
    const updatedList = tasks.filter((task) => {
      return task.text !== taskName;
    });
    setTasks(updatedList);
  }

  function onTaskFormSubmit(newTask) {
    console.log(newTask);
    setTasks([...tasks, newTask]);
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <NewTaskForm
        categories={CATEGORIES.filter((category) => {
          if (category === "All") return false;
          return category != "All";
        })}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList
        tasks={filteredTasks}
        CATEGORIES={CATEGORIES}
        deleteTask={deleteTask}
        onTaskFormSubmit={onTaskFormSubmit}
      />
    </div>
  );
}

export default App;
