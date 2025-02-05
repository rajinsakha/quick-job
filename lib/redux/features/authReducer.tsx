/* eslint-disable @typescript-eslint/no-explicit-any */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type HomeState = {
  token: string;
  selectedUser: any;
  isPopoverClicked: boolean;
  email: string;
  profileDetails: any;
  refetch: boolean;
  isLoggedIn:boolean;
};

const initialState = {
  token: "",
  selectedUser: {} as any,
  isPopoverClicked: false,
  email: "",
  profileDetails: {} as any,
  refetch: false,
  isLoggedIn: false,
} as HomeState;

export const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
    setSelectedUser: (state, action: PayloadAction<any>) => {
      state.selectedUser = action.payload;
    },
    setIsPopoverClicked: (state, action: PayloadAction<boolean>) => {
      state.isPopoverClicked = action.payload;
    },
    setEmail: (state, action) => {
      state.email = action.payload;
    },
    setProfileDetails: (state, action) => {
      state.profileDetails = action.payload;
    },
    toggleRefetch: (state) => {
      state.refetch = !state.refetch;
    },
    setIsLoggedIn: (state, action)=>{
      state.isLoggedIn = action.payload
    }
  },
});

export const { setToken, setSelectedUser, setIsPopoverClicked, setEmail , setProfileDetails, toggleRefetch, setIsLoggedIn} =
  auth.actions;
export default auth.reducer;
