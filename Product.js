const productContainer = document.getElementById("product-container");
const errorMessage = document.getElementById("error-message");

// Public API URL
const apiURL = "https://fakestoreapi.com/products";

// Fetch product data
fetch(apiURL)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json(); // Convert response to JSON
    })
    .then(data => {
        // Loop through products and create HTML elements dynamically
        data.forEach(product => {
            const card = document.createElement("div");
            card.classList.add("product-card");

            const title = document.createElement("h4");
            title.textContent = product.title;

            const img = document.createElement("img");
            img.src = product.image;

            card.appendChild(img);
            card.appendChild(title);
            productContainer.appendChild(card);
        });
    })
    .catch(error => {
        console.log(error);
        errorMessage.textContent
    });
