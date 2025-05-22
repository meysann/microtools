"use client";
import { useState } from "react";

type Age = {
  years: number;
  months: number;
  days: number;
} | null;

export default function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState<Age>(null);

  const calculateAge = () => {
    if (!birthDate) {
      setAge(null);
      return;
    }
    const today = new Date();
    const birth = new Date(birthDate);

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    if (days < 0) {
      months -= 1;
      days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    }
    if (months < 0) {
      years -= 1;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Age Calculator</h1>
      <label className="block mb-2">
        Birth Date:
        <input
          type="date"
          value={birthDate}
          onChange={(e) => setBirthDate(e.target.value)}
          className="border p-2 w-full mt-1 rounded"
        />
      </label>
      <button
        onClick={calculateAge}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-2"
      >
        Calculate Age
      </button>

      {age && (
        <div className="mt-4 p-2 bg-gray-100 rounded">
          <strong>Age:</strong> {age.years} years, {age.months} months,{" "}
          {age.days} days
        </div>
      )}
    </div>
  );
}
