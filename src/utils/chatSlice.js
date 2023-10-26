import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
  name: "chat",
  initialState:{
    messages: []
  },
  reducers:{
    pushMessage: (state, action)=>{
      state.messages.splice(15)
      state.messages.unshift(action.payload)
    }
  }
})

export default chatSlice.reducer;
export const {pushMessage} = chatSlice.actions;
