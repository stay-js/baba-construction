import type { Viewport } from 'next';
import { Geist } from 'next/font/google';

import { Toaster } from '~/components/ui/sonner';
import { Header } from '~/components/header';
import { Footer } from '~/components/footer';

import '~/styles/globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  colorScheme: 'dark',
};

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geist.variable} dark scroll-smooth`}>
      <body className="min-h-screen overflow-x-hidden antialiased">
        <Header />

        <main>{children}</main>

        <Footer />

        <Toaster position="top-left" />
      </body>
    </html>
  );
}
