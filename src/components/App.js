import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";
import { v4 as uuid } from "uuid";

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [addedItem, setAddedItem] = useState("");
  const [addedCategory, setAddedCategory] = useState("Produce");

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name: addedItem,
      category: addedCategory,
    };
    console.log("newItem:", newItem)
    const newGroceryList = [...items, newItem]
      setItems(newGroceryList);
      console.log("newItemArray", newGroceryList)
    }

    function handleAddedItemInput(event) {
      console.log(event.target.value)
      setAddedItem(event.target.value);
    }
  
    function handleAddedCategory(event) {
      console.log("added category:", event.target.value)
      setAddedCategory(event.target.value);
    }


  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} onDarkModeClick={handleDarkModeClick} />
      <ShoppingList
      items={items}
      onItemFormSubmit={handleSubmit}
      handleAddedItemInput={handleAddedItemInput}
      handleAddedCategory={handleAddedCategory}
      />
    </div>
  );
}

export default App;
