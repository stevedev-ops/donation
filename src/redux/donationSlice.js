import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedCampaign: null,
  donationAmount: 0,
  recurring: false,
  anonymity: true,
  userName: '',
  donationHistory: [],
  donationsByCharity: {}, // To track donations by charity
};

const donationSlice = createSlice({
  name: 'donation',
  initialState,
  reducers: {
    setSelectedCampaign: (state, action) => {
      state.selectedCampaign = action.payload;
    },
    setDonationAmount: (state, action) => {
      state.donationAmount = action.payload;
    },
    setRecurring: (state, action) => {
      state.recurring = action.payload;
    },
    setAnonymity: (state, action) => {
      state.anonymity = action.payload;
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
    addDonation: (state, action) => {
      const donationData = action.payload;

      // Add to donationHistory
      state.donationHistory.push(donationData);

      // Add the donation to the charity-specific donations
      const charityId = donationData.campaignTitle; // Assuming campaignTitle is the charity ID
      if (!state.donationsByCharity[charityId]) {
        state.donationsByCharity[charityId] = [];
      }
      state.donationsByCharity[charityId].push(donationData);
    },
  },
});

export const { 
  setSelectedCampaign, 
  setDonationAmount, 
  setRecurring, 
  setAnonymity, 
  setUserName,
  addDonation 
} = donationSlice.actions;

export default donationSlice.reducer;
