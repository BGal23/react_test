import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const tasksInitialState = [
  {
    id: nanoid(),
    text: "cat",
    completed: true,
  },
  {
    id: nanoid(),
    text: "dog",
    completed: true,
  },
  {
    id: nanoid(),
    text: "bird",
    completed: false,
  },
  {
    id: nanoid(),
    text: "frog",
    completed: false,
  },
  {
    id: nanoid(),
    text: "horse",
    completed: true,
  },
];

const tasksSlice = createSlice({
  name: "tasks",
  initialState: tasksInitialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(text) {
        return {
          payload: {
            text,
            id: nanoid(),
            completed: false,
          },
        };
      },
    },
    removeTask(state, action) {
      return state.filter((task) => task.id !== action.payload);
    },
    setTaskCompleted(state, action) {
      const element = state.find((task) => task.id === action.payload);
      element.completed = !element.completed;
    },
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { addTask, removeTask, setTaskCompleted } = tasksSlice.actions;
