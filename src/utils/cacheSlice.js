import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
  name: "caches",
  initialState: {
    search:{},
    channel:{}
  },
  reducers : {
    storeCache: (state, action) => {
      Object.assign(state.search, action.payload)
    },
    resetCache: () => {
      return {};
    },
    addChannelData: (state, action) => {
      Object.assign(state.channel, action.payload);
    }
  }
})

export default cacheSlice.reducer;
export const { storeCache, resetCache, addChannelData } = cacheSlice.actions;
