"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold text-black mb-4">Something went wrong!</h2>
      <p className="text-gray-700 mb-6">An unexpected error has occurred. Please try again.</p>
      <button
        className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
        onClick={() => reset()}
      >
        Try Again
      </button>
    </div>
  );
}
