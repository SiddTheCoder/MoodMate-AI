import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSideBarCollapsed: false,
  screenView: "desktop",
  isSuggestionBoxOpen: false,
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
    setIsSuggestionBoxOpen: (state, action) => {
      state.isSuggestionBoxOpen = action.payload;
    },
    toggleSuggestionBox: (state) => {
      state.isSuggestionBoxOpen = !state.isSuggestionBoxOpen;
    },
  },
});

export const { setIsSideBarCollapsed, setScreenView, setIsSuggestionBoxOpen, toggleSuggestionBox } = localStateSlice.actions;

export default localStateSlice.reducer;
