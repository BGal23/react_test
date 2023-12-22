import Layout from "./components/Layout.jsx";
import AppBar from "./components/AppBar.jsx";
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

const App_5 = () => {
  return (
    <Provider store={store}>
      <Layout>
        <AppBar />
        <TaskForm />
        <TaskList />
      </Layout>
    </Provider>
  );
};

export default App_5;
