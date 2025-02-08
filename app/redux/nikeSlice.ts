import { Iproducts } from "@/lib/types";
import { createSlice } from "@reduxjs/toolkit";

interface UserInfo {
  id: string;
  name: string;
  email: string;
}

interface InitialState {
  cart: Iproducts[];
  wishList: Iproducts[];
  userInfo: UserInfo | null;
}

const initialState: InitialState = {
  cart: [],
  wishList: [],
  userInfo: null,
};

export const nikeSlice = createSlice({
  name: "nike",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart.push(action.payload);
      }
    },
    increaseQuantity: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      }
    },
     decreaseQuantity: (state, action) => {
      const existingProduct = state.cart.find(
        (item) => item._id === action.payload._id
      );
      if (existingProduct && existingProduct.quantity > 1) {
        existingProduct.quantity -= 1;
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item._id !== action.payload);
    },
    resetCart: (state) => {
      state.cart = [];
    },
    addToWishList: (state, action) => {
      const existingProduct = state.wishList.find(
        (item) => item._id === action.payload._id
      );

      state.cart.push(action.payload);
    },
    resetWishList: (state) => {
      state.wishList = [];
    },
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    removeUser: (state) => {
      state.userInfo = null;
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  resetCart,
  addToWishList,
  resetWishList,
  addUser,
  removeUser,
} = nikeSlice.actions;
export default nikeSlice.reducer;
