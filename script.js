const navbar = {
  logo: { text: "NeuraVision.AI", url: "./" },
  links: [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Contact", id: "contact" }
  ],
  loginButton: { text: "Login", url: "/login.html" }
};

// Create navbar elements
function createLogo(data) {
  document.querySelector(".navbar__logo").innerHTML = `
    <a href="${data.url}" class="logo">${data.text}</a>`;
}

function createLinks(data) {
  const container = document.querySelector(".navbar__links");
  const ul = document.createElement("ul");
  data.forEach(link => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#${link.id}" class="nav-link">${link.name}</a>`;
    ul.appendChild(li);
  });
  container.appendChild(ul);
}

function createButton(data) {
  document.querySelector(".navbar__btn").innerHTML = `
    <a href="${data.url}" class="login-btn">${data.text}</a>`;
}

// Initialize navbar
document.addEventListener("DOMContentLoaded", () => {
  createLogo(navbar.logo);
  createLinks(navbar.links);
  createButton(navbar.loginButton);

  // Menu toggle
  const toggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".navbar__links");
  toggle.addEventListener("click", () => {
    toggle.classList.toggle("active");
    navLinks.classList.toggle("active");
  });
});
