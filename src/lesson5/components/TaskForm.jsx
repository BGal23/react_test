import Button from "./Button.jsx";
import { addTask } from "../redux/actions.js";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";

const TaskForm = () => {
  const dispatch = useDispatch();

  const newTask = (event) => {
    event.preventDefault();
    const from = event.target;
    dispatch(addTask(from.elements.text.value));
    from.reset();
  };

  return (
    <form onSubmit={newTask}>
      <input type="text" name="text" placeholder="Enter task text..." />
      <Button type="submit">Add task</Button>
    </form>
  );
};

export default TaskForm;

TaskForm.propTypes = {
  task: PropTypes.string,
};
