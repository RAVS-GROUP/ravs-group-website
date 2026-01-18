const scriptURL = "https://script.google.com/macros/s/AKfycbxRlobhlQyS8RhRKoFPAgh6V0pi9BjfazwnrQVzbienBBzy9af2mnG6FTIjTwVspsUq/exec";
const forms = document.querySelectorAll("#contactForm");

forms.forEach(form => {
  const msg = form.querySelector("#formMsg");
  form.addEventListener("submit", e => {
    e.preventDefault();
    const formData = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      service: form.service.value,
      message: form.message.value
    };
    fetch(scriptURL, { method:"POST", body:JSON.stringify(formData), mode:"no-cors" })
      .then(() => { msg.style.color="green"; msg.innerText="Thank you! Your message has been submitted."; form.reset(); setTimeout(()=>{ msg.innerText=""; },5000); })
      .catch(() => { msg.style.color="red"; msg.innerText="Error submitting form. Please try again."; });
  });
});
