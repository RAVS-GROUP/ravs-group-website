const scriptURL = "https://script.google.com/macros/s/AKfycbxP_S2WCzLUz3PXKFX5pXFsARmAONM3simdeaDtOyPFfb0z06-8dd3ShHOry7d5IKL0PA/exec";

const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

if(form){
  form.addEventListener("submit", function(e){
    e.preventDefault();

    msg.style.color = "black";
    msg.innerText = "Submitting...";

    const formData = new URLSearchParams();
    formData.append("name", form.name.value);
    formData.append("email", form.email.value);
    formData.append("phone", form.phone.value);
    formData.append("message", form.message.value);

    fetch(scriptURL, {
      method: "POST",
      body: formData
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
}
