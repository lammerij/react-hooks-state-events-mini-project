import React, { useState } from "react";

function NewTaskForm({
  CATEGORIES,
  selectedCategory,
  setSelectedCategory,
  onTaskFormSubmit,
}) {
  const [addedTask, setAddedTask] = useState("");
  const [newTaskCategory, setTaskCategory] = useState("Code");
  const newTask = {
    name: addedTask,
    category: newTaskCategory,
  };
  const dropDownCategories = CATEGORIES.map((category) => {
    const className = category === selectedCategory ? "selected" : null;
    return (
      <option
        key={category}
        className={className}
        onClick={() => setSelectedCategory(category)}
      >
        {category}
      </option>
    );
  });

  function handleTaskChange(event) {
    console.log(event.target.value);
    setAddedTask(event.target.value);
  }

  function handleCategoryChange(event) {
    console.log(event.target.value);
    setTaskCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newTask = {
      name: addedTask,
      category: newTaskCategory,
    };
    onTaskFormSubmit(newTask);
  }
  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleTaskChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleCategoryChange}>
          {dropDownCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
