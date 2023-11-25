import { useState } from "react";

const Name = () => {
  const names = ["Kevin", "Mango", "Polly"];

  const table = names.map((name) => <li key="1">{name}</li>);

  const [toggle, setToggle] = useState(true);

  return (
    <>
      <h3>Names Table:</h3>
      <button type="button" onClick={() => setToggle(!toggle)}>
        Toggle Names!
      </button>
      <div>{toggle ? <ul>{table}</ul> : "Table is empty!"}</div>
    </>
  );
};

export default Name;
