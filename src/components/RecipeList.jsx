
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes, onRecipeClick }) => {
  if (recipes.length === 0) {
    return (
      <p className="text-center text-gray-600">
        No recipes found. Try another ingredient!
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <RecipeCard
          key={recipe.idMeal}
          recipe={recipe}
          onClick={() => onRecipeClick(recipe.idMeal)} 
        />
      ))}
    </div>
  );
};

export default RecipeList;

