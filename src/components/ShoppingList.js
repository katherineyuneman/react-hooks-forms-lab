import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items, onItemFormSubmit, handleAddedItemInput, handleAddedCategory}) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("")


  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function onHandleSearch (event){
    console.log("triggering search", event.target.value)
    setSearch(event.target.value)
  }


  const itemsToDisplay = items.filter((item) => {
    if (search.length > 0){
    const searchMatch = item.name
    if (searchMatch.toLowerCase().includes(search.toLowerCase())) {
     
      return item.name
    }
  }
  else {
    if (selectedCategory === "All") {
      return true
    }
    else if (item.category === selectedCategory) {
     
      return item.category === selectedCategory
    }
    
  }
})


  
  return (
    <div className="ShoppingList">
      <ItemForm 
        handleAddedItemInput={handleAddedItemInput}
        handleAddedCategory={handleAddedCategory}
        onItemFormSubmit={onItemFormSubmit}
        
      />
      <Filter value={search}
        onCategoryChange={handleCategoryChange}
        onHandleSearch={onHandleSearch}
      />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
