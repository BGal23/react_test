import { createSlice } from "@reduxjs/toolkit";
//import { nanoid } from "nanoid";
import { fetchTask, addTask, deleteTask, toggleCompleted } from "./operations";

// const tasksInitialState = [
//   {
//     id: nanoid(),
//     text: "cat",
//     completed: true,
//   },
//   {
//     id: nanoid(),
//     text: "dog",
//     completed: true,
//   },
//   {
//     id: nanoid(),
//     text: "bird",
//     completed: false,
//   },
//   {
//     id: nanoid(),
//     text: "frog",
//     completed: false,
//   },
//   {
//     id: nanoid(),
//     text: "horse",
//     completed: true,
//   },
// ];

const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTask.pending, handlePending)
      .addCase(fetchTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchTask.rejected, handleRejected)

      .addCase(addTask.pending, handlePending)
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(addTask.rejected, handleRejected)

      .addCase(deleteTask.pending, handlePending)
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (task) => task.id === action.payload.id
        );
        state.items.slice(index, 1);
      })
      .addCase(deleteTask.rejected, handleRejected)

      .addCase(toggleCompleted.pending, handlePending)
      .addCase(toggleCompleted.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          (task) => task.id === action.payload.id
        );
        state.items[index].completed = !state.items[index].completed;
      })
      .addCase(toggleCompleted.rejected, handleRejected);
  },
});

export const tasksReducer = tasksSlice.reducer;
