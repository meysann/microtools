"use client";
import { useState } from "react";

export default function PasswordGenerator() {
  const [length, setLength] = useState(12);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const chars =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+{}[]";
    let result = "";
    for (let i = 0; i < length; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setPassword(result);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Password Generator</h1>
      <label className="block mb-2">
        Password Length:
        <input
          type="number"
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          className="border p-2 w-full mt-1 rounded"
          min={4}
          max={64}
        />
      </label>
      <button
        onClick={generatePassword}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mt-2"
      >
        Generate
      </button>
      {password && (
        <div className="mt-4 p-2 bg-gray-100 rounded break-all">
          <strong>Generated Password:</strong> {password}
        </div>
      )}
    </div>
  );
}
