// app/layout.tsx
"use client";

import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <header className="bg-white dark:bg-gray-800 shadow-md p-4 flex justify-between items-center sticky top-0 z-50">
          <h1 className="text-xl font-bold">🔧 MicroTools</h1>
          <nav className="flex gap-4 text-sm">
            <Link
              href="/"
              className={`hover:underline ${
                pathname === "/" ? "font-bold underline" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="/tools/bmi"
              className={`hover:underline ${
                pathname === "/tools/bmi" ? "font-bold underline" : ""
              }`}
            >
              BMI
            </Link>
            <Link
              href="/tools/temperature"
              className={`hover:underline ${
                pathname === "/tools/temperature" ? "font-bold underline" : ""
              }`}
            >
              Temp
            </Link>
            <Link
              href="/tools/dateconverter"
              className={`hover:underline ${
                pathname === "/tools/dateconverter" ? "font-bold underline" : ""
              }`}
            >
              Date
            </Link>
            <Link
              href="/tools/timezone"
              className={`hover:underline ${
                pathname === "/tools/timezone" ? "font-bold underline" : ""
              }`}
            >
              Timezone
            </Link>
            <Link
              href="/tools/wordcounter"
              className={`hover:underline ${
                pathname === "/tools/wordcounter" ? "font-bold underline" : ""
              }`}
            >
              Word Count
            </Link>
          </nav>
        </header>
        <main className="p-4 max-w-xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
