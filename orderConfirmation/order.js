// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Example dynamic data
    const orderData = {
        email: 'customer@example.com',
        orderNumber: 'ABC123456',
        orderStatus: 'Processing'
    };

    // Set the order details dynamically
    document.getElementById('email').textContent = orderData.email;
    document.getElementById('orderNumber').textContent = orderData.orderNumber;
    document.getElementById('orderStatus').textContent = orderData.orderStatus;

    // Optionally update status badge color based on status
    if (orderData.orderStatus === 'Completed') {
        document.getElementById('orderStatus').classList.remove('badge-danger');
        document.getElementById('orderStatus').classList.add('badge-success');
        document.getElementById('orderStatus').textContent = 'Completed';
    } else if (orderData.orderStatus === 'Shipped') {
        document.getElementById('orderStatus').classList.remove('badge-danger');
        document.getElementById('orderStatus').classList.add('badge-warning');
        document.getElementById('orderStatus').textContent = 'Shipped';
    }
});
