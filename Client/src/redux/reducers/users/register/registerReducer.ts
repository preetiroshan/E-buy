import { createSlice } from '@reduxjs/toolkit';
import { TSignInResponse } from '../../../../userTypes';
import userActions from '../../../actions/user/userActions';

export type TUserState = {
  isLoading: boolean;
  registerData:  TSignInResponse;
  error: string | null;
}

const initialState: TUserState = {
  isLoading: false,
  registerData: {} as TSignInResponse,
  error: null,
}

const registerReducer = createSlice({
  name: 'register',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(userActions.register.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(userActions.register.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.registerData = payload
    })
    builder.addCase(userActions.register.rejected, (state) => {
      state.isLoading = false
      state.registerData = {} as TSignInResponse
      state.error = 'Error'
    })
  }
})

export default registerReducer.reducer;