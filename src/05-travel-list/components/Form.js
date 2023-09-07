import React, { useState } from 'react';

export default function Form({ onAddItem }) {
  const [description, setdescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  const hanldeSubmitForm = (e) => {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
  };

  return (
    <>
      <form className="add-form" onSubmit={hanldeSubmitForm}>
        <h3>What do you need for your 😍 trip?</h3>

        <select
          className="form-select form-select-lg outline-0"
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>

        <input
          type="text"
          placeholder="Input here"
          className="outline-0"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
        />
        <button className="">Add</button>
      </form>
    </>
  );
}
