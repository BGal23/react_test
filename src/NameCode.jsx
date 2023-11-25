import { useState } from "react";

const Name = () => {
  const names = ["Kevin", "Mango", "Polly"];

  const table = names.map((name) => <li key="1">{name}</li>);

  const [title, setTitle] = useState("Hello Bartek!");

  return (
    <>
      <div>{title}</div>
      <div>{table}</div>
      <button type="button" onClick={() => setTitle("Witaj Bartek")}>
        Turn on Polish
      </button>
    </>
  );
};

export default Name;
