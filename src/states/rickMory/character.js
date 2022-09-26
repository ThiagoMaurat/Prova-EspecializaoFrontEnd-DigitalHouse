import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../services/axios";

// Slice
const slice = createSlice({
  name: "RickMory",
  initialState: {
    isLoading: false,
    list: [],
    isFavorito: false,
    favoriteCharacters: [],
    selectedCharacters: [],
    search: "",
  },
  reducers: {
    setRickMory: (state, action) => {
      state.list.push(action.payload);
    },
    isFavorito: (state, action) => {
      state.isFavorito = action.payload;
    },
    removeCharacters: (state, action) => {
      state.selectedCharacters = state.selectedCharacters.filter(
        (item) => item !== action.payload
      );
    },
    setFavoriteCharacters(state, action) {
      state.favoriteCharacters = action.payload;
    },

    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRick.fulfilled, (state, action) => {
      return { ...state, list: action.payload };
    });
  },
});
// THUNK
export const fetchRick = createAsyncThunk("Rick/fetch", async () => {
  let result = [];
  for (let i = 1; i <= 42; i++) {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${i}`
    );
    const responsejson = await response.json();
    await responsejson.results.forEach((item) => result.push(item));
  }
  return result;
});

// SELECTORS
export const listSelector = (state) => state.RickMory.list;
export const favoriteCharacter = (state) => state.RickMory.availableCharacters;
export const setSelectedFavoriteCharacter = (state) =>
  state.RickMory.setSelectedFavoriteCharacter;
export const isFavoritoSelector = (state) => state.cart.isFavorito;
export const favoriteCharactersSelector = (state) =>
  state.cart.favoriteCharacters;

export const isLoadingSelector = (state) => state.cart.isLoading;

// ACTIONS

export const fetchAvailableProducts = () => ({
  type: "cart/fetchAvailableProducts",
});
export const addCharacters = (character) => ({
  type: "cart/addCharacters",
  payload: character,
});
export const removeCharacters = (id) => ({
  type: "cart/removeCharacters",
  payload: id,
});
export const getFavCharacter = () => ({ type: "cart/getFavCharacter" });

export const {
  addProduct,
  removeProduct,
  setRickMory,
  setIsLoading,
  setSearch,
} = slice.actions;

// REDUCER
export default slice.reducer;
