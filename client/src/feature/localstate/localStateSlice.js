import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSideBarCollapsed: false,
  screenView: "desktop",
  // product search filter state
};

const localStateSlice = createSlice({
  name: "localState",
  initialState,
  reducers: {
    setIsSideBarCollapsed: (state, action) => {
      state.isSideBarCollapsed = action.payload;
    },
    setScreenView: (state, action) => {
      state.screenView = action.payload;
    },
  },
});

export const { setIsSideBarCollapsed, setScreenView } = localStateSlice.actions;

export default localStateSlice.reducer;
