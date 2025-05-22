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
        <li>
          <Link
            href="/tools/dateconverter"
            className="text-blue-600 hover:underline"
          >
            Date Converter
          </Link>
        </li>
        <li>
          <Link
            href="/tools/timezone"
            className="text-blue-600 hover:underline"
          >
            Timezone Converter
          </Link>
        </li>
        <li>
          <Link
            href="/tools/wordcounter"
            className="text-blue-600 hover:underline"
          >
            Word Counter
          </Link>
        </li>
        <li>
          <Link
            href="/tools/password-generator"
            className="text-blue-600 hover:underline"
          >
            Generate secure random passwords.
          </Link>
        </li>
      </ul>
    </div>
  );
}
