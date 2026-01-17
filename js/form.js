const scriptURL = "https://script.google.com/macros/s/AKfycbxRlobhlQyS8RhRKoFPAgh6V0pi9BjfazwnrQVzbienBBzy9af2mnG6FTIjTwVspsUq/exec";

const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", e => {
  e.preventDefault();

  const formData = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    service: form.service.value,
    message: form.message.value
  };

  fetch(scriptURL, {
    method: "POST",
    body: JSON.stringify(formData)
  })
  .then(response => {
    msg.style.color = "green";
    msg.innerText = "Thank you! Your message has been submitted.";
    form.reset();
  })
  .catch(error => {
    msg.style.color = "red";
    msg.innerText = "Error submitting form. Please try again.";
  });
});
