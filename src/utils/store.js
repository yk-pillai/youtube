import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import cacheSlice from "./cacheSlice";
import chatSlice from "./chatSlice";
import buttonTagSlice from "./buttonTagSlice";
const store = configureStore({
  reducer: {
    app: appSlice,
    cache: cacheSlice,
    chat: chatSlice,
    tag: buttonTagSlice,
  },
});

export default store;
