import { configureStore } from '@reduxjs/toolkit';
import authReducer from './routes/authSlice'; 

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;