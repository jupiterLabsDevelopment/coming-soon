import { configureStore } from '@reduxjs/toolkit';
import subscriptionReducer from './reducers/subscriptionReducer';

/**
 * Creates a Redux store with the specified reducer.
 *
 * @param {Object} options - The options for configuring the store.
 * @param {Function} options.reducer - The root reducer function for the store.
 * @returns {Store} The Redux store.
 */
export const store = configureStore({
  reducer: {
    subscription: subscriptionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;