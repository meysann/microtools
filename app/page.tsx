import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6">🧰 MicroTools</h1>
        <p className="mb-4 text-gray-600">Useful tools for everyday tasks</p>
        <ul className="space-y-2">
          <li>
            <Link
              href="/tools/bmi"
              className="text-blue-600 hover:underline font-medium"
            >
              ➤ BMI Calculator
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
