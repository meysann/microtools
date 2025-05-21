// app/layout.tsx
import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "MicroTools",
  description: "Handy everyday tools for everyone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      {/* Added dark class here to enable dark mode by default for testing */}
      <body className="bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100">
        <header className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50 dark:bg-gray-800 dark:text-gray-100">
          <h1 className="text-xl font-bold">🔧 MicroTools</h1>
          <nav className="flex gap-4 text-sm">
            <Link href="/tools/bmi">BMI</Link>
            <Link href="/tools/temperature">Temp</Link>
            <Link href="/tools/dateconverter">Date</Link>
            <Link href="/tools/timezone">Timezone</Link>
            <Link href="/tools/wordcounter">Word Count</Link>
          </nav>
        </header>
        <main className="p-4 max-w-xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
