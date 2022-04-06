import React, { useState } from "react";

function NewTaskForm({CATEGORIES, selectedCategory, setSelectedCategory}) {
  const [newTask, setNewTask] = useState("")
  const dropDownCategories = CATEGORIES.map((category) =>{
    const className = category === selectedCategory ? "selected" : null;
    return <option
    key={category}
    className={className}
    onClick={() => setSelectedCategory(category)}
    >{category}</option>
  })
  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {dropDownCategories}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
