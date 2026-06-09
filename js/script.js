document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("ns7gOls6NK6nhIddI"); // 🔑 paste your public key here

  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Validation stays exactly the same
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

    // Send via EmailJS
    emailjs.sendForm("service_806yqqt", "template_1c98c0e", contactForm)
      .then(() => {
        formStatus.textContent = `Thanks, ${name}! Your message has been received.`;
        formStatus.style.color = "#64d1ff";
        contactForm.reset();
      })
      .catch((error) => {
        formStatus.textContent = "Something went wrong. Please try again.";
        formStatus.style.color = "#f8c66f";
        console.error("EmailJS error:", error);
      });
  });
});
