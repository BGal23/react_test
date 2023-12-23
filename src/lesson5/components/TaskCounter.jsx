import { useSelector } from "react-redux";
import { getTasks } from "../redux/selectors";

const TaskCounter = () => {
  const tasks = useSelector(getTasks);

  let number = 0;
  console.log(tasks);
  tasks.map((task) => {
    if (task.completed === true) {
      number = number + 1;
    }
  });

  return (
    <div>
      <h4>Task: {tasks.length}</h4>
      <p>Active: {tasks.length - number}</p>
      <p>Completed: {number}</p>
    </div>
  );
};

export default TaskCounter;
