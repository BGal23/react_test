import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { nanoid } from "nanoid";
import { deleteTask, toggleCompleted } from "../redux/operations";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const remove = () => dispatch(deleteTask(task.id));
  const handleToggle = () => dispatch(toggleCompleted(task));

  return (
    <li key={nanoid()}>
      <input type="checkbox" checked={task.completed} onChange={handleToggle} />
      <span> {task} </span>
      <button onClick={remove}>X</button>
    </li>
  );
};

export default Task;

Task.propTypes = {
  task: PropTypes.string,
};
