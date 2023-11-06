import type { Metadata } from 'next';
import { inter } from '@/app/ui';

import '@/styles/main.scss';

export const metadata: Metadata = {
  title: 'Learn Nextjs',
  description: 'Code along for learn Nextjs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
