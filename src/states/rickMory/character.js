import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../services/axios";

// Slice
const slice = createSlice({
  name: "RickMory",
  initialState: {
    list: [],
    isLoading: false,
    search: "",
    availableProducts: [],
    selectedProducts: [],
  },
  reducers: {
    setRickMory: (state, action) => {
      state.list.push(action.payload);
    },

    addProduct: (state, action) => {
      state.selectedProducts.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.selectedProducts = state.selectedProducts.filter(
        (product) => product.id !== action.payload.id
      );
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
});
// THUNK
export function fetchTodos() {
  return async (dispatch, getState, api) => {
    let result = [];
    for (let i = 1; i <= 42; i++) {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character?page=${i}`
      );
      const responsejson = await response.json();
      await responsejson.results.forEach((item) => result.push(item));
    }
    dispatch(setRickMory(result));
  };
}

// SELECTORS
export const listSelector = (state) => state.RickMory.list;

export const isLoadingSelector = (state) => state.cart.isLoading;
export const availableProductsSelector = (state) =>
  state.cart.availableProducts;
export const selectedProductsSelector = (state) => state.cart.selectedProducts;
export const searchSelector = (state) => state.cart.search;
// ACTIONS

export const fetchAvailableProducts = () => ({
  type: "cart/fetchAvailableProducts",
});
export const {
  addProduct,
  removeProduct,
  setRickMory,
  setIsLoading,
  setSearch,
} = slice.actions;

// REDUCER
export default slice.reducer;
