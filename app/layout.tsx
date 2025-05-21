// app/layout.tsx
import "./globals.css";
import Header from "./components/Header";

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
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <Header />
        <main className="p-4 max-w-xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
