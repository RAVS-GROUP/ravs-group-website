const scriptURL = "https://script.google.com/macros/s/AKfycbxP_S2WCzLUz3PXKFX5pXFsARmAONM3simdeaDtOyPFfb0z06-8dd3ShHOry7d5IKL0PA/exec";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const msg = document.getElementById("formMsg");

  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    msg.innerText = "Submitting...";

    fetch(scriptURL, {
      method: "POST",
      body: new FormData(form)
    })
    .then(() => {
      msg.style.color = "green";
      msg.innerText = "Thank you for contacting us. We will connect you shortly.";
      form.reset();
      setTimeout(() => msg.innerText = "", 5000);
    })
    .catch(() => {
      msg.style.color = "red";
      msg.innerText = "Error submitting form. Please try again.";
    });
  });
});
