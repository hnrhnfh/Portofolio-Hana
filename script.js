/*
  EDIT YOUR PORTFOLIO HERE
  ---------------------------------------
  Add a new object to the projects array.
  category must be: data, design, or other.
*/
const projects = [
  {
    category: "data",
    tag: "DATA ANALYSIS · 01",
    title: "Sales Performance Dashboard",
    description: "A business dashboard exploring revenue trends, cancellation rate, product categories, and regional performance.",
    link: "#"
  },
  {
    category: "data",
    tag: "DATA ANALYSIS · 02",
    title: "Customer Insights",
    description: "Exploratory analysis of customer behavior, demographics, and purchasing patterns to uncover useful segments.",
    link: "#"
  },
  {
    category: "design",
    tag: "DESIGN · 01",
    title: "Social Media Visual System",
    description: "A small visual identity experiment combining typography, layout, and social-media-ready compositions.",
    link: "#"
  },
  {
    category: "other",
    tag: "OTHER · 01",
    title: "Personal Creative Project",
    description: "An experimental project documenting ideas, visual references, and creative direction.",
    link: "#"
  }
];

const grid = document.getElementById("projectGrid");

function visual(category) {
  if (category === "data") {
    return `<div class="mock-chart">
      <i class="bar b1"></i><i class="bar b2"></i><i class="bar b3"></i><i class="bar b4"></i><i class="bar b5"></i>
    </div>`;
  }
  if (category === "design") return `<div class="design-shape"></div>`;
  return `<div class="other-shape"></div>`;
}

function render(filter = "all") {
  grid.innerHTML = projects
    .filter(p => filter === "all" || p.category === filter)
    .map(p => `
      <article class="project-card">
        <div class="project-visual ${p.category}">
          <span class="visual-label">${p.category.toUpperCase()}</span>
          ${visual(p.category)}
        </div>
        <div class="project-info">
          <div class="project-meta">${p.tag}</div>
          <h3>${p.title}</h3>
          <p>${p.description}</p>
          <a class="project-link" href="${p.link}">View project ↗</a>
        </div>
      </article>
    `).join("");
}

document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(b => b.classList.remove("active"));
    button.classList.add("active");
    render(button.dataset.filter);
  });
});

render();
