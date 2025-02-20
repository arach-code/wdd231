// Last Visit Message
document.addEventListener('DOMContentLoaded', () => {
    const visitMessage = document.getElementById('visit-message');
    const currentDate = Date.now();
    const lastVisit = localStorage.getItem('lastVisit');
    const oneDay = 86400000; // 24*60*60*1000

    let message;
    
    if (!lastVisit) {
        message = "Welcome! Let us know if you have any questions.";
    } else {
        const daysBetween = Math.floor((currentDate - lastVisit) / oneDay);
        
        if (daysBetween === 0) {
            message = "Back so soon! Awesome!";
        } else {
            message = `You last visited ${daysBetween} day${daysBetween === 1 ? '' : 's'} ago.`;
        }
    }

    visitMessage.textContent = message;
    localStorage.setItem('lastVisit', currentDate.toString());
});

// Hamburger Menu functionality
const hamburgerBtn = document.getElementById('hamburgerBtn');
const primaryNav = document.getElementById('primaryNav');

hamburgerBtn.addEventListener('click', () => {
    primaryNav.classList.toggle('active');
});

// Current Date in Header
const dateField = document.getElementById('currentDate');
const now = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
dateField.textContent = now.toLocaleDateString('en-US', options);

// Footer Year
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Last Modified Date
document.getElementById('lastModified').textContent = `Last Modified: ${document.lastModified}`;