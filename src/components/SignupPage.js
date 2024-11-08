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
    <div>
      <h2>Login</h2>
      <div>
        <label>
          <input
            type="radio"
            value="email"
            checked={contact === 'email'}
            onChange={() => setContact('email')}
          />
          Email
        </label>
        <label>
          <input
            type="radio"
            value="phone"
            checked={contact === 'phone'}
            onChange={() => setContact('phone')}
          />
          Phone Number
        </label>
      </div>
      <input
        type={contact === 'email' ? 'email' : 'tel'}
        placeholder={contact === 'email' ? 'Email' : 'Phone Number'}
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <select value={role} onChange={(e) => setRole(e.target.value)}>
        <option value="donor">Donor</option>
        <option value="charity">Charity</option>
        <option value="admin">Admin</option>
      </select>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
};

export default LoginPage;
