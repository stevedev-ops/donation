import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './components/Navbar';
import Home from './components/Home';
import DonationList from './components/DonationList';
import DonateForm from './components/DonateForm';
import DonationHistory from './components/DonationHistory';
import CharityApplication from './components/CharityApplication';
import CharityDashboard from './components/CharityDashboard';
import AdminDashboard from './components/AdminDashboard';  // Admin Dashboard Component
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/donations" element={<DonationList />} />
            <Route path="/donate" element={<DonateForm />} />
            <Route path="/donation-history" element={<DonationHistory />} />
            <Route path="/charity-application" element={<CharityApplication />} />
            <Route path="/charity-dashboard" element={<CharityDashboard />} />

            {/* Admin Routes */}
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
