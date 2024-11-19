// script.js
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {  // Adjust scroll distance as needed
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});



document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.testimonial-carousel');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const cardWidth = carousel.querySelector('.testimonial-card').offsetWidth;
    const gap = 20; // The gap between cards
    const scrollAmount = cardWidth + gap;

    // Scroll to the next card
    nextButton.addEventListener('click', () => {
        if (carousel.scrollLeft + carousel.clientWidth < carousel.scrollWidth) {
            carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
        checkButtons();
    });

    // Scroll to the previous card
    prevButton.addEventListener('click', () => {
        if (carousel.scrollLeft > 0) {
            carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        }
        checkButtons();
    });

    // Enable or disable buttons based on the scroll position
    function checkButtons() {
        const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
        prevButton.disabled = carousel.scrollLeft <= 0;
        nextButton.disabled = carousel.scrollLeft >= maxScrollLeft;
    }

    // Initial check on load
    checkButtons();
});


document.querySelector('.feedback-form button').addEventListener('click', function() {
    const feedbackInput = document.querySelector('.feedback-form input');
    if (feedbackInput.value.trim() !== '') {
        alert('Thank you for your feedback!');
        feedbackInput.value = ''; // Clear the input field
    } else {
        alert('Please enter your feedback before submitting.');
    }
});

document.querySelector('.start-btn').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.benefits-section').scrollIntoView({
        behavior: 'smooth'
    });
});


document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav-links a');
    const currentPage = window.location.pathname;

    links.forEach(link => {
        if (currentPage.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        }
    });
});








