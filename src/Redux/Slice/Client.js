import { createSlice } from "@reduxjs/toolkit";
const message = createSlice({
  name: "messages",
  initialState: {
    message: [{
      author:'',
      text:''
    }],
    tags:'',
    bookmark:''
  
  },
  reducers: {
    setmessage: (state, action) => {
      state.message = action.payload;
      // console.log("payload", action.payload);
    },
    tagMessage:(state,action)=>{
        state.tags = action.payload;
    },
    bookmarkMessage:(state,action)=>{
        state.bookmark = [...state.bookmark,action.payload];
    }
  },
});
export default message.reducer;
export const { setmessage,tagMessage,bookmarkMessage } = message.actions;
