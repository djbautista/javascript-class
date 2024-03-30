import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import classNames from 'classnames';

const font = Poppins({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: 'Kodemia | Javascript Module',
  description: 'Kodemia Javascript Module for Generations 33 and 32',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames([font.className])}>{children}</body>
    </html>
  );
}
