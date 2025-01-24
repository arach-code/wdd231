// Responsive Menu
const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav ul");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

// Dynamic Footer
const currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

// Course Cards
const courses = [
  { code: "CSE 121B", name: "JavaScript Language", credits: 3, completed: true },
  { code: "WDD 130", name: "Web Fundamentals", credits: 3, completed: true },
  { code: "WDD 230", name: "Web Frontend Development", credits: 3, completed: false },
  { code: "WDD 231", name: "Web Frontend Development II", credits: 3, completed: false },
  { code: "CSE 210", name: "Programming with Classes", credits: 3, completed: false },
];

const courseCards = document.getElementById("course-cards");
const creditsTotal = document.getElementById("credits-total");


function displayCourses(filter = "all") {
  courseCards.innerHTML = "";
  let totalCredits = 0;

  const filteredCourses = courses.filter(course => {
    if (filter === "wdd") return course.code.startsWith("WDD");
    if (filter === "cse") return course.code.startsWith("CSE");
    return true;
  });

  filteredCourses.forEach(course => {
    const card = document.createElement("div");
    card.classList.add("course-card");
    if (course.completed) card.classList.add("completed");
    card.innerHTML = `<h3>${course.code}</h3><p>${course.name}</p><p>Credits: ${course.credits}</p>`;
    courseCards.appendChild(card);
    totalCredits += course.credits;
  });

  creditsTotal.textContent = `Total Credits: ${totalCredits}`;
}

// Initial display
displayCourses();

// Filter Buttons
document.getElementById("filter-all").addEventListener("click", () => displayCourses("all"));
document.getElementById("filter-wdd").addEventListener("click", () => displayCourses("wdd"));
document.getElementById("filter-cse").addEventListener("click", () => displayCourses("cse"));
