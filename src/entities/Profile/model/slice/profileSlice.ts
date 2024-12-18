import { createSlice } from '@reduxjs/toolkit';
import { ProfileShema } from '../types/profile';

const initialState: ProfileShema = {
  isLoading: false,
  readonly: true,
  data: undefined,
  error: undefined,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: { },
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
