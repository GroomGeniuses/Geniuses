import { configureStore } from '@reduxjs/toolkit';
import { testSlice } from '../_slices/testSlice';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    testStore: testSlice,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
export default store;
