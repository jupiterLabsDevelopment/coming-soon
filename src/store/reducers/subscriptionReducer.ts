import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SubscriptionState {
  email: string;
  status: 'idle' | 'loading' | 'success' | 'failed';
}

const initialState: SubscriptionState = {
  email: '',
  status: 'idle',
};

const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    subscribeRequest: (state: SubscriptionState, action: PayloadAction<string>) => {
      state.email = action.payload;
      state.status = 'loading';
    },
    subscribeSuccess: (state: SubscriptionState) => {
      state.status = 'success';
    },
    subscribeFailure: (state: SubscriptionState) => {
      state.status = 'failed';
    },
  },
});

export const { subscribeRequest, subscribeSuccess, subscribeFailure } = subscriptionSlice.actions;
export default subscriptionSlice.reducer;