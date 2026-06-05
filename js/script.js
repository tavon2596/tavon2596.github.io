document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");
  const themeToggle = document.getElementById("themeToggle");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      formStatus.textContent = "Please complete all fields before sending.";
      formStatus.className = "text-warning";
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      formStatus.textContent = "Please provide a valid email address.";
      formStatus.className = "text-warning";
      return;
    }

    formStatus.textContent = `Thanks, ${name}! Your message has been received.`;
    formStatus.className = "text-success";
    contactForm.reset();
  });

  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      themeToggle.textContent = isDark ? "Switch to Light Mode" : "Toggle Dark Mode";
    });
  }

  const navLinks = document.querySelectorAll(".nav-links a");
  const mobileNav = document.querySelector(".navbar-collapse");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (mobileNav) {
        mobileNav.classList.remove("show");
      }
    });
  });
});
