// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import charityReducer from './charitySlice';
import donationReducer from './donationSlice';

const store = configureStore({
  reducer: {
    charity: charityReducer,
    donation: donationReducer,
  },
});

export default store;
