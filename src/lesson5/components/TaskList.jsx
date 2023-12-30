import Task from "./Task.jsx";
import { selectVisibleTasks } from "../redux/selectors.js";
import { useSelector } from "react-redux";

const TaskList = () => {
  const tasks = useSelector(selectVisibleTasks);

  return (
    <ul>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
