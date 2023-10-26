import { createSlice } from "@reduxjs/toolkit";

const cacheSlice = createSlice({
  name: caches,
  initialState: {},
  reducers : {
    storeCache: (state, action) => {
      return Object.assign(state, action.payload)
    },
    resetCache: () => {
      return {};
    }
  }
})

export default cacheSlice.reducer;
export const { storeCache, resetCache } = cacheSlice.actions;
