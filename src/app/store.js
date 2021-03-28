import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import brewereriesReducer from '../slices/breweriesSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    breweries: brewereriesReducer,
  },
});
