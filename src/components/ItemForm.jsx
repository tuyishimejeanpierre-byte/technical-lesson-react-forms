import React, { useState } from "react";

function ItemForm({ onItemFormSubmit = () => {} }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      name,
      category,
    };

    onItemFormSubmit(newItem);

    setName("");
    setCategory("Produce");
  }

  return (
    <form onSubmit={handleSubmit} aerial-label="item-form">
      {/* NAME */}
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      {/* CATEGORY */}
      <label htmlFor="category">Category</label>
      <select
        id="category"
        name="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>

      <button type="submit">Add</button>
    </form>
  );
}

export default ItemForm;