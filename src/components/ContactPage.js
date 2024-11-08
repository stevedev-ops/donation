import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: 'Brian Clark',
    email: 'example@youremail.com',
    phone: '(123) 456 - 7890',
    company: 'BRIX Agency',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., sending to a backend
    alert('Message sent!');
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />

          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
          />

          <label htmlFor="company">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            style={styles.input}
          />

          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your project..."
            style={styles.textarea}
          ></textarea>

          <button type="submit" style={styles.button}>Send message</button>
        </form>
      </div>
      <div style={styles.ctaContainer}>
        <h2>Share your thoughts</h2>
        <p>We value your feedback and are here to help you with any questions or concerns.</p>
        <div style={styles.socialMediaIcons}>
          {/* Replace <a> with <button> */}
          <button style={styles.socialIcon} onClick={() => window.location.href = 'https://facebook.com'}>Facebook</button>
          <button style={styles.socialIcon} onClick={() => window.location.href = 'https://twitter.com'}>Twitter</button>
          <button style={styles.socialIcon} onClick={() => window.location.href = 'https://instagram.com'}>Instagram</button>
          <button style={styles.socialIcon} onClick={() => window.location.href = 'https://linkedin.com'}>LinkedIn</button>
          <button style={styles.socialIcon} onClick={() => window.location.href = 'https://youtube.com'}>YouTube</button>
        </div>
      </div>
    </div>
  );
};

// Styles object for inline styling
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#121212',
    color: '#ffffff',
  },
  formContainer: {
    backgroundColor: '#f0f0f0',
    padding: '20px',
    borderRadius: '8px',
    marginRight: '20px',
    width: '500px',
  },
  input: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  textarea: {
    width: '100%',
    padding: '10px',
    margin: '10px 0',
    border: '1px solid #ccc',
    borderRadius: '4px',
    minHeight: '100px',
  },
  button: {
    backgroundColor: '#000000',
    color: '#ffffff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  ctaContainer: {
    maxWidth: '300px',
    padding: '20px',
    color: '#cccccc',
  },
  socialMediaIcons: {
    display: 'flex',
    gap: '10px',
  },
  socialIcon: {
    background: 'transparent',
    border: 'none',
    color: '#ffffff',
    fontSize: '24px',
    cursor: 'pointer',
    textDecoration: 'none', // Remove underline
  },
};

export default ContactPage;