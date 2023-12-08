import { useState } from "react";

export const UseStateComponent = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");

  return (
    <>
      <input
        type="text"
        placeholder="Your Name"
        onChange={(event) => setName(event.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Your Surname"
        onChange={(event) => setSurname(event.target.value)}
      />
      <br />
      <div>
        Welcome {name} {surname}
      </div>
    </>
  );
};
