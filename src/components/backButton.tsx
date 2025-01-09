"use client";

export default function BackButton() {
  return (
    <button
      onClick={() => history.back()}
      className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-800 dark:text-gray-200 transition"
    >
      Back to Homepage
    </button>
  );
}
