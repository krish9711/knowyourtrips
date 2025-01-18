import React from "react";

const Contact = () => {

  // const [message, setMessage] = useState('');
  // const [sent, setSent] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   emailjs.sendForm(
  //     'service_1l6z6nq',
  //     'template_1l6z6nq',
  //     {
  //       to_name: 'Know Your Trips',
  //       to_email: 'krish9711@gmail.com',
  //       message_html: message,
  //     },
  //     'user_1l6z6nq'
  //   ).then(
  //     (result) => {
  //       console.log('SUCCESS!', result.status, result.text);
  //       setSent(true);
  //     }).catch(
  //     (error) => {
  //       console.log('FAILED...', error);
  //     });
  //   };

  return (
    <div className="contact-page-wrapper">
      <h1 className="primary-heading">Want to travel stress-free?</h1>
      <h1 className="primary-heading">Subscribe to get our app</h1>
      <form id="contact-form">

        <div className="contact-form-container">
            <input 
                // value={message}
                // onChange={(e) => setMessage(e.target.value)} 
                type="text" 
                placeholder="yourmail@gmail.com"
                style={{
                    border: 'solid 2px #4c4c4c',
                    borderRadius: '50px',
                    padding: '1rem 2rem',
                    marginRight: '1rem',
                  }} />
            <button className="secondary-button">Submit</button>
        </div>

      </form>
    </div>
  );
};

export default Contact;