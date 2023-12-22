import StatusFilter from "./StatusFilter.jsx";
import TaskCounter from "./TaskCounter.jsx";

const AppBar = () => {
  return (
    <header>
      <TaskCounter />
      <StatusFilter />
    </header>
  );
};

export default AppBar;
