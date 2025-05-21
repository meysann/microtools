"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { name: "BMI", path: "/tools/bmi" },
  { name: "Temperature", path: "/tools/temperature" },
  { name: "Date Converter", path: "/tools/date-converter" },
  { name: "Timezone", path: "/tools/timezone" },
  { name: "Word Counter", path: "/tools/word-counter" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="bg-gray-800 text-white py-4 px-6 shadow-md sticky top-0 z-50">
      <nav className="flex flex-wrap gap-4 justify-center">
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`px-3 py-1 rounded-md hover:bg-gray-700 ${
              pathname === item.path ? "bg-gray-700" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
