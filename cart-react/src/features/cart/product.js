import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// إنشاء دالة لجلب المنتجات باستخدام Redux Thunk
export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  }
);

// إنشاء Slice للمنتجات
const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    status: "idle", // حالتها الأولية
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.status = "failed";
      });
  },
});

// تصدير الـ Reducer لاستخدامه في الـ Store
export default productSlice.reducer;
