import { createAsyncThunk, createAction } from "@reduxjs/toolkit";
import userService from "../../../services/user";
import { signInFilter } from "../../../userTypes";
import { TRegisterParams } from "../../reducers/users/register/types";

const userActions = {
  signIn: createAsyncThunk('/user/signIn', async (credentials: signInFilter) => {
    return userService.signIn(credentials)
  }),

  logout: createAction("user/logout"),

  register: createAsyncThunk('/user/register', async (credentials: TRegisterParams) => {
    return userService.register(credentials)
  }),
}

export default userActions;
