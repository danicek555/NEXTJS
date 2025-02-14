"use client"; //error boundaries must be Client side components
//you will se only the closest error from your file
export default function GlobalError({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    //global-error must include html and body tags
    <html>
      <body>
        <h1>Global Error</h1>
      </body>
    </html>
  );
}
