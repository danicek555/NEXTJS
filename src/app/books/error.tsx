"use client";

export default function ErrorPage({
  error, //two props error and reset
  reset, //because of javascript destructing we do not use props.error etc.
}: {
  error: Error; //typescript declaring its value - Error is Javascript Object with message
  reset: () => void; //reset - function to reset the page
}) {
  return (
    <div className="text-red-500 text-center">
      <h1 className="text-2xl font-bold">❌ Error loading books!</h1>
      <p className="mt-2">{error.message}</p>
      <button
        onClick={reset}
        className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        Try Again
      </button>
    </div>
  );
}

//Catches errors that occur while loading the page.
//Prevents the whole app from crashing if there's an issue.
//Inside any folder with a page.tsx.
//Clicking "Try Again" calls reset(), which reloads the page.
