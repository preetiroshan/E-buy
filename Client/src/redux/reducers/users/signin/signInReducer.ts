import { createSlice } from '@reduxjs/toolkit';
import { TSignInResponse } from '../../../../userTypes';
import userActions from '../../../actions/user/userActions';
import Cookie from 'js-cookie';

export type TUserState = {
  isLoading: boolean;
  signInData:  TSignInResponse | null;
  error: string | null;
}

// To first check userinfo of signed in user from cookie
const userInfo = Cookie.getJSON("userInfo") || null;

const initialState: TUserState = {
  isLoading: false,
  signInData: userInfo,
  error: null,
}

const signInReducer = createSlice({
  name: 'signIn',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(userActions.signIn.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(userActions.signIn.fulfilled, (state, { payload }) => {
      state.isLoading = false
      state.signInData = payload
      Cookie.set("userInfo", JSON.stringify(state.signInData))
    })
    builder.addCase(userActions.signIn.rejected, (state) => {
      state.isLoading = false
      state.signInData = {} as TSignInResponse
      state.error = 'Error'
    })
    builder.addCase(userActions.logout, (state) => {
      state.signInData = {} as TSignInResponse;
      Cookie.remove("userInfo")
    })
  }
})

export default signInReducer.reducer;