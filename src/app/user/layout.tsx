export default function NewUserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-3xl">NEW User Layout</h1>
      {children} {/* This is required! */}
    </div>
  );
}
