document.addEventListener('DOMContentLoaded', () => {
    const queryParams = new URLSearchParams(window.location.search);
    const recipeName = queryParams.get('recipe');
    const recipeTitle = document.getElementById('recipe-title');
    const ingredientsList = document.getElementById('ingredients-list');
    const directionsList = document.getElementById('directions-list');
    const recipeImg = document.getElementById('recipe-img');
    const additionalImagesContainer = document.getElementById('additional-images');

    // Sample recipe data
    const recipes = [
        {
            name: 'Spaghetti Carbonara',
            image: 'https://images.panomnom.com/upload/v1676356876/ST%20RECIPES/PASTA/Spageti%20Karbonara/SpagCarbo_nbevkq.jpg?dpr=2.625&bv=2&webp=true',
            additionalImages: [
                'https://www.recipetineats.com/tachyon/2023/01/SpaghettiCarbonara-ingredients.jpg?resize=900%2C643&zoom=1',
                'https://www.recipetineats.com/tachyon/2023/01/Carbonara_3.jpg?resize=900%2C720&zoom=1',
                'https://www.recipetineats.com/tachyon/2023/01/Picking-up-carbonara-pasta.jpg?resize=900%2C1125&zoom=1'
            ],
            ingredients: [
                '1 pound spaghetti',
                '3 large eggs',
                '3/4 cup grated Pecorino Romano cheese',
                '6 ounces guanciale or pancetta, diced',
                '3 cloves garlic, finely chopped',
                '1 teaspoon freshly ground black pepper',
                'Salt, to taste'
            ],
            directions: [
                'Boil a large pot of salted water. Cook the spaghetti according to package instructions until al dente. Reserve 1 cup of pasta water, then drain.',
                'Beat the eggs in a bowl and mix in the grated Pecorino Romano cheese until smooth.',
                'In a large pan, sauté the diced guanciale or pancetta over medium heat until it\'s crisp and the fat has rendered. Add the garlic and cook for 1 minute.',
                'Add the hot spaghetti to the pan with the guanciale. Remove from heat, then quickly mix in the egg and cheese mixture, stirring to create a creamy sauce. Adjust with pasta water if needed for a smoother consistency.',
                'Season with black pepper and salt. Serve hot, garnished with extra cheese and pepper if desired.'
            ]
        }
        // Add more recipes as needed
    ];

    // Find the recipe by name
    const recipe = recipes.find(r => r.name.toLowerCase() === recipeName.toLowerCase());

    if (recipe) {
        recipeTitle.textContent = recipe.name;
        recipeImg.src = recipe.image;
        recipe.ingredients.forEach(ingredient => {
            const li = document.createElement('li');
            li.textContent = ingredient;
            ingredientsList.appendChild(li);
        });
        recipe.directions.forEach(direction => {
            const li = document.createElement('li');
            li.textContent = direction;
            directionsList.appendChild(li);
        });
        recipe.additionalImages.forEach(imageUrl => {
            const img = document.createElement('img');
            img.src = imageUrl;
            additionalImagesContainer.appendChild(img);
        });
    } else {
        recipeTitle.textContent = 'Recipe not found';
    }
});
