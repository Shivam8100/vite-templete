import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "./axios";
import { OauthService_URL } from "@redux/urls";

export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async (payload, thunkAPI) => {
    let url = `${OauthService_URL}/customlogin?loginId=${payload.loginId}&password=null`;
    try {
      const res = await api.post(url, payload);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
