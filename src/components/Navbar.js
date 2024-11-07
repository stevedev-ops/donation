import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* Donor User Links */}
        <li>
          <Link to="/donations">Donate</Link>
        </li>
        <li>
          <Link to="/donation-history">Donation History</Link>
        </li>
        {/* Charity User Links */}
        <li>
          <Link to="/charity-application">Apply as a Charity</Link>
        </li>
        <li>
          <Link to="/charity-dashboard">Charity Dashboard</Link>
        </li>
        {/* Admin Link is always visible now */}
        <li>
          <Link to="/admin-dashboard">Admin Dashboard</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
