import { createSlice } from "@reduxjs/toolkit";

const buttonTagSlice = createSlice({
  name: "tag",
  initialState: {
    buttons: {},
    clickedButton: "All",
    pageToken: "",
  },
  reducers: {
    pushTags: (state, action) => {
      Object.assign(state.buttons, action.payload);
    },
    setClickedButton: (state, action) => {
      state.clickedButton = action.payload;
    },
    pushPageToken: (state, action) => {
      state.pageToken = action.payload;
    },
    mergeVideos: (state, action) => {
      const arr = state.buttons.All;
      const a = arr.concat(action.payload)
      state.buttons.All = a;
    }
  },
});


export default buttonTagSlice.reducer;
export const {pushTags, setClickedButton, pushPageToken, mergeVideos} = buttonTagSlice.actions;
