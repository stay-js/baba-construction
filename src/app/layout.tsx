import "~/styles/globals.css";

import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => (
  <html lang="en" className={`${geist.variable} dark`}>
    <body className="bg-neutral-950 text-white">{children}</body>
  </html>
);

export default RootLayout;
