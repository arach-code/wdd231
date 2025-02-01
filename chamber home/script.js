// Hamburger Menu Toggle
document.getElementById('hamburger').addEventListener('click', () => {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active');
});

// Weather API Integration (Replace with your OpenWeather API key)
const apiKey = 'YOUR_API_KEY';
const city = 'Kampala';
const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(weatherUrl)
    .then(response => response.json())
    .then(data => {
        const weatherInfo = document.getElementById('weather-info');
        weatherInfo.innerHTML = `
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Condition: ${data.weather[0].description}</p>
        `;
    })
    .catch(error => console.error('Error fetching weather:', error));

// Dynamic Business Spotlights (Sample Data)
const businesses = [
    { name: "Kampala Bakery", description: "Fresh bread and pastries.", image: "bakery.jpg" },
    { name: "Nile Tech Solutions", description: "IT services and consulting.", image: "tech.jpg" },
    { name: "Green Farms Co-op", description: "Organic produce supplier.", image: "farm.jpg" }
];

const spotlightGrid = document.getElementById('spotlight-grid');
businesses.forEach(business => {
    const card = document.createElement('div');
    card.className = 'spotlight-card';
    card.innerHTML = `
        <img src="${business.image}" alt="${business.name}" style="width: 100%; height: 150px; object-fit: cover;">
        <h3>${business.name}</h3>
        <p>${business.description}</p>
    `;
    spotlightGrid.appendChild(card);
});