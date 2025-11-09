
const themes = {
  neon: {
    primary: "#00E5FF",
    secondary: "#5CE1E6",
    accent: "#FF6EC7",
    background: "#0A0F1E",
    surface: "#131B2E",
    textPrimary: "#EAF6FF",
    textSecondary: "#A7C4D9"
  },
  warm: {
    primary: "#DE9151",
    secondary: "#F34213",
    accent: "#BC5D2E",
    background: "#2E2E3A",
    surface: "#3A3440",
    textPrimary: "#BBB8B2",
    textSecondary: "#EDE7E1"
  }
};

function applyTheme(themeName) {
  const theme = themes[themeName];
  const root = document.documentElement; 

  for (const key in theme) {
    root.style.setProperty(`--${key}`, theme[key]);
  }

  if (themeName === "warm") {
    root.style.setProperty("--bg-grad", "linear-gradient(180deg, #3A3440, #2E2E3A)");
  } else {
    root.style.setProperty("--bg-grad", "linear-gradient(180deg, #061220, #02040a)");
  }
}

let currentTheme = localStorage.getItem("theme") || "neon";
applyTheme(currentTheme);

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  currentTheme = currentTheme === "neon" ? "warm" : "neon";
  applyTheme(currentTheme);

  localStorage.setItem("theme", currentTheme);
});

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  menuToggle.classList.toggle("active");
});

document.querySelectorAll(".navbar__links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
  });
});


const navbar = document.getElementById("navbar");
let lastScroll = 0;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll > 40) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  if (currentScroll > lastScroll && currentScroll > 120) {
    navbar.style.transform = "translateY(-100%)";
  } else {
    navbar.style.transform = "translateY(0)";
  }

  lastScroll = currentScroll;
});


const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault(); // stop page reload

  const btn = contactForm.querySelector(".contact__btn");
  btn.textContent = "Sending...";
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = "Sent ✓";
    contactForm.reset();

    setTimeout(() => {
      btn.textContent = "Send Message";
      btn.disabled = false;
    }, 1500);
  }, 1000);
});


const orbOne = document.querySelector(".orb--one");
const orbTwo = document.querySelector(".orb--two");

window.addEventListener("mousemove", (e) => {
  const x = e.clientX / window.innerWidth - 0.5;
  const y = e.clientY / window.innerHeight - 0.5;

  if (orbOne) orbOne.style.transform = `translate(${x * 20}px, ${y * 15}px)`;
  if (orbTwo) orbTwo.style.transform = `translate(${x * -15}px, ${y * -10}px)`;
});


document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    navLinks.classList.remove("active");
    menuToggle.classList.remove("active");
  }
});
