import { useDispatch } from "react-redux";
import { removeTask, setTaskCompleted } from "../redux/tasksSlice";
import PropTypes from "prop-types";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const remove = () => dispatch(removeTask(task.id));
  const handleToggle = () => dispatch(setTaskCompleted(task.id));

  return (
    <li>
      <input type="checkbox" checked={task.completed} onChange={handleToggle} />
      <span> {task.text} </span>
      <button onClick={remove}>X</button>
    </li>
  );
};

export default Task;

Task.propTypes = {
  task: PropTypes.object,
};
