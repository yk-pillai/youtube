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
      // console.log(state.buttons);
      Object.assign(state.buttons, action.payload);
      // console.log(state.buttons);
    },
    setClickedButton: (state, action) => {
      state.clickedButton = action.payload;
      console.log(state.clickedButton);
    },
    pushPageToken: (state, action) => {
      state.pageToken = action.payload;
    },
    mergeVideos: (state, action) => {
      // state.buttons.All = [];
      const arr = state.buttons.All;
      const a = arr.concat(action.payload)
      state.buttons.All = a;
      // console.log(a);
      // console.log(action.payload);
      // arr = arr.concat(action.payload);
      // state.buttons.all = arr;
    }
  },
});


export default buttonTagSlice.reducer;
export const {pushTags, setClickedButton, pushPageToken, mergeVideos} = buttonTagSlice.actions;
