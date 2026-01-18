const scriptURL="https://script.google.com/macros/s/AKfycbxP_S2WCzLUz3PXKFX5pXFsARmAONM3simdeaDtOyPFfb0z06-8dd3ShHOry7d5IKL0PA/exec";
const forms=document.querySelectorAll("#contactForm");
forms.forEach(form=>{
  const msg=form.querySelector("#formMsg");
  form.addEventListener("submit",e=>{
    e.preventDefault();
    const formData={
      name:form.name.value,
      email:form.email.value,
      phone:form.phone.value,
      service:form.service.value,
      message:form.message.value
    };
    fetch(scriptURL,{method:"POST",body:JSON.stringify(formData),mode:"no-cors"})
    .then(()=>{msg.style.color="green";msg.innerText="Thank you! Your message has been submitted.";form.reset();setTimeout(()=>{msg.innerText="";},5000);})
    .catch(()=>{msg.style.color="red";msg.innerText="Error submitting form. Please try again.";});
  });
});
