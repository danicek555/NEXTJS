export default function NotFound() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <p>Oops! We couldn't find that page.</p>
    </div>
  );
}
//Displays a custom 404 error page when a user visits a non-existent page.
//✅ Now, if someone visits a missing page (/xyz), they’ll see this instead of the default Next.js 404 page.
