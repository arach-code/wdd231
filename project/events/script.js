// Function to handle event registration
function registerEvent(eventName) {
    alert(`You have successfully registered for: ${eventName}`);
  }
  
  // Hamburger menu functionality
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');
  
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });