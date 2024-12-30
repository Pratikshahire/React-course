import { useState } from "react";

function App() {
  return (
    <TipCalculator />
  );
}

function TipCalculator()
{

  const [bill, setBill] = useState("");
  const [per1, setPer1] = useState(0);
  const [per2, setPer2] = useState(0);

  const tip = bill * ((per1 + per2) / 2 / 100);

  function handleReset() {
    setBill('');
    setPer1(0);
    setPer2(0);
  }

    return <div>
      <BillInput bill={bill} onSetBill={setBill}/>
      <Percentage per={per1} onSelect={setPer1} >How did you like the service?</Percentage>
      <Percentage per={per2} onSelect={setPer2}>How did your friend like the service? </Percentage>
      {bill > 0 && <>
        <Total bill={bill} tip={tip}/>
        <Reset onReset={handleReset}/>
      </>}
    </div>
}

function BillInput({bill, onSetBill}) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input type="text" value={bill} placeholder="bill value" onChange={(e) => onSetBill(Number(e.target.value))}></input>
    </div>
  );
}

function Percentage({ children, per, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select value={per} onChange={(e) => onSelect(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Total({bill, tip}) {
  return (
    <div>You pay ${bill + tip}(${bill} + ${tip} tip)</div>
  )
}

function Reset({onReset}) {

  return (
    <button onClick={onReset}>Reset</button>
  )
}

export default App;
