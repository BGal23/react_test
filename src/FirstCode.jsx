import { useState } from "react";
import first from "./first.module.css";

const FirstCode = () => {
  const [counter, setCounter] = useState(0);
  const [step, setStep] = useState(1);

  return (
    <>
      <div className={first.main}>
        <div>
          <button
            type="button"
            onClick={() => setCounter((prev) => prev - step)}
          >
            -{step}
          </button>
          <span>{counter}</span>
          <button
            type="button"
            onClick={() => setCounter((prev) => prev + step)}
          >
            +{step}
          </button>
        </div>
        <input
          type="number"
          min={0}
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </div>
    </>
  );
};

export default FirstCode;
