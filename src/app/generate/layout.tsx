export default function GenerateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="min-h-[calc(100vh-3.5rem)] w-full">{children}</div>
}
