import { createSelector } from "@reduxjs/toolkit";
import { filterStatus } from "./constants";

export const selectTasks = (state) => state.tasks;
export const selectFilterStatus = (state) => state.filters.status;

export const selectVisibleTasks = createSelector(
  [selectTasks, selectFilterStatus],
  (tasks, statusFilter) => {
    switch (statusFilter) {
      case filterStatus.active:
        return tasks.filter((task) => !task.completed);
      case filterStatus.completed:
        return tasks.filter((task) => task.completed);
      default:
        return tasks.slice();
    }
  }
);

export const selectTaskCount = createSelector([selectTasks], (tasks) => {
  let completed = 0;
  let active = 0;
  tasks.map((task) => {
    if (task.completed === true) {
      completed = completed + 1;
    } else {
      active = active + 1;
    }
  });
  return { active, completed };
});
