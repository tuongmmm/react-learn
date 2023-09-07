import { useState } from 'react';

export default function App() {
  return (
    <>
      <TipCalculator />
    </>
  );
}

function TipCalculator() {
  const [bill, setBill] = useState('');
  const [percentage1, setPercentage1] = useState(0);
  const [percentage2, setPercentage2] = useState(0);

  const tip = bill * ((percentage1 + percentage2) / 2 / 100);

  function hanldeReset() {
    setBill('');
    setPercentage1(0);
    setPercentage2(0);
  }

  return (
    <>
      <BillInput bill={bill} onSetBill={setBill} />

      <SelectPercentage percentage={percentage1} onSelect={setPercentage1}>
        How did you like service
      </SelectPercentage>

      <SelectPercentage percentage={percentage2} onSelect={setPercentage2}>
        How did your friend like the service
      </SelectPercentage>

      <Output bill={bill} tip={tip} />

      <Reset onReset={hanldeReset} />
    </>
  );
}

function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        type="text"
        placeholder="Bill value"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}

function SelectPercentage({ children, percentage, onSelect }) {
  return (
    <div>
      <label>{children}</label>
      <select
        value={percentage}
        onChange={(e) => onSelect(Number(e.target.value))}
      >
        <option value="0">0%</option>
        <option value="5">5%</option>
        <option value="10">10%</option>
        <option value="20">20%</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <div>
      You have pay ${bill + tip} (${bill} + ${tip} tip)
    </div>
  );
}

function Reset({ onReset }) {
  return (
    <>
      <button type="button" onClick={onReset}>
        Reset
      </button>
    </>
  );
}
