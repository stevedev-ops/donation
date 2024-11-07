import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDonors, setTotalDonations, setInventory, addBeneficiary, addStory } from '../redux/charitySlice';

const CharityDashboard = () => {
  const dispatch = useDispatch();
  const { charities, donors, totalDonations, beneficiaries, inventory, stories } = useSelector(state => state.charity);

  const [newStoryTitle, setNewStoryTitle] = useState('');
  const [newStoryContent, setNewStoryContent] = useState('');
  const [selectedCharityId, setSelectedCharityId] = useState('');
  const [newBeneficiaryName, setNewBeneficiaryName] = useState('');
  const [newBeneficiaryAge, setNewBeneficiaryAge] = useState('');

  useEffect(() => {
    // Simulate fetching data from API
    dispatch(setDonors([
      { id: 1, name: 'John Doe', amount: 100, anonymous: false },
      { id: 2, name: 'Jane Doe', amount: 200, anonymous: true },
    ]));
    dispatch(setTotalDonations(300));
    dispatch(setInventory([{ id: 1, item: 'Food Packages', quantity: 50 }]));
  }, [dispatch]);

  const handleAddStory = () => {
    if (!newStoryTitle || !newStoryContent || !selectedCharityId) {
      alert('Please fill out all fields: title, content, and select a charity.');
      return;
    }

    const selectedCharity = charities.find(c => c.id === selectedCharityId);

    if (selectedCharity.status !== 'approved') {
      alert('Your charity has not been approved yet.');
      return;
    }

    dispatch(addStory({ charityId: selectedCharityId, title: newStoryTitle, content: newStoryContent }));
    setNewStoryTitle('');
    setNewStoryContent('');
    alert('Story added successfully!');
  };

  const handleAddBeneficiary = () => {
    if (!newBeneficiaryName || !newBeneficiaryAge || !selectedCharityId) {
      alert('Please fill out all fields: name, age, and select a charity.');
      return;
    }

    const selectedCharity = charities.find(c => c.id === selectedCharityId);

    if (selectedCharity.status !== 'approved') {
      alert('Your charity has not been approved yet.');
      return;
    }

    dispatch(addBeneficiary({
      charityId: selectedCharityId,
      name: newBeneficiaryName,
      age: newBeneficiaryAge
    }));

    setNewBeneficiaryName('');
    setNewBeneficiaryAge('');
    alert('Beneficiary added successfully!');
  };

  return (
    <div>
      <h2>Charity Dashboard</h2>
      
      <h3>Charities</h3>
      {charities.length > 0 ? (
        <ul>
          {charities.map(charity => (
            <li key={charity.id}>
              <h4>{charity.name}</h4>
              <p>{charity.description}</p>
              <p>Status: {charity.status}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No charities available.</p>
      )}

      {/* Add Beneficiary Form */}
      <h3>Add a Beneficiary</h3>
      <div>
        <label>
          Select Charity:
          <select onChange={(e) => setSelectedCharityId(e.target.value)} value={selectedCharityId}>
            <option value="">-- Select a charity --</option>
            {charities.map(charity => (
              <option key={charity.id} value={charity.id}>{charity.name}</option>
            ))}
          </select>
        </label>

        <input
          type="text"
          placeholder="Beneficiary Name"
          value={newBeneficiaryName}
          onChange={(e) => setNewBeneficiaryName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Beneficiary Age"
          value={newBeneficiaryAge}
          onChange={(e) => setNewBeneficiaryAge(e.target.value)}
        />
        <button onClick={handleAddBeneficiary}>Add Beneficiary</button>
      </div>

      {/* Add a Story Form */}
      <h3>Add a Story</h3>
      <div>
        <label>
          Select Charity:
          <select onChange={(e) => setSelectedCharityId(e.target.value)} value={selectedCharityId}>
            <option value="">-- Select a charity --</option>
            {charities.map(charity => (
              <option key={charity.id} value={charity.id}>{charity.name}</option>
            ))}
          </select>
        </label>

        <input
          type="text"
          placeholder="Story Title"
          value={newStoryTitle}
          onChange={(e) => setNewStoryTitle(e.target.value)}
        />
        <textarea
          placeholder="Story Content"
          value={newStoryContent}
          onChange={(e) => setNewStoryContent(e.target.value)}
        />
        <button onClick={handleAddStory}>Add Story</button>
      </div>
    </div>
  );
};

export default CharityDashboard;
