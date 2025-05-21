"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { tools } from "../tools"; // adjust path if needed

export default function Header() {
  const pathname = usePathname();

  // Define your navigation links here
  const navLinks = [
    { href: "/tools/bmi", label: "BMI" },
    { href: "/tools/temperature", label: "Temp" },
    { href: "/tools/date", label: "Date" },
    { href: "/tools/timezone", label: "Timezone" },
    { href: "/tools/word-counter", label: "Word Count" },
  ];

  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold">🔧 MicroTools</h1>
      <nav className="flex gap-4 text-sm">
        {tools.map(({ name, slug, icon }) => {
          const href = `/tools/${slug}`;
          const isActive = pathname === href;
          return (
            <Link
              key={slug}
              href={href}
              className={`flex items-center gap-1 hover:text-blue-600 ${
                isActive ? "font-semibold text-blue-600" : ""
              }`}
            >
              <span>{icon}</span>
              {name}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
