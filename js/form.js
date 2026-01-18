<script>
const scriptURL = "https://script.google.com/macros/s/AKfycbxP_S2WCzLUz3PXKFX5pXFsARmAONM3simdeaDtOyPFfb0z06-8dd3ShHOry7d5IKL0PA/exec";

const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  msg.style.color = "black";
  msg.innerText = "Submitting...";

  const formData = {
    name: form.name.value,
    email: form.email.value,
    phone: form.phone.value,
    message: form.message.value
  };

  fetch(scriptURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(formData)
  })
  .then(res => res.json())
  .then(data => {
    if (data.status === "success") {
      msg.style.color = "green";
      msg.innerText = "Thank you for contacting us. We will connect you shortly.";
      form.reset();
      setTimeout(() => msg.innerText = "", 5000);
    } else {
      throw new Error("Submission failed");
    }
  })
  .catch(err => {
    msg.style.color = "red";
    msg.innerText = "Error submitting form. Please try again.";
  });
});
</script>
