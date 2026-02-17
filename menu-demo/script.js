// Step 1: Define your menu data (replace with your own items)
const menuData = {
    categories: [
        {
            name: "Appetizers",
            items: [
                { name: "Spring Rolls", price: 5.99, description: "Crispy vegetable rolls served with sweet chili sauce" },
                { name: "Garlic Bread", price: 3.99, description: "Toasted baguette with herb butter" }
            ]
        },
        {
            name: "Main Courses",
            items: [
                { name: "Grilled Salmon", price: 15.99, description: "Fresh salmon grilled to perfection, served with rice and seasonal vegetables" },
                { name: "Classic Burger", price: 10.99, description: "Beef patty with lettuce, tomato, onion, and fries" }
            ]
        },
        {
            name: "Drinks",
            items: [
                { name: "Soda", price: 1.99, description: "Coke, Sprite, Fanta" },
                { name: "Fresh Lemonade", price: 2.99, description: "Made with real lemons and mint" }
            ]
        }
    ]
};

// Step 2: Function to display the menu
function renderMenu() {
    const container = document.getElementById('menu-container');
    container.innerHTML = ''; // Clear any existing content

    menuData.categories.forEach(category => {
        // Create a div for the category
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category';

        // Add category title
        const categoryTitle = document.createElement('h2');
        categoryTitle.textContent = category.name;
        categoryDiv.appendChild(categoryTitle);

        // Loop through items in this category
        category.items.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.className = 'menu-item';

            const detailsDiv = document.createElement('div');
            detailsDiv.className = 'item-details';

            const nameSpan = document.createElement('div');
            nameSpan.className = 'item-name';
            nameSpan.textContent = item.name;

            const descSpan = document.createElement('div');
            descSpan.className = 'item-description';
            descSpan.textContent = item.description || '';

            detailsDiv.appendChild(nameSpan);
            detailsDiv.appendChild(descSpan);

            const priceSpan = document.createElement('div');
            priceSpan.className = 'item-price';
            priceSpan.textContent = `$${item.price.toFixed(2)}`;

            itemDiv.appendChild(detailsDiv);
            itemDiv.appendChild(priceSpan);
            categoryDiv.appendChild(itemDiv);
        });

        container.appendChild(categoryDiv);
    });
}

// Step 3: Run the function when the page loads
window.onload = renderMenu;