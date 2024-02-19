import React, { useState } from 'react';
import styles from './contact.module.css';
import { adminInstance } from '../../axios'

function ContactForm() {
  const [formData, setFormData] = useState({ name : '' , email: '', message: '' });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(formData)
    adminInstance.post('/adminLogin')
    .then(res => {
        console.log(res)
      })
    // Send form data to server or perform other action here
  };

  return (
    <form className={styles.contact}   onSubmit={ handleSubmit } >
    <h3>Leave A message for me!</h3>
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className={styles.controls}
      />  
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className={styles.controls}
      />
      
      <label htmlFor="message">Message:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        className={styles.controls}
      />

      <input
        type="submit"
        value="Submit"
        className={[styles.btn,styles.btnsubmit].join(" ")}
      />
    </form>
  );
}

export default ContactForm;