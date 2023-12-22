// import { statusFilters } from "./constants";

// const tasksInitialState = [];

// export const tasksReducer = (state = tasksInitialState, action) => {
//   // Reducer code
// };

// const filtersInitialState = {
//   status: statusFilters.all,
// };

// export const filtersReducer = (state = filtersInitialState, action) => {
//   // Reducer code
// };

import { filterStatus } from "./constants";

const initialState = {
  task: [
    {
      id: 1,
      text: "cat",
      completed: true,
    },
    {
      id: 2,
      text: "dog",
      completed: true,
    },
    {
      id: 3,
      text: "bird",
      completed: false,
    },
    {
      id: 4,
      text: "frog",
      completed: false,
    },
    {
      id: 5,
      text: "horse",
      completed: true,
    },
  ],
  filters: { status: filterStatus.all },
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "filters/set":
      return {
        ...state,
        filters: {
          status: action.payload,
        },
      };
    case "tasks/remove":
      //payload.id
      return {
        ...state,
        task: state.task.filter((task) => task.id !== action.payload),
      };
  }
  return state;
};
