import { createSlice } from '@reduxjs/toolkit';


const productsSlice = createSlice({
  name: 'product',
  initialState: {
    addtocartArray:[],
    likecartArray:[],
    productdetails:{}
  },
  
  reducers:{
    Setlikecart: (state, action) => {
      if (!state.likecartArray) {
        state.likecartArray = [];
      }
      const itemExist = state.likecartArray.find(
        (item) => item.id === action.payload.id
      );
      if (!itemExist) {
        state.likecartArray.push(action.payload);
      }
    },

    Setaddtocart:(state,action) => {
      const itemExists = state.addtocartArray.find(
        (item) => item.id === action.payload.id
      );

      if (!itemExists) {
        state.addtocartArray.push(action.payload);
      }
    },

    deletefromcart:(state,action)=>{
      state.addtocartArray = state.addtocartArray.filter(
        (item) => item.id !== action.payload.id
      );
    },

    
    deletefromlike:(state,action)=>{
      state.likecartArray = state.likecartArray.filter(
        (item) => item.id !== action.payload.id
      );
    },
    
    addproductDetails:(state,action)=>{
        state.productdetails=action.payload
    }
  },
});

export const { Setaddtocart ,addproductDetails,Setlikecart,deletefromcart,deletefromlike} = productsSlice.actions;
export default productsSlice.reducer;
