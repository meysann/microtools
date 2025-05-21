"use client";

import { useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");

  const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
  const charCount = text.length;

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Word & Character Counter</h1>

      <textarea
        rows={6}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here..."
        className="w-full border p-2 rounded mb-4"
      />

      <p>
        <strong>Words:</strong> {wordCount}
      </p>
      <p>
        <strong>Characters:</strong> {charCount}
      </p>
    </div>
  );
}
