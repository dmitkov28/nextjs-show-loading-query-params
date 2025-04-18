import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <Link href={"/search"} className="border border-gray-400 rounded-lg p-6">Go To Search</Link>
    </div>
  );
}
