import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap', // Add display swap to prevent blocking
  preload: true,   // Ensure font is preloaded
  fallback: ['system-ui', 'arial'], // Provide fallback fonts
});

export const metadata: Metadata = {
  title: 'HRlytics',
  description: 'A SaaS solution for HR & Business Problems',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}