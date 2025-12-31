import emailjs from '@emailjs/browser';

// EMAILJS CONFIGURATION - REPLACE WITH YOUR KEYS
const SERVICE_ID = 'service_alqahyd';
const TEMPLATE_ID = 'template_hw1xllh';
const PUBLIC_KEY = 'tvDRl9PfrEa1gsmyn';

// Initialize EmailJS
emailjs.init(PUBLIC_KEY);

const submitBtn = document.getElementById('submit-btn');
const inputField = document.getElementById('secret-input');
const errorMsg = document.getElementById('error-msg');

function checkAndRedirect() {
    const value = inputField.value.trim();

    // Normalized check (case sensitive? user said "type 'I love you Aadarsh'")
    // I will make it exact match or slightly flexible? "type 'I love you Aadarsh'" implies exact.
    if (value === 'I love you Aadarsh') {
        // 1. Send Email
        // Parameters depend on your template. Usually {{message}} or {{from_name}}.
        // We'll send a generic success message.
        const templateParams = {
            message: `Shagun logged in! She said: "${value}"`,
            reply_to: 'user_email@example.com' // Placeholder
        };

        submitBtn.textContent = 'Verifying...';
        submitBtn.disabled = true;

        emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
            .then(() => {
                console.log('Email sent successfully!');
                // 2. Redirect
                window.location.href = './cards.html';
            })
            .catch((error) => {
                console.error('EmailJS Error:', error);
                // Even if email fails, should we let her in? 
                // User said "connect... then... redirect". 
                // I will redirect anyway after a small alert or just redirect to avoid blocking her if quota full.
                // But for now, alert error so user knows setup is needed.
                if (SERVICE_ID === 'YOUR_SERVICE_ID') {
                    alert('Please configure EmailJS keys in src/main.js to send emails. Redirecting anyway...');
                    window.location.href = './cards.html';
                } else {
                    // If real error, maybe network?
                    alert('Connection error, but letting you in for now <3');
                    window.location.href = './cards.html';
                }
            });

    } else {
        // Error
        errorMsg.textContent = "That's not the magic potion... try again!";
        inputField.classList.add('shake'); // We need a shake animation in CSS
        setTimeout(() => {
            inputField.classList.remove('shake');
        }, 500);
    }
}

submitBtn.addEventListener('click', checkAndRedirect);

inputField.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        checkAndRedirect();
    }
});
