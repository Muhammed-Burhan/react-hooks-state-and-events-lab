import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [filterBy, setFilterBy] = useState("All");
  const selectorHandler = (e) => {
    setFilterBy(e.target.value);
  };
  const displaySelector = items.filter((item) => {
    return filterBy === "All" ? true : item.category === filterBy;
  });

  return (
    <div className="ShoppingList" onChange={selectorHandler}>
      <div className="Filter">
        <select name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {displaySelector.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
