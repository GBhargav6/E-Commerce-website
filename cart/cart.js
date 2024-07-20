// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Function to update the total amount
    function updateTotal() {
        let total = 0;
        document.querySelectorAll('.item').forEach(item => {
            const price = parseFloat(item.querySelector('.price').textContent.replace('₹', ''));
            const quantity = parseInt(item.querySelector('.quantity').value);
            total += price * quantity;
        });
        document.getElementById('order-total').textContent = `₹${total.toFixed(2)}`;
    }

    // Handle quantity change
    document.querySelectorAll('.quantity').forEach(input => {
        input.addEventListener('change', updateTotal);
    });

    // Handle remove item
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', () => {
            const item = button.closest('.item');
            item.remove();
            updateTotal();
        });
    });

    // Initialize total
    updateTotal();
});
