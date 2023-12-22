import { useDispatch } from "react-redux";
import { removeTask } from "../redux/actions";
import PropTypes from "prop-types";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const remove = () => {
    dispatch(removeTask(task.id));
  };
  return (
    <li>
      <input type="checkbox" checked={task.completed} onChange={() => {}} />
      <span>{task.text}</span>
      <button onClick={remove}>X</button>
    </li>
  );
};

export default Task;

Task.propTypes = {
  task: PropTypes.exact({
    id: PropTypes.number,
    text: PropTypes.string,
    completed: PropTypes.bool,
  }),
};
