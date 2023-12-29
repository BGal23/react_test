import Button from "./Button.jsx";
import { useDispatch } from "react-redux";
import { addTask } from "../redux/operations.js";

const TaskForm = () => {
  const dispatch = useDispatch();

  const newTask = (event) => {
    event.preventDefault();
    const from = event.target;
    const newTaskName = from.elements.text.value;
    if (newTaskName) {
      dispatch(addTask(newTaskName));
      from.reset();
    } else {
      alert("Sorry, your task must have a name");
    }
  };

  return (
    <form onSubmit={newTask}>
      <input type="text" name="text" placeholder="Enter task text..." />
      <Button type="submit">Add task</Button>
    </form>
  );
};

export default TaskForm;
