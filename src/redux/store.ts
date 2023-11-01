import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import ProductSlice from "./reducers/product";

export const store = configureStore({
  reducer: {
    [ProductSlice.name]: ProductSlice.reducer,
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
