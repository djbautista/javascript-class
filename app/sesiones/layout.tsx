import Navbar from '@/components/Navbar';

export default function SessionsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <main className="container mx-auto p-8">{children}</main>
    </div>
  );
}
