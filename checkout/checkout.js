// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const purchaseButton = document.getElementById('purchaseButton');

    // Function to validate form fields
    function validateForm() {
        const requiredFields = document.querySelectorAll('#checkout input[required], #checkout select[required]');
        for (let field of requiredFields) {
            if (!field.value.trim()) {
                alert('Please fill all required fields.');
                return false;
            }
        }
        return true;
    }

    // Handle purchase button click
    purchaseButton.addEventListener('click', (e) => {
        if (validateForm()) {
            alert('Purchase successful!');
            // Optionally, redirect to an order confirmation page or send data to server
            window.location.href = '../orderConfirmation/order.html';
        }
    });

    // Update total price in order summary dynamically
    function updateTotal() {
        let total = 0;
        document.querySelectorAll('.item-price').forEach(priceElement => {
            total += parseFloat(priceElement.textContent.replace('₹', ''));
        });
        document.getElementById('order-total').textContent = `₹${total.toFixed(2)}`;
    }

    // Initialize total price
    updateTotal();
});
