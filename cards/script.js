// Function to add a new product card
function addProductCard(productData) {
    // Create a new product card element
    var productCard = document.createElement('div');
    productCard.className = 'product-card';

    console.log(productCard.image);
    // Customize the product card content using productData
    productCard.innerHTML = `
        <img src="${productData.image}" alt="${productData.name}">
        <h2>${productData.name}</h2>
        <p>${productData.description}</p>
        <p>Price: $${productData.price}</p>
        <button>Add to Cart</button>
    `;

    // Append the new product card to the container
    var container = document.getElementById('product-container');
    container.appendChild(productCard);
}
// Example event listener for a form submission
document.getElementById('add-product-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    var productData = {
        name: document.getElementById('product-name').value,
        description: document.getElementById('product-description').value,
        price: document.getElementById('product-price').value,
        image: document.getElementById('product-image-url').value
    };

    // Add the new product card to the page
    addProductCard(productData);

    // Clear the form fields or perform other necessary actions
    document.getElementById('product-name').value = '';
    document.getElementById('product-description').value = '';
    document.getElementById('product-price').value = '';
    document.getElementById('product-image-url').value = '';
});
