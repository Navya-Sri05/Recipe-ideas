## RECIPE IDEAS APP

# Introduction
-  A modern Recipe Search Application built with React and Tailwind CSS, where users can search for recipes by ingredient and view detailed instructions and ingredients inside a modal.
This project is powered by the free TheMealDB API
-> https://www.themealdb.com/api/json/v1/1/filter.php?i={ingredient}
- replace the ingredient with user input

# Setup Environment
- Created the react app
npm create vite@latest recipe-ideas
  Add TailwindCSS
I choose the default React+ TailwindCSS tempalte,it automatically install the reqiured configurations for TailwindCSS
# Components
- SearchBar - Input field and button for searching recipes by ingredient.
- RecipeList - Shows a grid of recipe cards.
- RecipeCard - Displays recipe thumbnail + hover effect.
- RecipeModal - Popup modal with recipe instructions and ingredients.

# Implemented API Integration
Used TheMealDB API to fetch recipes:

->filter.php?i=ingredient → Fetch list of meals.

->lookup.php?i=id → Fetch detailed recipe by ID.

# State Management

Managed state with React useState and props:

- recipes → List of recipes.

- selectedRecipe → Currently opened recipe in modal.

# Styling & UX

Designed with Tailwind CSS
- responsive grid, shadows, hover effects.

- Modal with scrollable content (instructions + ingredients).

- Styled search bar with rounded input & button.

# Deploymeny (Testing in CodeSandbox)

- Ran live preview in CodeSandbox.
