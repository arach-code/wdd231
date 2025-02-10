// Load JSON data
async function getMembers() {
    try {
        const response = await fetch('data/members.json');
        const data = await response.json();
        displayMembers(data.members);
    } catch (error) {
        console.error('Error fetching members:', error);
    }
}

// Display members
function displayMembers(members) {
    const directory = document.getElementById('directory');
    directory.innerHTML = '';

    members.forEach(member => {
        const card = document.createElement('div');
        card.className = 'member-card';
        card.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}" loading="lazy">
            <h2>${member.name}</h2>
            <p>${member.address}</p>
            <p>Phone: ${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Website</a></p>
            <p>Membership Level: ${getMembershipLevel(member.membership)}</p>
        `;
        directory.appendChild(card);
    });
}

// Toggle views
document.getElementById('grid-view').addEventListener('click', () => {
    document.getElementById('directory').className = 'directory grid';
});

document.getElementById('list-view').addEventListener('click', () => {
    document.getElementById('directory').className = 'directory list';
});

// Helper function for membership level
function getMembershipLevel(level) {
    const levels = { 1: 'Member', 2: 'Silver', 3: 'Gold' };
    return levels[level] || 'Member';
}

// Footer dynamic content
document.getElementById('copyright-year').textContent = new Date().getFullYear();
document.getElementById('last-modified').textContent = document.lastModified;

// Initialize
getMembers();