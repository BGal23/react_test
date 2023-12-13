import { BrowserRouter } from "react-router-dom";
import MyPages from "./pages/MyPages";

const App_4 = () => {
  return (
    <BrowserRouter basename="/react_test">
      <MyPages />
    </BrowserRouter>
  );
};

export default App_4;
