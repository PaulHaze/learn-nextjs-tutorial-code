import '@/styles/main.scss';

import type { Metadata } from 'next';

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
      <body>{children}</body>
    </html>
  );
}
