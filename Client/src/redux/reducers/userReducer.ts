import { createSlice } from '@reduxjs/toolkit';
import { TBook } from '../../types';
import { TSignInResponse } from '../../userTypes';
import actions from '../actions';

export type TUserState = {
  isLoading: boolean;
  signInData:  TSignInResponse;
  error: string | null;
}

const initialState: TUserState = {
  isLoading: false,
  signInData: {} as TSignInResponse,
  error: null,
}

const userReducer = createSlice({
  name: 'signIn',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(actions.signIn.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(actions.signIn.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.signInData = payload
    })
    builder.addCase(actions.signIn.rejected, (state) => {
      state.isLoading = false
      state.signInData = {} as TSignInResponse
      state.error = 'Error'
    })
  }
})

export default userReducer.reducer;