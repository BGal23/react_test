import { useSelector } from "react-redux";
import { filterStatus } from "../redux/constants";
import Task from "./Task.jsx";
import { getTasks, getFilterStatus } from "../redux/selectors.js";

const filterTask = (tasks, currStatusFilter) => {
  switch (currStatusFilter) {
    case filterStatus.all:
      return tasks;
    case filterStatus.active:
      return tasks.filter((task) => !task.completed);
    case filterStatus.completed:
      return tasks.filter((task) => task.completed);
    default:
      new Error("filter not found");
  }
};

const TaskList = () => {
  const tasks = useSelector(getTasks);
  const currStatusFilter = useSelector(getFilterStatus);
  const filteredTask = filterTask(tasks, currStatusFilter);

  return (
    <ul>
      {filteredTask.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
