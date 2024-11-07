import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCharityDetails } from '../redux/charitySlice';

const CharityApplication = () => {
  const [charityName, setCharityName] = useState('');
  const [charityDescription, setCharityDescription] = useState('');
  const [amountToRaise, setAmountToRaise] = useState('');
  const dispatch = useDispatch();

  const handleApply = () => {
    // Check if all fields are filled out
    if (!charityName || !charityDescription || !amountToRaise) {
      alert('Please fill out all fields.');
      return;
    }

    // Dispatch the new charity details to the store, but mark it as "pending" initially
    dispatch(setCharityDetails({
      name: charityName,
      description: charityDescription,
      amountToRaise,
      status: 'pending', // Mark as pending until admin approves
    }));
    alert('Charity application submitted!');
  };

  return (
    <div>
      <h2>Apply to be a Charity</h2>
      <input
        type="text"
        placeholder="Charity Name"
        value={charityName}
        onChange={(e) => setCharityName(e.target.value)}
      />
      <textarea
        placeholder="Charity Description"
        value={charityDescription}
        onChange={(e) => setCharityDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount to Raise"
        value={amountToRaise}
        onChange={(e) => setAmountToRaise(e.target.value)}
      />
      <button onClick={handleApply}>Submit Application</button>
    </div>
  );
};

export default CharityApplication;
