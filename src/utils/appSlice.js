import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isHamMenuOpen: true
  },
  reducers: {
    toggleHamMenu : (state) => {
      state.isHamMenuOpen = !state.isHamMenuOpen
    },
    closeHamMenu : (state) => {
      state.isHamMenuOpen = false;
    }
  }
})
export default appSlice.reducer;
export const {toggleHamMenu, closeHamMenu} = appSlice.actions;
