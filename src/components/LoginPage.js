import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [userName, setUserName] = useState('');
  const [contact, setContact] = useState('email'); // Default to email
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('donor'); // Default to donor
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!userName || !password || !role) {
      alert('Please enter all required fields.');
      return;
    }

    // Dispatch login action
    dispatch(login({ user: userName, contact, role, password }));

    alert('Login successful!');

    // Redirect to the home page based on the role
    navigate(`/home/${role}`);
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.heading}>Login</h2>
        
        <div style={styles.radioGroup}>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              value="email"
              checked={contact === 'email'}
              onChange={() => setContact('email')}
              style={styles.radioButton}
            />
            Email
          </label>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              value="phone"
              checked={contact === 'phone'}
              onChange={() => setContact('phone')}
              style={styles.radioButton}
            />
            Phone Number
          </label>
        </div>
        
        <input
          type={contact === 'email' ? 'email' : 'tel'}
          placeholder={contact === 'email' ? 'Email' : 'Phone Number'}
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        
        <select value={role} onChange={(e) => setRole(e.target.value)} style={styles.select}>
          <option value="donor">Donor</option>
          <option value="charity">Charity</option>
          <option value="admin">Admin</option>
        </select>
        
        <button onClick={handleLogin} style={styles.button}>Log In</button>
        
        <p style={styles.registerPrompt}>
          Don't have an account? <a href="/signup" style={styles.link}>Sign up</a>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(to right, #00c6ff, #0072ff)',
  },
  formContainer: {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
    width: '100%',
    maxWidth: '400px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2rem',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#333',
  },
  radioGroup: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  radioLabel: {
    marginRight: '15px',
    fontSize: '1rem',
    color: '#333',
  },
  radioButton: {
    marginRight: '5px',
  },
  input: {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
    boxSizing: 'border-box',
  },
  select: {
    width: '100%',
    padding: '12px',
    marginBottom: '20px',
    fontSize: '1rem',
    borderRadius: '8px',
    border: '1px solid #ddd',
  },
  button: {
    backgroundColor: '#0072ff',
    color: 'white',
    fontSize: '1.2rem',
    padding: '12px',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    width: '100%',
  },
  registerPrompt: {
    marginTop: '20px',
    fontSize: '0.9rem',
    color: '#333',
  },
  link: {
    color: '#0072ff',
    textDecoration: 'none',
  },
};

export default LoginPage;
