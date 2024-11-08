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
          <label htmlFor="name" style={styles.label}>Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />

          <label htmlFor="email" style={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={styles.input}
          />

          <label htmlFor="phone" style={styles.label}>Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
          />

          <label htmlFor="company" style={styles.label}>Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            style={styles.input}
          />

          <label htmlFor="message" style={styles.label}>Message</label>
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
        <h2 style={styles.ctaHeading}>Share your thoughts</h2>
        <p style={styles.ctaText}>We value your feedback and are here to help you with any questions or concerns.</p>
        <div style={styles.socialMediaIcons}>
          <button style={styles.socialIcon} onClick={() => window.location.href = 'https://facebook.com'}>F</button>
          <button style={styles.socialIcon} onClick={() => window.location.href = 'https://twitter.com'}>T</button>
          <button style={styles.socialIcon} onClick={() => window.location.href = 'https://instagram.com'}>I</button>
          <button style={styles.socialIcon} onClick={() => window.location.href = 'https://linkedin.com'}>L</button>
          <button style={styles.socialIcon} onClick={() => window.location.href = 'https://youtube.com'}>Y</button>
        </div>
      </div>
    </div>
  );
};

// Enhanced Inline Styles
const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', // Soft gradient background
    color: '#ffffff',
    fontFamily: 'Arial, sans-serif',
  },
  formContainer: {
    backgroundColor: '#ffffff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    width: '500px',
    maxWidth: '100%',
    marginRight: '30px',
  },
  label: {
    display: 'block',
    marginBottom: '6px',
    color: '#333333',
    fontWeight: '600',
    fontSize: '1.1rem',
  },
  input: {
    width: '100%',
    padding: '12px',
    margin: '8px 0',
    border: '1px solid #ccc',
    borderRadius: '8px',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease',
  },
  textarea: {
    width: '100%',
    padding: '12px',
    margin: '8px 0',
    border: '1px solid #ccc',
    borderRadius: '8px',
    minHeight: '120px',
    fontSize: '1rem',
    transition: 'border-color 0.3s ease',
  },
  button: {
    backgroundColor: '#f5576c',
    color: '#ffffff',
    padding: '12px 25px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    width: '100%',
    marginTop: '15px',
  },
  ctaContainer: {
    maxWidth: '300px',
    padding: '30px',
    color: '#ffffff',
    textAlign: 'center',
  },
  ctaHeading: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
    marginBottom: '15px',
  },
  ctaText: {
    fontSize: '1.1rem',
    marginBottom: '20px',
    lineHeight: '1.5',
    color: '#f0f0f0',
  },
  socialMediaIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '15px',
  },
  socialIcon: {
    backgroundColor: '#ffffff',
    border: 'none',
    color: '#f5576c',
    fontSize: '1.5rem',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    width: '40px',
    height: '40px',
  },
};

export default ContactPage;
