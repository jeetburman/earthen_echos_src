import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import API from 'utils/api';

export const fetchCart = createAsyncThunk(
  'cart/fetchCart',
  async (_, { rejectWithValue }) => {
    try {
      const response = await API.get('/cart');
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch cart');
    }
  }
);

const initialState = {
  items: [],
  total: 0,
  itemCount: 0,
  loading: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
      state.itemCount = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCart.fulfilled, (state, action) => {
        state.items = action.payload.items || [];
        state.total = action.payload.total || 0;
        state.itemCount = action.payload.itemCount || 0;
      });
  },
});

export const { clearCart } = cartSlice.actions;
export default cartSlice.reducer;