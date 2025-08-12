document.addEventListener('DOMContentLoaded', function() {
    const addIngredientBtn = document.getElementById('add-ingredient');
    if (addIngredientBtn) {
        addIngredientBtn.addEventListener('click', function(e) {
            e.preventDefault();

            const ingredientsContainer = document.querySelectorAll('#recipe_ingredients');
            const newIngredientInput = document.createElement('input');
            newIngredientInput.type = 'text';
            newIngredientInput.name = 'new_ingredient[]';
            newIngredientInput.className = 'form-control mt-2';
            newIngredientInput.placeholder = 'Nouvel ingrédient';

            ingredientsContainer.parentNode.insertBefore(newIngredientInput, addIngredientBtn);
        });
    }

    function handleResponsive() {
        const categoriesSection = document.querySelectorAll('.col-md-3');
        const recipesSection = document.querySelectorAll('.col-md-9');

        if (window.innerWidth < 768) {
            categoriesSection.classList.add('mb-4');
            recipesSection.classList.remove('col-md-9');
            recipesSection.classList.add('col-12');
        } else {
            categoriesSection.classList.remove('mb-4');
            recipesSection.classList.add('col-md-9');
            recipesSection.classList.remove('col-12');
        }
    }

    window.addEventListener('resize', handleResponsive);
    handleResponsive();
});