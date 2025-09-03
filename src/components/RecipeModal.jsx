import React from "react";

const RecipeModal = ({ recipe, onClose }) => {
  if (!recipe) return null;

  
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient) ingredients.push(`${ingredient} - ${measure}`);
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose} 
    >
      <div
        className="bg-white rounded-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 max-h-[90vh] overflow-hidden relative"
        onClick={(e) => e.stopPropagation()} 
      >
      
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-700 font-bold text-xl"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4">{recipe.strMeal}</h2>
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-60 object-cover mb-4 rounded"
        />

        <h3 className="font-semibold mb-2">Ingredients:</h3>
        <ul className="list-disc list-inside mb-4 max-h-40 overflow-auto">
          {ingredients.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3 className="font-semibold mb-2">Instructions:</h3>
        <div className="overflow-auto max-h-60 pr-2">
          <p>{recipe.strInstructions}</p>
           {/* {recipe.strInstructions
               .split("\n")                 // Split by line breaks
               .map(line => line.trim())    // Remove extra spaces
               .filter(line => line.length > 0) // Remove empty lines
               .map((line, index) => (      // Map each line to a <p>
               <p key={index} className="mb-2">{line}</p>
             ))
            } */}
        </div>
      </div>
    </div>
  );
};

export default RecipeModal;
