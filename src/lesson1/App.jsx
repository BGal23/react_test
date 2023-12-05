import FirstCode from "./first/FirstCode.jsx";
import Name from "./name/NameCode.jsx";
import Form from "./form/FormCode.jsx";
import { Function1 } from "./example/Example";
import { Function2 } from "./example/Example";
import { Class1 } from "./example/Example";
import { Class2 } from "./example/Example2";

const App = () => {
  return (
    <>
      <Function2 name="2">
        <Function1 name="1" />
      </Function2>
      <Class1 name="3" value={11} />
      <Class2 step={1} />
      <FirstCode />
      <Name />
      <Form onSubmit={() => {}} />
    </>
  );
};

export default App;
