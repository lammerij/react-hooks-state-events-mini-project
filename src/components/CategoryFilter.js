import React, { useState } from "react";

function CategoryFilter({CATEGORIES}) {
  console.log(CATEGORIES)
  const [listOfCategories, setListOfCategories] = useState(CATEGORIES)

 

  return (
    <div className="categories">
      <h5>Category filters</h5>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
      <button></button>
    </div>
  );
}

export default CategoryFilter;
