import '~/styles/globals.css';

import { Geist } from 'next/font/google';
import { Toaster } from '~/components/ui/sonner';

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
});

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en" className={`${geist.variable} dark`}>
    <body className="bg-neutral-950 text-white">
      {children}

      <Toaster position="top-left" />
    </body>
  </html>
);

export default RootLayout;
