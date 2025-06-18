export function TFTKeyword({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <span className="text-red-500">{children}</span>;
}
