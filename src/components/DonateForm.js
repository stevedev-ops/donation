import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDonationAmount, setRecurring, setAnonymity, setUserName, addDonation } from '../redux/donationSlice'; 
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('your-publishable-key-from-stripe');

const DonateForm = () => {
  const dispatch = useDispatch();
  const selectedCampaign = useSelector(state => state.donation.selectedCampaign);
  const [amount, setAmount] = useState('');
  
  // Placeholder state for other options
  const [recurring, setRecurring] = useState(false);
  const [anonymity, setAnonymity] = useState(true);
  const [userName, setUserName] = useState('');

  // Handle changes for the various inputs
  const handleRecurringChange = (e) => { setRecurring(e.target.checked); };
  const handleAnonymityChange = (e) => { setAnonymity(e.target.checked); };
  const handleNameChange = (e) => { setUserName(e.target.value); };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
    dispatch(setDonationAmount(e.target.value));
  };

  const handleDonate = async () => {
    try {
      // Prepare donation data
      const donationData = {
        amount: amount,
        recurring: recurring,
        anonymity: anonymity,
        userName: userName || 'Anonymous',
        campaignTitle: selectedCampaign ? selectedCampaign.title : 'Unknown Campaign',
        date: new Date().toISOString(),
        isAnonymous: anonymity,  // Store anonymity flag
      };

      // 1. Add the donation to the Redux state immediately (persist in the store)
      dispatch(addDonation(donationData));

      // Optionally, save donation to localStorage for persistence across page reloads
      const donations = JSON.parse(localStorage.getItem('donations')) || [];
      donations.push(donationData);
      localStorage.setItem('donations', JSON.stringify(donations));

      // 2. Proceed to handle the payment with Stripe (even if payment fails)
      // Here, you could integrate the Stripe logic, but the donation history
      // is saved in Redux and localStorage regardless of payment status.
      alert('Donation has been recorded. Thank you for your support!');

      // If you need to call an API to log donation in the backend:
      // await api.submitDonation(donationData);

    } catch (error) {
      console.error('Error processing donation:', error);
      alert('There was an issue processing your donation, but we’ve recorded your donation attempt.');
    }
  };

  // Fallback title when selectedCampaign is not available
  const campaignTitle = selectedCampaign ? selectedCampaign.title : "Loading...";

  return (
    <div>
      <h2>Donate to {campaignTitle}</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Donation Amount ($):
          <input type="number" value={amount} onChange={handleAmountChange} required />
        </label>
        <br />
        <label>
          Recurring Donation:
          <input type="checkbox" checked={recurring} onChange={handleRecurringChange} />
        </label>
        <br />
        <label>
          Anonymity:
          <input type="checkbox" checked={anonymity} onChange={handleAnonymityChange} />
        </label>
        <br />

        {/* Show the name input field only if anonymity is not checked */}
        {!anonymity && (
          <div>
            <label>
              Your Name:
              <input 
                type="text" 
                value={userName} 
                onChange={handleNameChange} 
                placeholder="Enter your name"
              />
            </label>
            <br />
          </div>
        )}

        <Elements stripe={stripePromise}>
          <CheckoutForm donationAmount={amount} userName={userName} />
        </Elements>

        <button type="button" onClick={handleDonate}>
          Donate
        </button>
      </form>
    </div>
  );
};

export default DonateForm;
