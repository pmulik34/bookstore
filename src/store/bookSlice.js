import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const STATUSES = Object.freeze({
  IDLE: 'idle',
  ERROR: 'error',
  LOADING: 'loading',
});

export const fetchBooks = createAsyncThunk('books/fetch', async () => {
  const res = await fetch('https://example-data.draftbit.com/books');
  const data = await res.json();
  // console.log("Data:", data);
  return data;
})


const bookSlice = createSlice({
  name: 'book',
  initialState: {
    data: [],
    status: STATUSES.IDLE,
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = STATUSES.LOADING
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = STATUSES.IDLE;
      })
      .addCase(fetchBooks.rejected, (state) => {
        state.status = STATUSES.ERROR;
      })
  }
})

export const { setBooks, setStatus } = bookSlice.actions;
export default bookSlice.reducer;