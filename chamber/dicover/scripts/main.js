// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    const isHamburger = e.target.matches('#hamburgerBtn') || 
                        e.target.closest('#hamburgerBtn');
    const isNavActive = primaryNav.classList.contains('active');

    if (!isHamburger && isNavActive) {
        primaryNav.classList.remove('active');
    }
});

// Responsive Images
document.querySelectorAll('img[data-src]').forEach(img => {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = () => img.removeAttribute('data-src');
});