import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import reveiwReducer from '@/features/review/reviewSlice';

export const store = configureStore({
  reducer: {
    review: reveiwReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
