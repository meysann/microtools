"use client";

import { useState } from "react";

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  // Helper to check valid number input
  const isValidNumber = (value: string) => /^-?\d*\.?\d*$/.test(value);

  const handleCelsiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isValidNumber(value)) return; // Ignore invalid input
    setCelsius(value);
    if (value === "") {
      setFahrenheit("");
    } else {
      const f = (parseFloat(value) * 9) / 5 + 32;
      setFahrenheit(f.toFixed(2));
    }
  };

  const handleFahrenheitChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isValidNumber(value)) return;
    setFahrenheit(value);
    if (value === "") {
      setCelsius("");
    } else {
      const c = ((parseFloat(value) - 32) * 5) / 9;
      setCelsius(c.toFixed(2));
    }
  };

  return (
    <div className="max-w-md mx-auto mt-8 p-4 border rounded shadow">
      <h1 className="text-xl font-bold mb-4">Temperature Converter</h1>
      <label className="block mb-2">
        Celsius:
        <input
          type="text"
          value={celsius}
          onChange={handleCelsiusChange}
          className="ml-2 p-1 border rounded w-32"
          placeholder="°C"
        />
      </label>
      <label className="block mb-2">
        Fahrenheit:
        <input
          type="text"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          className="ml-2 p-1 border rounded w-32"
          placeholder="°F"
        />
      </label>
    </div>
  );
}
