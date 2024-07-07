// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('ingredientInput');
    const addButton = document.getElementById('addButton');
    const tagsContainer = document.querySelector('.tags');
    const exploreButton = document.getElementById('exploreButton');

    addButton.addEventListener('click', () => {
        const ingredient = input.value.trim();
        if (ingredient) {
            addTag(ingredient);
            input.value = '';
        }
    });

    function addTag(text) {
        const span = document.createElement('span');
        span.textContent = text;
        span.addEventListener('click', () => {
            span.remove();
        });
        tagsContainer.appendChild(span);
    }

    exploreButton.addEventListener('click', () => {
        const ingredients = Array.from(tagsContainer.children).map(tag => tag.textContent);
        if (ingredients.length > 0) {
            alert('Exploring recipes with: ' + ingredients.join(', '));
            // Add functionality to explore recipes based on ingredients
        } else {
            alert('Please add at least one ingredient.');
        }
    });
});
