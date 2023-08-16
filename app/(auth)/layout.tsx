export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex item-center jsutify-center h-full">{children}</div>
  );
}
