import React from "react";

function ItemForm({addedItem, addedItemCategory, onItemFormSubmit, handleAddedItemInput, handleAddedCategory}) {
  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={addedItem} onChange={handleAddedItemInput} />
      </label>

      <label>
        Category:
        <select name="category" value={addedItemCategory} onChange={handleAddedCategory}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
