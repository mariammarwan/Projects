document.addEventListener('DOMContentLoaded', () => {
    const ingredientInput = document.getElementById('ingredients-input');
    const addIngredientButton = document.getElementById('add-ingredients');
    const ingredientsList = document.getElementById('ingredients-list');
    const exploreButton = document.querySelector('.explore-btn');

    let selectedIngredients = [];

    // Function to add ingredient to the list
    function addIngredientToList(ingredient) {
        if (!selectedIngredients.includes(ingredient)) {
            selectedIngredients.push(ingredient);

            // Create ingredient tag element
            const ingredientTag = document.createElement('div');
            ingredientTag.className = 'ingredient-tag';

            const ingredientName = document.createElement('span');
            ingredientName.textContent = ingredient;
            ingredientTag.appendChild(ingredientName);

            const removeButton = document.createElement('span');
            removeButton.textContent = ' ✖';
            removeButton.className = 'remove-btn';

            // Remove ingredient functionality
            removeButton.addEventListener('click', () => {
                ingredientTag.remove();
                selectedIngredients = selectedIngredients.filter(item => item !== ingredient);
            });

            ingredientTag.appendChild(removeButton);
            ingredientsList.appendChild(ingredientTag);
        }
    }

    // Add ingredient when button is clicked
    addIngredientButton.addEventListener('click', () => {
        const ingredient = ingredientInput.value.trim();
        if (ingredient) {
            addIngredientToList(ingredient);
            ingredientInput.value = '';
            ingredientInput.focus();
        }
    });

    // Add ingredient when Enter key is pressed
    ingredientInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addIngredientButton.click();
        }
    });

    // Navigate to recipes page with ingredients in query string
    exploreButton.addEventListener('click', () => {
        const queryString = selectedIngredients.join(',');
        window.location.href = `recipes.html?ingredients=${encodeURIComponent(queryString)}`;
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const queryParams = new URLSearchParams(window.location.search);
    const ingredientsParam = queryParams.get('ingredients');
    const recipeList = document.getElementById('recipe-list');

    // Sample recipe data
    const recipes = [
        {
            name: 'Spaghetti Aglio e Olio with Bacon and Egg',
            image: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl-archanaskitchen.com/Bacon_Spaghetti_Aglio_Olio_Pasta_Recipe_.jpg',
            ingredients: ['Spaghetti', 'Bacon', 'Eggs'],
        },
        {
            name: 'Bacon and Egg Frittata',
            image: 'https://cdn.scrambledchefs.com/wp-content/uploads/2021/10/Bacon-Frittata-6.jpg',
            ingredients: ['Bacon', 'Eggs'],
        },
        {
            name: 'Bacon and Egg Spaghetti Nest',
            image: 'https://inquiringchef.com/wp-content/uploads/2018/10/Spaghetti-Squash-Egg-Nests-6-480x270.jpg',
            ingredients: ['Spaghetti', 'Bacon', 'Eggs'],
        },
        {
            name: 'Spaghetti Carbonara',
            image: 'https://images.panomnom.com/upload/v1676356876/ST%20RECIPES/PASTA/Spageti%20Karbonara/SpagCarbo_nbevkq.jpg?dpr=2.625&bv=2&webp=true',
            ingredients: ['Spaghetti', 'Bacon', 'Eggs', 'Parmesan cheese'],
        },

        {
            name: 'Spaghetti Aglio e Olio with Bacon and Egg',
            image: 'https://www.archanaskitchen.com/images/archanaskitchen/1-Author/sibyl-archanaskitchen.com/Bacon_Spaghetti_Aglio_Olio_Pasta_Recipe_.jpg',
            ingredients: ['Spaghetti', 'Bacon', 'Eggs'],
        },
        {
            name: 'Bacon and Egg Frittata',
            image: 'https://cdn.scrambledchefs.com/wp-content/uploads/2021/10/Bacon-Frittata-6.jpg',
            ingredients: ['Bacon', 'Eggs'],
        },
        {
            name: 'Bacon and Egg Spaghetti Nest',
            image: 'https://inquiringchef.com/wp-content/uploads/2018/10/Spaghetti-Squash-Egg-Nests-6-480x270.jpg',
            ingredients: ['Spaghetti', 'Bacon', 'Eggs'],
        },
        {
            name: 'Spaghetti Carbonara',
            image: 'https://images.panomnom.com/upload/v1676356876/ST%20RECIPES/PASTA/Spageti%20Karbonara/SpagCarbo_nbevkq.jpg?dpr=2.625&bv=2&webp=true',
            ingredients: ['Spaghetti', 'Bacon', 'Eggs', 'Parmesan cheese'],
        },
    ];

    if (ingredientsParam) {
        const ingredients = ingredientsParam.split(',').map(item => item.trim().toLowerCase());

        // Filter recipes based on ingredients
        const filteredRecipes = recipes.filter(recipe => {
            return ingredients.every(ingredient => 
                recipe.ingredients.map(ing => ing.toLowerCase()).includes(ingredient)
            );
        });

        // Display filtered recipes
        if (filteredRecipes.length > 0) {
            filteredRecipes.forEach(recipe => {
                // Create a link to the recipe details page
                const recipeLink = document.createElement('a');
                recipeLink.href = `recipe_details.html?recipe=${encodeURIComponent(recipe.name)}`;
                recipeLink.target = '_blank'; // Open link in a new tab

                // Create a recipe card container
                const recipeCard = document.createElement('div');
                recipeCard.className = 'recipe-card';

                // Create an image element for the recipe
                const recipeImage = document.createElement('img');
                recipeImage.src = recipe.image;
                recipeImage.alt = recipe.name;

                // Create an h3 element for the recipe name
                const recipeName = document.createElement('h3');
                recipeName.textContent = recipe.name;

                // Append the image and name to the recipe card
                recipeCard.appendChild(recipeImage);
                recipeCard.appendChild(recipeName);

                // Append the recipe card to the link
                recipeLink.appendChild(recipeCard);

                // Append the link to the recipe list
                recipeList.appendChild(recipeLink);
            });
        } else {
            recipeList.innerHTML = '<p>No recipes found. Please go back and add some ingredients.</p>';
        }
    } else {
        recipeList.innerHTML = '<p>No recipes found. Please go back and add some ingredients.</p>';
    }
});

