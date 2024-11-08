import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Home = () => {
  const { isAuthenticated, role } = useSelector((state) => state.auth);

  // State to manage the visibility of the dropdown
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  const containerStyle = {
    backgroundColor: '#f4f8fb',
    fontFamily: 'Arial, sans-serif',
    padding: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    flexDirection: 'column',
    textAlign: 'center',
    backgroundImage: 'url("https://source.unsplash.com/1600x900/?donate")', // Adding a background image for impact
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const contentStyle = {
    backgroundColor: 'white',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    width: '100%',
    textAlign: 'center',
    opacity: 0.9, // Make it a bit transparent to let the background show through
  };

  const mainTitleStyle = {
    fontSize: '2.8rem',
    fontWeight: 'bold',
    marginBottom: '20px',
    color: '#2c3e50',
    textShadow: '2px 2px 4px rgba(0,0,0,0.2)', // Add a subtle text shadow for better readability
  };

  const descriptionStyle = {
    fontSize: '1.4rem',
    color: '#34495e',
    marginBottom: '20px',
    lineHeight: '1.8',
    fontStyle: 'italic',
  };

  const buttonStyle = {
    backgroundColor: '#e74c3c',
    color: 'white',
    fontSize: '1.1rem',
    padding: '12px 25px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    marginTop: '15px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  };

  const buttonHoverStyle = {
    backgroundColor: '#c0392b',
    transform: 'scale(1.05)', // Button scales up slightly on hover
  };

  const encouragingMessageStyle = {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#27ae60', // Green for a positive, encouraging message
    marginTop: '20px',
  };

  const renderHomeContent = () => {
    if (!isAuthenticated) {
      return (
        <div style={contentStyle}>
          <h1 style={mainTitleStyle}>Welcome to Our Donation Platform</h1>
          <p style={descriptionStyle}>Your contributions can change lives!</p>
          <p style={descriptionStyle}>Join our community and make a lasting impact.</p>

          {/* Dropdown button */}
          <div style={{ position: 'relative' }}>
            <button
              style={buttonStyle}
              onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
              onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
              onClick={toggleDropdown}
            >
              Log In / Sign Up
            </button>

            {/* Dropdown menu */}
            {isDropdownOpen && (
              <div style={dropdownMenuStyle}>
                <Link to="/login/donor">
                  <button
                    style={dropdownButtonStyle}
                    onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                  >
                    Log In as Donor
                  </button>
                </Link>
                <Link to="/login/charity">
                  <button
                    style={dropdownButtonStyle}
                    onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                  >
                    Log In as Charity
                  </button>
                </Link>
                <Link to="/login/admin">
                  <button
                    style={dropdownButtonStyle}
                    onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                  >
                    Log In as Admin
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      );
    }

    switch (role) {
      case 'donor':
        return (
          <div style={contentStyle}>
            <h1 style={mainTitleStyle}>Welcome, Donor!</h1>
            <p style={descriptionStyle}>Your generosity brings hope to others.</p>
            <p style={descriptionStyle}>Browse campaigns and donate to causes you care about.</p>
            <p style={encouragingMessageStyle}>Every donation counts. Make your impact today!</p>
            <Link to="/donation-history">
              <button
                style={buttonStyle}
                onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
              >
                Donation History
              </button>
            </Link>
          </div>
        );
      case 'charity':
        return (
          <div style={contentStyle}>
            <h1 style={mainTitleStyle}>Welcome, Charity!</h1>
            <p style={descriptionStyle}>Your mission can inspire change in the world.</p>
            <p style={descriptionStyle}>Apply now to get listed and share your campaigns with the world.</p>
            <p style={encouragingMessageStyle}>You can make a world of difference—start today!</p>
            <Link to="/charity-application">
              <button
                style={buttonStyle}
                onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
              >
                Apply Now
              </button>
            </Link>
          </div>
        );
      case 'admin':
        return (
          <div style={contentStyle}>
            <h1 style={mainTitleStyle}>Welcome, Admin!</h1>
            <p style={descriptionStyle}>You are at the heart of managing this platform and making a global impact.</p>
            <p style={descriptionStyle}>Oversee campaigns, manage donations, and ensure smooth operations.</p>
            <p style={encouragingMessageStyle}>Your leadership ensures that change happens!</p>
            <Link to="/admin-dashboard">
              <button
                style={buttonStyle}
                onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
              >
                Manage Dashboard
              </button>
            </Link>
          </div>
        );
      default:
        return (
          <div style={contentStyle}>
            <h1 style={mainTitleStyle}>Welcome to Our Donation Platform</h1>
            <p style={descriptionStyle}>Contribute today, whether you're donating or opening a charity.</p>
            <p style={encouragingMessageStyle}>Together, we can create a ripple effect of kindness!</p>
            <Link to="/explore">
              <button
                style={buttonStyle}
                onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
              >
                Explore Now
              </button>
            </Link>
          </div>
        );
    }
  };

  return <div style={containerStyle}>{renderHomeContent()}</div>;
};

// Dropdown menu style
const dropdownMenuStyle = {
  position: 'absolute',
  top: '100%',
  left: 0,
  backgroundColor: 'white',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  zIndex: 1000,
  width: '200px',
  padding: '10px 0',
  borderRadius: '4px',
};

// Dropdown button style
const dropdownButtonStyle = {
  backgroundColor: '#e74c3c',
  color: 'white',
  fontSize: '1rem',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '4px',
  width: '100%',
  textAlign: 'center',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
  marginBottom: '5px',
};

export default Home;
