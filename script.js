const themeToggleBtn = document.getElementById("theme-toggle");
const icon = themeToggleBtn.querySelector("i");
const menuBtn = document.getElementById("menu-btn");
const menuIcon = menuBtn.querySelector("i");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-links a");

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    icon.classList.replace("fa-moon", "fa-sun");
  }
}

themeToggleBtn.addEventListener("click", () => {
  let theme = document.documentElement.getAttribute("data-theme");

  if (theme === "dark") {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    icon.classList.replace("fa-sun", "fa-moon");
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    icon.classList.replace("fa-moon", "fa-sun");
  }
});

menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("open");
  if (navbar.classList.contains("open")) {
    menuIcon.classList.replace("fa-bars", "fa-xmark");
    menuBtn.setAttribute("aria-label", "Close Menu");
  } else {
    menuIcon.classList.replace("fa-xmark", "fa-bars");
    menuBtn.setAttribute("aria-label", "Open Menu");
  }
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("open");
    menuIcon.classList.replace("fa-xmark", "fa-bars");
    menuBtn.setAttribute("aria-label", "Open Menu");
  });
});

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});
