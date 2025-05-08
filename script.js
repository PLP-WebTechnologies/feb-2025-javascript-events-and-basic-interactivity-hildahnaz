// Button click to change color and text
document.getElementById('colorBtn').addEventListener('click', function () {
    this.textContent = "You clicked me!";
    this.style.backgroundColor = 'green';
});

// Hover already handled via CSS

// Keypress detection
document.getElementById('keyInput').addEventListener('keypress', function (e) {
    console.log(`You pressed: ${e.key}`);
});

// Double-click secret action
document.getElementById('secretBtn').addEventListener('dblclick', function () {
    alert("🎉 Secret action unlocked!");
});

// Image gallery
const images = [
    "https://via.placeholder.com/200?text=1",
    "https://via.placeholder.com/200?text=2",
    "https://via.placeholder.com/200?text=3"
];
let currentImg = 0;

document.getElementById('nextImg').addEventListener('click', () => {
    currentImg = (currentImg + 1) % images.length;
    document.getElementById('galleryImg').src = images[currentImg];
});

document.getElementById('prevImg').addEventListener('click', () => {
    currentImg = (currentImg - 1 + images.length) % images.length;
    document.getElementById('galleryImg').src = images[currentImg];
});

// Tabs
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        const content = `You clicked Tab ${tab.dataset.tab}`;
        document.getElementById('tabContent').textContent = content;
    });
});

// Form validation
const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');
const feedback = document.getElementById('formFeedback');

function validateEmail(emailStr) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let messages = [];

    if (!validateEmail(email.value)) {
        messages.push("Invalid email format.");
    }

    if (password.value.length < 6) {
        messages.push("Password must be at least 6 characters long.");
    }

    if (messages.length > 0) {
        feedback.textContent = messages.join(" ");
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Form submitted successfully!";
        feedback.style.color = "green";
    }
});