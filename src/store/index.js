// src/store/index.js
import { configureStore } from '@reduxjs/toolkit';
import donationReducer from '../redux/donationSlice';

const store = configureStore({
  reducer: {
    donation: donationReducer,
  },
});

export default store;
