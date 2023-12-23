import { createAction } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export const addTask = createAction("tasks/add", (text) => {
  return {
    payload: {
      id: nanoid(),
      text,
      completed: false,
    },
  };
});

export const removeTask = createAction("tasks/remove");

export const setTaskCompleted = createAction("tasks/setTaskCompleted");

export const setFilterStatus = createAction("filters/setFilterStatus");

// export const removeTask = (id) => {
//   return {
//     type: "tasks/remove",
//     payload: id,
//   };
// };

// export const addTask = (text) => {
//   return {
//     type: "tasks/add",
//     payload: {
//       id: nanoid(),
//       text,
//       completed: false,
//     },
//   };
// };

// export const setTaskCompleted = (isChecked) => {
//   return {
//     type: "tasks/setTaskCompleted",
//     payload: isChecked,
//   };
// };

// export const setFilterStatus = (newFilterStatus) => {
//   return {
//     type: "filters/setFilterStatus",
//     payload: newFilterStatus,
//   };
// };
