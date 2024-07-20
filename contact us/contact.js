// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form');

    form.addEventListener('submit', function(event) {
        let isValid = true;

        // Validate Name
        const name = document.getElementById('name');
        if (name.value.trim() === '') {
            name.classList.add('is-invalid');
            isValid = false;
        } else {
            name.classList.remove('is-invalid');
        }

        // Validate Email
        const email = document.getElementById('email');
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email.value.trim())) {
            email.classList.add('is-invalid');
            isValid = false;
        } else {
            email.classList.remove('is-invalid');
        }

        // Validate Message
        const msg = document.getElementById('msg');
        if (msg.value.trim() === '') {
            msg.classList.add('is-invalid');
            isValid = false;
        } else {
            msg.classList.remove('is-invalid');
        }

        // If form is invalid, prevent submission
        if (!isValid) {
            event.preventDefault();
        }
    });
});
