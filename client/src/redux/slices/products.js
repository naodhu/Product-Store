import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  error: null,
  products: [],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = true;
    },
    setProducts: (state, { payload }) => {
      state.products = payload;
      state.loading = false;
      state.error = null;
    },
    setError: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
  },
});

export const { setLoading, setProducts, setError } = productsSlice.actions;
export default productsSlice.reducer;

export const productsSelector = (state) => state.products;
