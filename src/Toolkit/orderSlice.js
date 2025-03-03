import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../API/axiosInstance";
import { end_points } from "../API/api";
const initialValue = {
  allOrderList: [],
  singleOrder: [],
  isLoading: true,
  error: null,
  isOrderComplete: false,
};
let api_url = end_points.order;
export const orderPlace = createAsyncThunk("orderPlace", async (data) => {
  const orderDate = new Date().toLocaleString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
  const res = await axiosInstance.post(api_url, {
    orderDate,
    orderId: Date.now(),
    userToken: localStorage.getItem("bookAddaToken"),
    orderDetails: { ...data },
    books: JSON.parse(localStorage.getItem("bookAddaCart")),
  });
  return res.data;
});

export const getAllOrderList = createAsyncThunk("getAllOrderList", async () => {
  let token = localStorage.getItem("bookAddaToken") || null;
  const res = await axiosInstance.get(`${api_url}?userToken=${token}`);
  return res.data;
});

export const getSingleOrder = createAsyncThunk(
  "getSingleOrder",
  async (orderId) => {
    let token = localStorage.getItem("bookAddaToken") || null;
    const res = await axiosInstance.get(
      `${api_url}?userToken=${token}&orderId=${orderId}`
    );
    return res.data[0];
  }
);
const orderSlice = createSlice({
  name: "order",
  initialState: initialValue,
  reducers: {
    processOrder: (state) => {
      state.isOrderComplete = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(orderPlace.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
      state.isOrderComplete = false;
    });
    builder.addCase(orderPlace.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isOrderComplete = true;
    });
    builder.addCase(orderPlace.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "Something want wrong";
    });
    builder.addCase(getAllOrderList.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getAllOrderList.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isOrderComplete = true;
      state.allOrderList = action.payload;
    });
    builder.addCase(getAllOrderList.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "Something want wrong";
    });
    builder.addCase(getSingleOrder.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getSingleOrder.fulfilled, (state, action) => {
      state.isLoading = false;
      state.singleOrder = action.payload;
    });
    builder.addCase(getSingleOrder.rejected, (state, action) => {
      state.isLoading = false;
      state.error = "Something want wrong";
    });
  },
});
export const { processOrder } = orderSlice.actions;

export default orderSlice.reducer;
