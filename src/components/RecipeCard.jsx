
const RecipeCard = ({ recipe, onClick }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl relative cursor-pointer"
      onClick={onClick}
    >
      <div className="overflow-hidden relative">
        <img
          src={recipe.strMealThumb}
          alt={recipe.strMeal}
          className="w-full h-40 object-cover transform transition duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition duration-300 flex items-center justify-center">
          <h2 className="text-white text-lg font-semibold text-center px-2">
            {recipe.strMeal}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;

