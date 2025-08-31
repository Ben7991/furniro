import type { Metadata } from 'next';
import { Archivo } from 'next/font/google';

import './globals.css';

const archivo = Archivo({
  variable: '--font-archivo',
});

export const metadata: Metadata = {
  title: 'Furniro',
  description: 'A furniture online shop website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={archivo.variable}>{children}</body>
    </html>
  );
}
