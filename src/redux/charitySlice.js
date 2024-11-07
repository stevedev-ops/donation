import { createSlice } from '@reduxjs/toolkit';

const charitySlice = createSlice({
  name: 'charity',
  initialState: {
    charities: [], // Approved charities
    donors: [],
    totalDonations: 0,
    beneficiaries: [],
    inventory: [],
    stories: {},  // Stories will now be an object where each charity has its own list of stories
    charityApplications: [], // Track charity applications
  },
  reducers: {
    setCharityDetails: (state, action) => {
      state.charityApplications.push({ ...action.payload, status: 'pending' });  // Add to the applications list
    },
    approveCharity: (state, action) => {
      const charityId = action.payload;
      const charityIndex = state.charityApplications.findIndex(c => c.id === charityId);

      if (charityIndex !== -1) {
        const charity = state.charityApplications[charityIndex];
        // Update status in the charityApplications
        charity.status = 'approved';

        // Move the charity to the approved list
        state.charities.push(charity);
        // Remove it from the applications list
        state.charityApplications.splice(charityIndex, 1);
      }
    },
    rejectCharity: (state, action) => {
      const charityId = action.payload;
      const charityIndex = state.charityApplications.findIndex(c => c.id === charityId);

      if (charityIndex !== -1) {
        const charity = state.charityApplications[charityIndex];
        charity.status = 'rejected';
        // No need to move it anywhere, it's just rejected
      }
    },
    deleteCharity: (state, action) => {
      const charityId = action.payload;
      
      // Remove the charity from the approved charities list
      state.charities = state.charities.filter(c => c.id !== charityId);
      
      // Also, remove the charity from the pending charity applications (if it exists there)
      state.charityApplications = state.charityApplications.filter(c => c.id !== charityId);
    },
    setDonors: (state, action) => {
      state.donors = action.payload;
    },
    setTotalDonations: (state, action) => {
      state.totalDonations = action.payload;
    },
    setInventory: (state, action) => {
      state.inventory = action.payload;
    },
    addBeneficiary: (state, action) => {
      state.beneficiaries.push(action.payload);
    },
    addStory: (state, action) => {
      const { charityId, title, content } = action.payload;
      if (!state.stories[charityId]) {
        state.stories[charityId] = [];
      }
      state.stories[charityId].push({ title, content });
    },
  },
});

export const {
  setCharityDetails,
  approveCharity,
  rejectCharity,
  deleteCharity,
  setDonors,
  setTotalDonations,
  setInventory,
  addBeneficiary,
  addStory,
} = charitySlice.actions;

export default charitySlice.reducer;
