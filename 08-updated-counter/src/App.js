import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="main">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleReset() {
    setCount(0);
    setStep(1);
  }

  function incCnt() {
    setCount((c) => c+step);
  }

  function decCnt() {
    setCount((c) => c+step);
  }

  function incStep() {
    setStep((s) => s+1);
  }

  function decStep() {
    setStep((s) => s-1);
  }

  return (
    <div>
      <div>
        <input type="range" min={0} max={10} value={step} onChange={(e) => setStep(Number(e.target.value))} />
        <span>Step: {step}</span>
      </div>

      <div>
          <button className="decrease" onClick={decCnt}>
            -
          </button>
          <input type="text" style={{ textAlign: "left" }} value={count} onChange={(e) => setCount(Number(e.target.value))} ></input>
          <button className="increase" onClick={incCnt}>
            +
          </button>
      </div>
      {count === 0 && <div>Today is {date.toDateString()}. </div>}
      {count > 0 && (
        <div>
          {" "}
          {count} days from today is {date.toDateString()}.{" "}
        </div>
      )}
      {count < 0 && (
        <div>
          {" "}
          {Math.abs(count)} days ago was {date.toDateString()}.{" "}
        </div>
      )}

      {count !== 0 || step !== 1 ? <button className="reset" onClick={handleReset}>
        Reset
      </button> : null}
    </div>
  );
}

export default App;
