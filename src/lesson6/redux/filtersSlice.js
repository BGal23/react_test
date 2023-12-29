import { createSlice } from "@reduxjs/toolkit";
import { filterStatus } from "./constants";

const filtersInitialState = { status: filterStatus.all };

const filtersSlice = createSlice({
  name: "filters",
  initialState: filtersInitialState,
  reducers: {
    setFilterStatus(state, action) {
      return {
        ...state,
        status: action.payload,
      };
    },
  },
});

export const filtersReducer = filtersSlice.reducer;
export const { setFilterStatus } = filtersSlice.actions;
