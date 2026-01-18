const scriptURL = "https://script.google.com/macros/s/AKfycbxP_S2WCzLUz3PXKFX5pXFsARmAONM3simdeaDtOyPFfb0z06-8dd3ShHOry7d5IKL0PA/exec";

const form = document.getElementById("contactForm");
const msg = document.getElementById("formMsg");

if(form){
  form.addEventListener("submit", e => {
    e.preventDefault();
    msg.style.color = "black";
    msg.innerText = "Submitting...";

    const data = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value
    };

    fetch(scriptURL,{
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => {
      if(res.status === "success"){
        msg.style.color = "green";
        msg.innerText = "Thank you for contacting us. We will connect you shortly.";
        form.reset();
        setTimeout(()=>msg.innerText="",5000);
      } else {
        throw new Error();
      }
    })
    .catch(()=>{
      msg.style.color = "red";
      msg.innerText = "Error submitting form. Please try again.";
    });
  });
}
