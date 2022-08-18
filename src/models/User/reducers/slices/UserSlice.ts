import {createSlice} from "@reduxjs/toolkit";
import {UserState} from "../types";



const initialState: UserState = {
  users: [],
  isLoading: false,
  error: ''
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  }
});

export default userSlice;