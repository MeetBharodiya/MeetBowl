import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name : '',
  avatar : ''
};

const activateSlice = createSlice({
  name: "activate",
  initialState,
  reducers: {
    setName: (state, action) => {
      const {name} = action.payload;
      if(name==="")
      {
        state.name = '';
      }
      state.name = action.payload;
    },
    setAvatar: (state, action) => {
      const {avatar} = action.payload;
      if(avatar==="")
            {
              state.avatar = '';
            }
      state.avatar = action.payload;
    },
  },
});

export const { setName, setAvatar } = activateSlice.actions;
export default activateSlice.reducer;
