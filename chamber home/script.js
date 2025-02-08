// Hamburger Menu
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Hero Slider
let currentSlide = 0;
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.slide-dot');

function showSlide(n) {
    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${n * 100}%)`;
    });
    
    dots.forEach(dot => dot.classList.remove('active'));
    dots[n].classList.add('active');
    currentSlide = n;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Auto-advance slides every 5 seconds
let slideInterval = setInterval(nextSlide, 5000);

// Dot click handlers
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(slideInterval);
        showSlide(index);
        slideInterval = setInterval(nextSlide, 5000);
    });
});

// Initialize first slide
showSlide(0);

// Spotlight Data (Example)
const spotlightData = [
    {
        name: "Agro Supply Uganda",
        image: "images/agro suply.png",
        description: "Building the resilience"
    },
    {
        name: "Lycamobile UG",
        image: "images/Lycamobile.jpeg",
        description: "You're ready to go!"
    },
    {
        name: "Emata",
        image: "images/emata.jpg",
        description: "Emata offers digital loans to farmers in East-Africa"
    }
];

// Populate Spotlights
const spotlightGrid = document.getElementById('spotlight-grid');

spotlightData.forEach(business => {
    const card = document.createElement('div');
    card.className = 'spotlight-card';
    card.innerHTML = `
        <img src="${business.image}" alt="${business.name}">
        <h3>${business.name}</h3>
        <p>${business.description}</p>
    `;
    spotlightGrid.appendChild(card);
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
        navMenu.classList.remove('active');
    }
});

// Sample news data (can be replaced with real data from an API)
const newsData = [
    {
        date: "July 15, 2024",
        title: "New Economic Policy Announced",
        excerpt: "The government has introduced new measures to support local businesses and boost economic growth...",
        link: "#"
    },
    {
        date: "July 14, 2024",
        title: "Chamber Hosts Business Summit",
        excerpt: "Annual business summit attracts over 500 participants from various industries...",
        link: "#"
    },
    {
        date: "July 13, 2024",
        title: "Export Opportunities Expanding",
        excerpt: "New international trade agreements create export opportunities for Ugandan businesses...",
        link: "#"
    }
];

// Function to populate news items
function populateNews() {
    const newsContainer = document.querySelector('.news-container');
    
    newsData.forEach(item => {
        const newsItem = document.createElement('article');
        newsItem.className = 'news-item';
        newsItem.innerHTML = `
            <div class="news-date">${item.date}</div>
            <h3>${item.title}</h3>
            <p class="news-excerpt">${item.excerpt}</p>
            <a href="${item.link}" class="news-read-more">Read More →</a>
        `;
        newsContainer.appendChild(newsItem);
    });
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', populateNews);

