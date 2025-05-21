import Link from "next/link";

export default function ToolsPage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Micro Tools</h1>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Link href="/tools/bmi" className="text-blue-600 hover:underline">
            BMI Calculator
          </Link>
        </li>
        <li>
          <Link
            href="/tools/temperature"
            className="text-blue-600 hover:underline"
          >
            Temperature Converter
          </Link>
        </li>
      </ul>
    </div>
  );
}
