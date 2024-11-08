import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addDonation } from '../redux/donationSlice';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('your-stripe-public-key-here');

const DonateForm = () => {
  const dispatch = useDispatch();
  const selectedCampaign = useSelector(state => state.donation.selectedCampaign);
  const [amount, setAmount] = useState('');
  const [userName, setUserName] = useState('');
  const [recurring, setRecurring] = useState(false);
  const [anonymity, setAnonymity] = useState(true);

  const handleDonate = async () => {
    const donationData = {
      amount,
      userName: anonymity ? 'Anonymous' : userName,
      recurring,
      date: new Date().toISOString(),
      campaignTitle: selectedCampaign ? selectedCampaign.title : 'Unknown',
      isAnonymous: anonymity,
    };

    dispatch(addDonation(donationData));  // Dispatch to Redux store
    alert('Donation successful!');
  };

  return (
    <div>
      <h2>Donate to {selectedCampaign?.title}</h2>
      <input
        type="number"
        placeholder="Donation Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="checkbox"
        checked={recurring}
        onChange={() => setRecurring(!recurring)}
      />
      Recurring Donation
      <input
        type="checkbox"
        checked={anonymity}
        onChange={() => setAnonymity(!anonymity)}
      />
      Anonymous Donation
      {!anonymity && (
        <input
          type="text"
          placeholder="Your Name"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      )}

      <Elements stripe={stripePromise}>
        <CheckoutForm donationAmount={amount} />
      </Elements>

      <button onClick={handleDonate}>Donate</button>
    </div>
  );
};

export default DonateForm;
