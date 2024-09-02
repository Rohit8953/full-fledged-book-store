import { createSlice } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

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
        toast.success("Product added in wishlist")
      }
    },

    Setaddtocart:(state,action) => {
      const itemExists = state.addtocartArray.find(
        (item) => item.id === action.payload.id
      );

      if (!itemExists) {
        state.addtocartArray.push(action.payload);
        toast.success("Product added in cart");
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
      toast.success("Product deleted from wishlist");
    },
    
    addproductDetails:(state,action)=>{
        state.productdetails=action.payload
    },
    increaseCount:(state,action)=>{
        state.addtocartArray[action.payload].productcount=state.addtocartArray[action.payload].productcount+1;
    },
    decreaseCount:(state,action)=>{
      if (state.addtocartArray[action.payload].productcount>1) {
        state.addtocartArray[action.payload].productcount=state.addtocartArray[action.payload].productcount-1;
      }
    }
  },
});

export const { Setaddtocart,increaseCount ,decreaseCount ,addproductDetails,Setlikecart,deletefromcart,deletefromlike} = productsSlice.actions;
export default productsSlice.reducer;
