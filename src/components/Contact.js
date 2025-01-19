import React from "react";

const Contact = () => {

  const handleSubmit = (e) => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxPa668L0WXf8EA8NBlv70SNV-bSWW9zOiEy_sVTj2TGx5-fb3r4n6CSqaFfVpi4bN39w/exec';
    const form = document.forms['submit-to-google-sheet'];
    const msg = document.getElementById("msg");
    const emailField = document.getElementById("email");
    e.preventDefault();
    if (!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
      msg.style.color = "red";
      msg.innerHTML = "Please enter a valid email address.";
      setTimeout(function () { msg.innerHTML = ""; }, 3000);
      return;
    }
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response => {
        msg.style.color = "green";
        msg.innerHTML = "Thanks for subscribing!";
        setTimeout(function () { msg.innerHTML = ""; }, 3000);
        form.reset();
      })
      .catch(error => {
        msg.style.color = "red";
        msg.innerHTML = "Oops! There was a problem.";
        setTimeout(function () { msg.innerHTML = ""; }, 3000);
      });
  };

  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Want to travel stress-free?</h1>
      <h1 className="primary-heading">Subscribe to get our app</h1>
      <form name="submit-to-google-sheet" id="contact-form" onSubmit={handleSubmit}>
        <div className="contact-form-container">
          <input
            id="email"
            name="email"
            type="text"
            placeholder="yourmail@gmail.com" />
          <button className="secondary-button">Go</button>
        </div>
        <span id="msg" className="contact-form-message"></span>
      </form>
    </div>
  );
};

export default Contact;