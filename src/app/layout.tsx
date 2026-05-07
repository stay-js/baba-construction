import '~/styles/globals.css';

import type { Viewport } from 'next';

import { Geist, Geist_Mono } from 'next/font/google';

import { Footer } from '~/components/footer';
import { Header } from '~/components/header';
import { Toaster } from '~/components/ui/sonner';
import { cn } from '~/lib/utils';

export const viewport: Viewport = {
  colorScheme: 'dark',
  initialScale: 1,
  width: 'device-width',
};

const fontSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
});

const fontMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={cn(fontMono.variable, 'dark', 'font-sans', fontSans.variable)} lang="en">
      <body className="min-h-screen overflow-x-hidden antialiased">
        <Header />

        <main>{children}</main>

        <Footer />

        <Toaster position="top-left" />
      </body>
    </html>
  );
}
