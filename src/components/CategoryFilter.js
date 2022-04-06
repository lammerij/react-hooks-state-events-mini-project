import React, { useState } from "react";

function CategoryFilter({CATEGORIES, selectedCategory, setSelectedCategory}){ 
  const listOfCategories = CATEGORIES.map((category) => {
    const className = category === selectedCategory ? "selected" : null;
    
    return (
      <button
        key={category}
        className={className}
        onClick={() => setSelectedCategory(category)}
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
