import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className='main'>
    <Counter />
    </div>
  );
}

function Counter() {

  const [count, setCount] = useState(0);
  const [step, setStep] = useState(0);
  const date = new Date();
  date.setDate(date.getDate() + count);


  function incCnt() 
  {
    setCount((c) => step === 0 ? c+1 : step + c);
  }

  function decCnt()
  {
    setCount((c) => step === 0 ? c-1 : c + step);
  }

  function incStep() 
  {
    setStep((s) => s+1);
  }

  function decStep()
  {
    setStep((s) => s-1);
  }

  return (
    
    <div>
      <button className='decrease' onClick={decStep}>-</button>
      <span>Step: {step}</span>
      <button className='increase' onClick={incStep}>+</button>

      <br/>

      <button className='decrease' onClick={decCnt}>-</button>
      <span>Count: {count}</span>
      <button className='increase' onClick={incCnt}>+</button>
      { count === 0 && <div>Today is {date.toDateString()}. </div> }
      { count > 0 && <div> {count} days from today is {date.toDateString()}. </div> }
      { count < 0 && <div> {Math.abs(count)} days ago was {date.toDateString()}. </div> }

    </div>
  )
}

export default App;
