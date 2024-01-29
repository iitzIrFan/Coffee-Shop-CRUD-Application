document.addEventListener('DOMContentLoaded', function() {          // To manupulate whole DOM
    const ingredientsList = document.getElementById('ingredientList');
    const newIngredientInput = document.getElementById('newIngredient');

    function addIngredient() {
        const ingredientName = newIngredientInput.value.trim();

        // Add button
        if (ingredientName) {   // To check if the input is empty
            const newIngredientItem = document.createElement('li');
            newIngredientItem.textContent = ingredientName + ' ';

            // Update button
            const updateButton = document.createElement('button');
            updateButton.textContent = 'Update';
            updateButton.onclick = function() {
                updateIngredient(this);
            };

            // Delete button
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = function() {
                deleteIngredient(this);
            };

            // Append the buttons to the list item
            newIngredientItem.appendChild(updateButton);
            newIngredientItem.appendChild(deleteButton);

            ingredientsList.appendChild(newIngredientItem);
            newIngredientInput.value = '';
        }
    }

    function deleteIngredient(element) {
        const listItem = element.parentNode;
        ingredientsList.removeChild(listItem);
    }

    function updateIngredient(element) {
        const listItem = element.parentNode;
        const newName = prompt('Enter the updated name:', listItem.firstChild.textContent);

        if (newName !== null && newName.trim() !== '') {
            listItem.firstChild.textContent = newName;
        }
    }
 
    //To change the DOM
    window.addIngredient = addIngredient;
    window.deleteIngredient = deleteIngredient;
    window.updateIngredient = updateIngredient;
});

// Disable context menu on the entire document
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
