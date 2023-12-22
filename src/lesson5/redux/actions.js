// import { createAction } from "@reduxjs/toolkit";

// export const addTask = createAction("tasks/addTask");

// export const deleteTask = createAction("tasks/deleteTask");

// export const toggleCompleted = createAction("tasks/toggleCompleted");

// export const setStatusFilter = createAction("filters/setStatusFilter");

export const removeTask = (id) => {
  return {
    type: "tasks/remove",
    payload: id,
  };
};

export const addTask = (task) => {
  return {
    type: "tasks/add",
    payload: {
      id: task.id,
      text: task.text,
      competed: task.completed,
    },
  };
};

export const setTackCompleted = (isChecked) => {
  return {
    type: "tasks/setTaskCompleted",
    payload: isChecked,
  };
};

export const setFilterStatus = (newFilterStatus) => {
  return {
    type: "filters/set",
    payload: newFilterStatus,
  };
};
