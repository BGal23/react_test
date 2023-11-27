import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import name from "./name.module.css";

const Name = () => {
  const names = ["Kevin", "Mango", "Polly"];

  const table = names.map((name) => <li key={uuidv4()}>{name}</li>);

  const [toggle, setToggle] = useState(true);

  const toggleNames = () => setToggle(!toggle);

  return (
    <div className={name.main}>
      <h3>Names Table:</h3>
      <button type="button" onClick={toggleNames}>
        Toggle Names!
      </button>
      <div>{toggle ? <ul>{table}</ul> : "Table is empty!"}</div>
    </div>
  );
};

export default Name;
