// Mobile Menu Toggle
const mobileMenu = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
    
    // Close mobile menu after click
    if (navLinks.classList.contains('active')) {
      navLinks.classList.remove('active');
      mobileMenu.classList.remove('active');
    }
  });
});

// Newsletter Form Submission
document.querySelector('.newsletter-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const email = document.querySelector('.newsletter-form input').value;
  
  // Simple validation
  if (validateEmail(email)) {
    alert(`Thanks for subscribing, ${email}!`);
    document.querySelector('.newsletter-form').reset();
  } else {
    alert('Please enter a valid email address');
  }
});

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Coffee Card Flip Animation
document.querySelectorAll('.coffee-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('flipped');
  });
});

// Intersection Observer for Scroll Animations
const observerOptions = {
  threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('.coffee-item, .testimonial-item, .why-us-item').forEach(element => {
  observer.observe(element);
});

// Hero Carousel Functionality
const heroSlides = document.querySelectorAll('.hero-slide');
const slideDots = document.querySelectorAll('.slide-dot');
let currentSlide = 0;
let autoSlideInterval;

// Function to show a specific slide
function showSlide(index) {
    // Hide all slides
    heroSlides.forEach((slide) => {
        slide.classList.remove('active');
    });

    // Remove active class from all dots
    slideDots.forEach((dot) => {
        dot.classList.remove('active');
    });

    // Show the selected slide and activate the corresponding dot
    heroSlides[index].classList.add('active');
    slideDots[index].classList.add('active');
}

// Function to move to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % heroSlides.length;
    showSlide(currentSlide);
}

// Function to start automatic sliding
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
}

// Function to stop automatic sliding
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}

// Event listeners for slide dots
slideDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
        stopAutoSlide(); // Stop auto-sliding when user interacts
        startAutoSlide(); // Restart auto-sliding after a delay
    });
});

// Initialize the carousel
function initCarousel() {
    showSlide(currentSlide); // Show the first slide
    startAutoSlide(); // Start automatic sliding
}

// Initialize the carousel when the page loads
document.addEventListener('DOMContentLoaded', initCarousel);

// Pause auto-slide when the user hovers over the hero section
const heroSection = document.querySelector('.hero');
heroSection.addEventListener('mouseenter', stopAutoSlide);
heroSection.addEventListener('mouseleave', startAutoSlide);