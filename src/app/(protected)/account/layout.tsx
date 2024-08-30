import Link from 'next/link';

export default function AccountLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div>
        <Link href="/account/settings">Settings</Link>
      </div>
      <h1>Account Nav</h1>
      {children}
    </div>
  );
}
