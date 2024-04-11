import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 max-w-7xl mx-auto">
      <h2 className="text-xl font-semibold text-indigo-500">There was a problem!</h2>
      <p className="mt-2 mb-4">We could not find the page you were looking for.</p>
      <p>Go back <Link className="text-indigo-500" href="/">Home</Link></p>
    </main>
  );
}