"use client";

import { useState } from "react";

export default function TimezoneConverter() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [fromTZ, setFromTZ] = useState("UTC");
  const [toTZ, setToTZ] = useState("Asia/Tehran");
  const [converted, setConverted] = useState("");

  const timezones = [
    "UTC",
    "Asia/Tehran",
    "America/New_York",
    "Europe/London",
    "Asia/Tokyo",
    "Australia/Sydney",
  ];

  function convertTimezone() {
    if (!date || !time) return;

    const localDate = new Date(`${date}T${time}:00`);
    const utcDate = new Date(
      localDate.toLocaleString("en-US", { timeZone: fromTZ })
    );

    const convertedTime = new Intl.DateTimeFormat("en-GB", {
      timeZone: toTZ,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).format(utcDate);

    setConverted(convertedTime);
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Timezone Converter</h1>

      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border p-2 w-full mb-2"
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="border p-2 w-full mb-2"
      />

      <div className="flex justify-between gap-2 mb-2">
        <select
          value={fromTZ}
          onChange={(e) => setFromTZ(e.target.value)}
          className="border p-2 w-full"
        >
          {timezones.map((tz) => (
            <option key={tz}>{tz}</option>
          ))}
        </select>
        <select
          value={toTZ}
          onChange={(e) => setToTZ(e.target.value)}
          className="border p-2 w-full"
        >
          {timezones.map((tz) => (
            <option key={tz}>{tz}</option>
          ))}
        </select>
      </div>

      <button
        onClick={convertTimezone}
        className="bg-blue-600 text-white px-4 py-2 rounded w-full hover:bg-blue-700"
      >
        Convert
      </button>

      {converted && (
        <p className="mt-4 text-lg">
          Converted Time: <strong>{converted}</strong>
        </p>
      )}
    </div>
  );
}
