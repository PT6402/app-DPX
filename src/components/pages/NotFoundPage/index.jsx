import { Link } from "react-router-dom";

/* eslint-disable react/no-unescaped-entities */
export default function NotFoundPage() {
  return (
    <div className="text-center">
      <h1 className="text-9xl font-black text-gray-200">404</h1>

      <p className="mt-4 text-gray-500">We can't find that page.</p>

      <Link
        to="/"
        className="mt-6 inline-block rounded bg-indigo-600 px-5 py-3 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring"
      >
        Go Back Home
      </Link>
    </div>
  );
}
