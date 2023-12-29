import Layout from "./components/Layout.jsx";
import AppBar from "./components/AppBar.jsx";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchTask } from "./redux/operations.js";
import { useEffect } from "react";
import { getError, getIsLoading } from "./redux/selectors.js";

const App_6 = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchTask());
  }, [dispatch]);

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <TaskList />
    </Layout>
  );
};

export default App_6;
