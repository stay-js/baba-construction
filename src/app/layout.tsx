import '~/styles/globals.css';

import { Geist } from 'next/font/google';
import { Header } from '~/components/header';
import { Toaster } from '~/components/ui/sonner';
import { Footer } from '~/components/footer';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en" className={`${geist.variable} dark`}>
    <body className="min-h-screen overflow-x-hidden bg-neutral-950 text-white antialiased">
      <Header />

      <main>{children}</main>

      <Footer />

      <Toaster position="top-left" />
    </body>
  </html>
);

export default RootLayout;
