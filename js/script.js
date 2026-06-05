document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      formStatus.textContent = "Please complete all fields before sending.";
      formStatus.style.color = "#f8c66f";
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      formStatus.textContent = "Please provide a valid email address.";
      formStatus.style.color = "#f8c66f";
      return;
    }

    formStatus.textContent = `Thanks, ${name}! Your message has been received.`;
    formStatus.style.color = "#64d1ff";
    contactForm.reset();
  });
});
