// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'tshirts', description: 'This is the product description.', image: '../images/product1.jpg', rating: 3, price: 499, category: 'Category 1' },
        { id: 2, name: 'green hoodie', description: 'This is the product description.', image: '../images/product3.jpg', rating: 4, price: 599, category: 'Category 2' },
        { id: 3, name: 'suites', description: 'This is the product description.', image: '../images/product5.jpg', rating: 5, price: 6999, category: 'Category 3' },
        { id: 4, name: 'girls wear', description: 'This is the product description.', image: '../images/product4.jpg', rating: 5, price: 799, category: 'Category 4' },
        { id: 5, name: 'suites', description: 'This is the product description.', image: '../images/product6.jpg', rating: 5, price: 599, category: 'Category 5' },
        { id: 6, name: 'green hoodie', description: 'This is the product description.', image: '../images/product2.jpg', rating: 5, price: 499, category: 'Category 6' },
        // Add more products as needed
    ];

    const productList = document.getElementById('product-list');
    const categoryFilter = document.getElementById('category-filter');
    const priceRange = document.getElementById('price-range');
    const priceMinLabel = document.getElementById('price-min');
    const priceMaxLabel = document.getElementById('price-max');
    const sortOptions = document.getElementById('sort-options');

    function displayProducts(filteredProducts) {
        productList.innerHTML = filteredProducts.map(product => `
            <div class="col-md-4 col-12">
                <div class="single_product shadow text-center p-1">
                    <div class="product_img">
                        <a href="product_detail.html"><img src="${product.image}" class="img img-fluid" alt="${product.name}"></a>
                        ${product.rating >= 4 ? '<div class="new_product"><span class="badge py-2 px-3 badge-pill badge-danger">New</span></div>' : ''}
                    </div>
                    <div class="product-caption my-3">
                        <div class="product-ratting">
                            ${'★'.repeat(product.rating)}${'☆'.repeat(5 - product.rating)}
                        </div>
                        <h5><a href="product_detail.html">${product.name}</a></h5>
                        <div class="price">
                            <b><span class="mr-1">₹</span><span>${product.price}</span></b>
                        </div>
                    </div>
                </div>
            </div>
        `).join('');
    }

    function filterProducts() {
        const selectedCategories = Array.from(categoryFilter.querySelectorAll('input[type="checkbox"]:checked')).map(cb => cb.value);
        const maxPrice = parseInt(priceRange.value);
        const filteredProducts = products.filter(product => {
            return (selectedCategories.length === 0 || selectedCategories.includes(product.category)) &&
                   product.price <= maxPrice;
        });
        displayProducts(filteredProducts);
    }

    function sortProducts(products, sortBy) {
        return products.slice().sort((a, b) => {
            switch (sortBy) {
                case 'name-asc':
                    return a.name.localeCompare(b.name);
                case 'name-desc':
                    return b.name.localeCompare(a.name);
                case 'rating':
                    return b.rating - a.rating;
                case 'price-asc':
                    return a.price - b.price;
                case 'price-desc':
                    return b.price - a.price;
                default:
                    return 0;
            }
        });
    }

    categoryFilter.addEventListener('change', filterProducts);
    priceRange.addEventListener('input', () => {
        priceMinLabel.textContent = `₹${priceRange.min}`;
        priceMaxLabel.textContent = `₹${priceRange.value}`;
        filterProducts();
    });
    sortOptions.addEventListener('change', function() {
        const sortedProducts = sortProducts(products, this.value);
        displayProducts(sortedProducts);
    });

    // Initial display
    displayProducts(products);
});

