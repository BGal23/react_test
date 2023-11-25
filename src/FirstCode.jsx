import { useState } from "react";
import "./App.css";

const FirstCode = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <>
      <input
        type="number"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      />
      <button type="button" onClick={() => setCounter((prev) => prev - step)}>
        -{step}
      </button>
      <span>{counter}</span>
      <button type="button" onClick={() => setCounter((prev) => prev + step)}>
        +{step}
      </button>
    </>
  );
};

export default FirstCode;
