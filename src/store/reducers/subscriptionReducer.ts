import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppDispatch } from '../store';
import { subscribe } from '../../api/subscriptionService';

interface SubscriptionState {
  email: string;
  status: 'idle' | 'loading' | 'success' | 'failed';
  errorMessage?: string;
}

const initialState: SubscriptionState = {
  email: '',
  status: 'idle',
  errorMessage: undefined,
};

/**
 * Subscription reducer slice.
 *
 * @remarks
 * This slice handles the state management for subscription related actions.
 *
 * @packageDocumentation
 */
const subscriptionSlice = createSlice({
  name: 'subscription',
  initialState,
  reducers: {
    subscribeRequest: (state: SubscriptionState, action: PayloadAction<string>) => {
      state.email = action.payload;
      state.status = 'loading';
      state.errorMessage = undefined;
    },
    subscribeSuccess: (state: SubscriptionState) => {
      state.status = 'success';
    },
    subscribeFailure: (state: SubscriptionState, action: PayloadAction<string>) => {
      state.status = 'failed';
      state.errorMessage = action.payload;
    },
  },
});

export const { subscribeRequest, subscribeSuccess, subscribeFailure } = subscriptionSlice.actions;

export const subscribeUser = (email: string) => async (dispatch: AppDispatch) => {
  dispatch(subscribeRequest(email));
  try {
    const message = await subscribe(email);
    dispatch(subscribeSuccess());
    alert(message);
  } catch (error: any) {
    dispatch(subscribeFailure(error.message));
  }
};

export default subscriptionSlice.reducer;