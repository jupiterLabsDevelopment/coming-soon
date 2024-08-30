import { configureStore } from '@reduxjs/toolkit';
import subscriptionReducer from './reducers/subscriptionReducer.ts';

export const store = configureStore({
  reducer: {
    subscription: subscriptionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;