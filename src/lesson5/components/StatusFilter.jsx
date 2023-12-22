import Button from "./Button.jsx";
import { useDispatch, useSelector } from "react-redux";
import { filterStatus } from "../redux/constants.js";
import { setFilterStatus } from "../redux/actions.js";
import { getFilterStatus } from "../redux/selectors.js";

const StatusFilter = () => {
  const status = useSelector(getFilterStatus);
  const dispatch = useDispatch();
  const setSelected = (newFilterStatus) =>
    dispatch(setFilterStatus(newFilterStatus));

  return (
    <div>
      <h4>Filter by status</h4>
      <Button
        onClick={() => setSelected(filterStatus.all)}
        selected={status === filterStatus.all}
      >
        All
      </Button>
      <Button
        onClick={() => setSelected(filterStatus.active)}
        selected={status === filterStatus.active}
      >
        Active
      </Button>
      <Button
        onClick={() => setSelected(filterStatus.completed)}
        selected={status === filterStatus.completed}
      >
        Completed
      </Button>
    </div>
  );
};

export default StatusFilter;
