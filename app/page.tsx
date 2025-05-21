import Link from "next/link";

export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-bold mb-6">Welcome to Micro Tools</h1>
      <p className="mb-4">Choose a tool to get started:</p>
      <Link href="/tools" className="text-blue-600 hover:underline text-lg">
        Go to Tools List
      </Link>
    </div>
  );
}
