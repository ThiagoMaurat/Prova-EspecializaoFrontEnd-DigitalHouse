import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

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
      state.favoriteCharacters = state.favoriteCharacters.filter(
        (item) => item !== action.payload
      );
    },
    removeCharacterFromList: (state, action) => {
      state.list = state.list.filter((item) => item.id !== action.payload.id);
    },
    setFavoriteCharacters(state, action) {
      state.favoriteCharacters.push(action.payload);
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
    builder.addCase(fetchRickSearch.fulfilled, (state, action) => {
      return { ...state, list: action.payload };
    });
  },
});
// THUNK
export const fetchRick = createAsyncThunk("Rick/fetch", async () => {
  let result = [];
  let url = "https://rickandmortyapi.com/api/character";
  const response = await fetch(url);
  const responsejson = await response.json();
  await responsejson.results.forEach((item) => result.push(item));
  return result;
  /* for (let i = 1; i <= 42; i++) {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${i}`
    );
    const responsejson = await response.json();
    await responsejson.results.forEach((item) => result.push(item));
  } */
});

export const fetchRickSearch = createAsyncThunk(
  "Rick/fetchsearch",
  async (search) => {
    let result = [];
    let url = "https://rickandmortyapi.com/api/character";
    if (search) {
      url = `${url}?name=${search}`;
    }
    const response = await fetch(url);
    const responsejson = await response.json();
    await responsejson.results.forEach((item) => result.push(item));
    return result;
  }
);

// SELECTORS
export const listSelector = (state) => state.RickMory.list;
export const favoriteCharacter = (state) => state.RickMory.availableCharacters;
export const searchSelector = (state) => state.RickMory.search;
export const setSelectedFavoriteCharacter = (state) =>
  state.RickMory.favoriteCharacters;
export const favoriteCharactersSelector = (state) =>
  state.RickMory.favoriteCharacters;

export const isLoadingSelector = (state) => state.cart.isLoading;

// ACTIONS

export const {
  addProduct,
  removeProduct,
  setRickMory,
  setIsLoading,
  setSearch,
  setFavoriteCharacters,
  removeCharacterFromList,
} = slice.actions;

// REDUCER
export default slice.reducer;
