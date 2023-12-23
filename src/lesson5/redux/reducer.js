import { nanoid } from "nanoid";
import { filterStatus } from "./constants";
import { combineReducers, createReducer } from "@reduxjs/toolkit";
import {
  addTask,
  removeTask,
  setTaskCompleted,
  setFilterStatus,
} from "./actions";

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

const tasksReducer = createReducer(tasksInitialState, (builder) => {
  builder.addCase(addTask.type, (state, action) => {
    return [...state, action.payload];
  });
  builder.addCase(removeTask.type, (state, action) => {
    return state.filter((task) => task.id !== action.payload);
  });
  builder.addCase(setTaskCompleted.type, (state, action) => {
    return state.map((task) => {
      if (task.id !== action.payload) {
        return task;
      }
      return { ...task, completed: !task.completed };
    });
  });
});

const filtersInitialState = { status: filterStatus.all };

const filtersReducer = createReducer(filtersInitialState, (builder) => {
  builder.addCase(setFilterStatus.type, (state, action) => {
    return {
      ...state,
      status: action.payload,
    };
  });
});

export const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});

// const initialState = {
//   task: [
//     {
//       id: nanoid(),
//       text: "cat",
//       completed: true,
//     },
//     {
//       id: nanoid(),
//       text: "dog",
//       completed: true,
//     },
//     {
//       id: nanoid(),
//       text: "bird",
//       completed: false,
//     },
//     {
//       id: nanoid(),
//       text: "frog",
//       completed: false,
//     },
//     {
//       id: nanoid(),
//       text: "horse",
//       completed: true,
//     },
//   ],
//   filters: { status: filterStatus.all },
// };

// export const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "filters/setFilterStatus":
//       return {
//         ...state,
//         filters: {
//           status: action.payload,
//         },
//       };
//     case "tasks/remove":
//       return {
//         ...state,
//         task: state.task.filter((task) => task.id !== action.payload),
//       };
//     case "tasks/add":
//       return {
//         ...state,
//         task: [...state.task, action.payload],
//       };
//     case "tasks/setTaskCompleted":
//       return {
//         ...state,
//         task: state.task.map((task) => {
//           if (task.id !== action.payload) {
//             return task;
//           }
//           return { ...task, completed: !task.completed };
//         }),
//       };
//   }
//   return state;
// };
