import { createSlice, configureStore } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'userdetails',
  initialState: {
    userDetail:[],
    popup:false
  },
  reducers: {
    getUserDetails:(state,actions)=>{
        
    },
    Setpopup:(state)=>{
          state.popup=!state.popup;
    }
  }
})

export const { getUserDetails,Setpopup} = userSlice.actions;
export default userSlice.reducer;
