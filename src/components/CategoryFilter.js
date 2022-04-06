import React from "react";

function CategoryFilter({categories, selectedCategory, setSelectedCategory, filteredTasks}){ 
  const listOfCategories = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : null;
    

    return (
      <button
        key={category}
        className={className}
        onClick={() => setSelectedCategory(category)}
        onChange={filteredTasks}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {listOfCategories}
    </div>
  );
}

export default CategoryFilter;
