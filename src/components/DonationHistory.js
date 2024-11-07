import React, { useState, useEffect } from 'react';

const DonationHistory = () => {
  const [donationHistory, setDonationHistory] = useState([]);

  useEffect(() => {
    const donations = JSON.parse(localStorage.getItem('donations')) || [];
    setDonationHistory(donations);
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Your Donation History</h2>
      {donationHistory.length > 0 ? (
        <ul>
          {donationHistory.map((donation, index) => (
            <li key={index} style={styles.donationItem}>
              <h3>{donation.campaignTitle}</h3>
              <p>Amount Donated: ${donation.amount}</p>
              <p>Date: {new Date(donation.date).toLocaleDateString()}</p>
              {donation.isAnonymous ? (
                <p>Anonymous Donation</p>
              ) : (
                <p>Donor: {donation.userName}</p>
              )}

              {donation.beneficiaryStories && donation.beneficiaryStories.length > 0 && (
                <div>
                  <h4>Beneficiary Stories:</h4>
                  <ul>
                    {donation.beneficiaryStories.map((story, index) => (
                      <li key={index}>{story}</li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>You haven't made any donations yet.</p>
      )}
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    maxWidth: '600px',
    margin: 'auto',
  },
  title: {
    textAlign: 'center',
    color: '#007bff',
  },
  donationItem: {
    margin: '15px 0',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    boxShadow: 'inset 0 2px 5px rgba(0, 0, 0, 0.1)',
  },
};

export default DonationHistory;
