import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../API/axiosInstance";
import { end_points } from "../API/api";

let api_url = end_points.books;

const initialValue = {
  searchableBooks: [],
  books: [],
  singleBook: {},
  isLoading: false,
  error: null,
};

export const getAllBooks = createAsyncThunk(
  "allBooks",
  async ({ filterType, filterValue }, { rejectWithValue }) => {
    try {
      console.log("Fetching Books with Filter:", filterType, filterValue);

      const queryParam =
        (filterType === "category" || filterType === "author") && filterValue
          ? `${filterType}=${encodeURIComponent(
              filterValue.replaceAll("-", " ")
            )}`
          : "";

      const res = await axiosInstance.get(
        `${api_url}${queryParam ? `?${queryParam}` : ""}`
      );
      if (filterType === "search") {
        const searchText = filterValue.replaceAll("-", " ").toLowerCase();
        return res.data.filter((book) =>
          book.title.toLowerCase().includes(searchText)
        );
      } else {
        return res.data;
      }

      console.log("API Response:", res);
    } catch (error) {
      console.error("API Error:", error);
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);
export const getSearchDropdownBooks = createAsyncThunk(
  "getSearchDropdownBooks",
  async () => {
    try {
      const res = await axiosInstance.get(`${api_url}`);
      return res.data;
    } catch (error) {
      console.error("API Error:", error);
      // return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);

export const getSingleBook = createAsyncThunk(
  "getSingleBook",
  async (bookName) => {
    let title = encodeURIComponent(bookName.replaceAll("-", " "));
    const res = await axiosInstance.get(`${api_url}?title=${title}`);
    return res.data;
  }
);
const bookSlice = createSlice({
  name: "books",
  initialState: initialValue,
  extraReducers: (builder) => {
    builder.addCase(getAllBooks.pending, (state) => {
      state.isLoading = true;
      state.error = null; // Reset error before a new request
    });
    builder.addCase(getAllBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.books = action.payload;
    });
    builder.addCase(getAllBooks.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getSingleBook.pending, (state) => {
      state.isLoading = true;
      state.error = null; // Reset error before a new request
    });
    builder.addCase(getSingleBook.fulfilled, (state, action) => {
      state.isLoading = false;
      state.singleBook = action.payload;
    });
    builder.addCase(getSingleBook.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
    builder.addCase(getSearchDropdownBooks.fulfilled, (state, action) => {
      state.isLoading = false;
      state.searchableBooks = action.payload;
    });
  },
});

export default bookSlice.reducer;
