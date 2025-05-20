"use client";
import { useState } from "react";

export default function BMICalculator() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState<number | null>(null);
  const [message, setMessage] = useState("");

  const calculateBMI = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);

    if (!h || !w || h <= 0 || w <= 0) {
      setMessage("Please enter valid height and weight.");
      setBmi(null);
      return;
    }

    const result = w / ((h / 100) * (h / 100));
    setBmi(result);

    if (result < 18.5) setMessage("Underweight");
    else if (result < 24.9) setMessage("Normal weight");
    else if (result < 29.9) setMessage("Overweight");
    else setMessage("Obese");
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">BMI Calculator</h1>

        <div className="mb-4">
          <input
            type="number"
            placeholder="Height (cm)"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded mb-2 text-gray-900"
          />
          <input
            type="number"
            placeholder="Weight (kg)"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded text-gray-900"
          />
        </div>

        <button
          onClick={calculateBMI}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Calculate BMI
        </button>

        {bmi && (
          <div className="mt-4">
            <p className="text-lg font-semibold text-gray-900">
              Your BMI: {bmi.toFixed(2)}
            </p>
            <p className="text-gray-800">{message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
