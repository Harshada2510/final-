document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");

  // Show/hide sections
  function showSection(id) {
    sections.forEach((section) => {
      section.classList.remove("active");
      section.style.display = "none"; // hide all sections
    });
    const target = document.getElementById(id);
    if (target) {
      target.classList.add("active");
      target.style.display = "block"; // show the selected section
    }

    // Optional: close mobile nav after click
    document.querySelector("nav").classList.remove("show");
  }

  // Make globally accessible for button onclick
  window.showSection = showSection;

  // Initially show welcome section
  showSection("welcome");

  // Theme toggle
  const toggle = document.getElementById("theme-toggle");
  const body = document.body;

  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark");
    toggle.checked = true;
  }

  toggle.addEventListener("change", () => {
    if (toggle.checked) {
      body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  });

  // Scroll-to-top button
  const scrollBtn = document.getElementById("scrollTopBtn");
  if (scrollBtn) {
    window.onscroll = function () {
      if (
        document.body.scrollTop > 200 ||
        document.documentElement.scrollTop > 200
      ) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    };

    scrollBtn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Hamburger menu toggle
  document
    .getElementById("menu-toggle")
    .addEventListener("click", () => {
      document.querySelector("nav").classList.toggle("show");
    });
});

// Log filter buttons (if used)
document.querySelectorAll(".filter-btn").forEach((button) => {
  button.addEventListener("click", () => {
    const day = button.getAttribute("data-day");
    const logs = document.querySelectorAll(".log-card");

    logs.forEach((log) => {
      const logDay = log.getAttribute("data-day");
      if (day === "all" || day === logDay) {
        log.style.display = "block";
      } else {
        log.style.display = "none";
      }
    });
  });
});
