import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
import Task from "./Task";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      CATEGORIES={CATEGORIES} 
      selectedCategory={selectedCategory}
      setSelectedCategory={setSelectedCategory}
       />
      <NewTaskForm />
      <TaskList CATEGORIES={CATEGORIES} TASKS={TASKS} />
    </div>
  );
}

export default App;
