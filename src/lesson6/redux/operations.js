import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://dog.ceo/api/breeds";

export const fetchTask = createAsyncThunk(
  "tasks/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get("/list");
      return response.data.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  "tasks/addTask",
  async (text, thunkAPI) => {
    try {
      const response = axios.post("/list", text);
      return response.data.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  "tasks/deleteTask",
  async (taskID, thunkAPI) => {
    try {
      const response = axios.delete(`/list${taskID}`);
      return response.data.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleCompleted = createAsyncThunk(
  "tasks/toggleCompleted",
  async (taskID, thunkAPI) => {
    try {
      const response = axios.put(`/list${taskID}`);
      return response.data.message;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
