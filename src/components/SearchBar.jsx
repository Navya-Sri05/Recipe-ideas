import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [ingredient, setIngredient] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (ingredient.trim()) {
      onSearch(ingredient);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center mb-6"
    >
      <input
        type="text"
        value={ingredient}
        onChange={(e) => setIngredient(e.target.value)}
        placeholder="Enter an ingredient (e.g. chicken)"
        className="w-2/3 p-2 border rounded-l-lg"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
