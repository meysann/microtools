"use client";

import { useState } from "react";

export default function DateConverter() {
  const [inputDate, setInputDate] = useState("");
  const [outputDate, setOutputDate] = useState("");

  function convertDate() {
    try {
      // Parse the input date
      const date = new Date(inputDate);
      if (isNaN(date.getTime())) {
        setOutputDate("Invalid Date");
        return;
      }

      // Format the date as: YYYY-MM-DD
      const formatted = date.toISOString().split("T")[0];
      setOutputDate(formatted);
    } catch {
      setOutputDate("Error parsing date");
    }
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Date Converter</h1>

      <input
        type="date"
        value={inputDate}
        onChange={(e) => setInputDate(e.target.value)}
        className="border rounded p-2 w-full mb-4"
      />

      <button
        onClick={convertDate}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Convert
      </button>

      {outputDate && (
        <p className="mt-4 text-lg">
          Converted Date: <span className="font-mono">{outputDate}</span>
        </p>
      )}
    </div>
  );
}
