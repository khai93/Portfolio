import React, { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

const FORMSPARK_ACTION_URL = "https://submit-form.com/FlS6rckF";

export default () => {
  const [submited, setSubmited] = useState(false);
  const [token, setToken] = useState("");
  const [contact, setContact] = useState({
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = e => setContact({ ...contact, [e.target.name]: e.target.value });
  const handleTokenChange = (value) => {
    setToken(value);
  }
  async function sendEmail(e) {
    e.preventDefault();

    await fetch(FORMSPARK_ACTION_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...contact,
        "g-recaptcha-response": token
      }),
    });
    setSubmited(true);
  }

  return (
    !submited ? <form action='https://api.staticforms.xyz/submit' method='post' className="contact-form" onSubmit={sendEmail}>
      <label>Email</label>
      <input type="email" name="email" onChange={handleChange} value={contact.email} required />
      <label>Subject</label>
      <input type="text" name="subject" onChange={handleChange} value={contact.subject} required />
      <label>Message</label>
      <textarea name="message" onChange={handleChange} value={contact.message} onChange={handleChange} />
      <ReCAPTCHA
        onChange={handleTokenChange}
        sitekey={"6LfMoV4fAAAAAIkXYr12r1k0sfQRULlDXdGMHVTm"}
      />
      <button type="submit" className="contact-form-btn">Submit</button>
    </form> :
    <div className="submit_msg">Your contact form has been submitted!</div>
  );
}