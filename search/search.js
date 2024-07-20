// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');
    const searchMessage = document.getElementById('search-message');
    const searchResults = document.getElementById('search-results');

    searchButton.addEventListener('click', function() {
        const query = searchInput.value.trim().toLowerCase();

        // Dummy data
        const products = [
            { id: 1, name: 'product 1', description: 'This is the product description.', image: '../images/product1.jpg', rating: 4.5, price: 350 },
            { id: 2, name: 'product 2', description: 'This is the product description.', image: '../images/product3.jpg', rating: 4.5, price: 350 },
            { id: 3, name: 'product 3', description: 'This is the product description.', image: '../images/product5.jpg', rating: 4.5, price: 350 },
            { id: 2, name: 'product 4', description: 'This is the product description.', image: '../images/product4.jpg', rating: 4.5, price: 350 },
            { id: 2, name: 'product 5', description: 'This is the product description.', image: '../images/product6.jpg', rating: 4.5, price: 350 },
            { id: 2, name: 'product 6', description: 'This is the product description.', image: '../images/product2.jpg', rating: 4.5, price: 350 },
        ];

        // Filter products based on query
        const filteredProducts = products.filter(product => 
            product.name.toLowerCase().includes(query) || 
            product.description.toLowerCase().includes(query)
        );

        // Populate the search results
        searchResults.innerHTML = filteredProducts.map(product => `
            <tr>
                <td class="number text-center">${product.id}</td>
                <td class="image"><img src="${product.image}" width="100px" class="img img-fluid" alt="${product.name}"></td>
                <td class="product"><strong>${product.name}</strong><br>${product.description}</td>
                <td class="rate text-right"><span>${'★'.repeat(Math.floor(product.rating))}${product.rating % 1 === 0.5 ? '☆' : ''}</span></td>
                <td class="price text-right">₹${product.price}</td>
            </tr>
        `).join('');

        searchMessage.textContent = `Showing all results matching "${query}"`;
    });
});
