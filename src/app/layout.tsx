import type { Viewport } from 'next';

import { Geist } from 'next/font/google';

import { Footer } from '~/components/footer';
import { Header } from '~/components/header';
import { Toaster } from '~/components/ui/sonner';
import '~/styles/globals.css';

export const viewport: Viewport = {
  colorScheme: 'dark',
  initialScale: 1,
  width: 'device-width',
};

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${geist.variable} dark scroll-smooth`} lang="en">
      <body className="min-h-screen overflow-x-hidden antialiased">
        <Header />

        <main>{children}</main>

        <Footer />

        <Toaster position="top-left" />
      </body>
    </html>
  );
}
