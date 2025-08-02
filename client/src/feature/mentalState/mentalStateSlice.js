import { createSlice } from "@reduxjs/toolkit";

const intialState = {
  mentalState: null,
  loading: false,
  error: null,
};

const mentalStateSlice = createSlice({
  name: "mentalState",
  initialState: intialState,
  reducers: {
    setMentalState: (state, action) => {
      state.mentalState = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export default mentalStateSlice.reducer;

export const { setMentalState, setLoading, setError } = mentalStateSlice.actions;