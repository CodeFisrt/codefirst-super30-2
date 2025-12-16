import React from "react";
import { useState } from "react";

export default function NumberForm({ setNumber, goToFilter }) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value === "") {
      setError("Enter a number to submit");
      return;
    }

    const num = Number(value);

    if (num < 0 || num > 9) {
      setError("Number must be between 0 and 9");
      return;
    }

    setNumber(num);
    setValue("");
    setError("");
  };

  return (
    <form
      className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-semibold mb-4 text-center">Enter Number</h2>

      <input
        type="number"
        placeholder="0 - 9"
        className="w-full border rounded-lg px-4 py-2 mb-3"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

      <button className="w-full bg-green-500 text-white py-2 rounded-lg mb-3">
        Submit Number
      </button>

      <button
        type="button"
        onClick={goToFilter}
        className="w-full border border-green-500 text-green-600 py-2 rounded-lg"
      >
        Check Previous Results
      </button>
    </form>
  );
}
