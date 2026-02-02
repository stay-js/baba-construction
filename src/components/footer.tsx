import Link from 'next/link';
import { Building2, Phone, Mail, MapPin, Instagram } from 'lucide-react';

import { NAV_ITEMS } from '~/constants/nav-items';

export function Footer() {
  return (
    <footer className="bg-card/80 border-t">
      <div className="container flex flex-col gap-12 py-12">
        <div className="flex flex-col justify-between gap-12 lg:flex-row">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Building2 size={32} />
              <h3 className="text-xl font-bold">BABA Construction Corp.</h3>
            </div>

            <p className="text-muted-foreground max-w-[50ch] text-sm leading-relaxed">
              BABA Construction Corp. - Redefining Luxury Living in{' '}
              <span className="whitespace-nowrap">New York</span>. Integrated expertise. Seamless
              execution. Timeless results.
            </p>

            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/baba_construction"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </Link>

              <Link
                href="tel:+19142403509"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Phone"
              >
                <Phone size={24} />
                <span className="sr-only">Phone</span>
              </Link>

              <Link
                href="mailto:babaconstructioncorp@gmail.com"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                aria-label="Mail"
              >
                <Mail size={24} />
                <span className="sr-only">Mail</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-8 md:flex-row lg:gap-16 xl:gap-24">
            <div className="flex flex-col gap-4">
              <h4 className="text-foreground text-lg font-semibold">Quick Links</h4>

              <ul className="flex flex-col gap-2">
                {NAV_ITEMS.map((item) => (
                  <li key={`footer-${item.href}`}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h4 className="text-foreground text-lg font-semibold">Contact Info</h4>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                  <MapPin size={20} />

                  <p className="text-muted-foreground text-sm">
                    9 Alta Vista Circle
                    <br />
                    Irvington, NY, 10533
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Phone size={20} />

                  <Link
                    href="tel:+19142403509"
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
                  >
                    +1 (914) 240-3509
                  </Link>
                </div>

                <div className="flex items-center gap-3">
                  <Mail size={20} />

                  <Link
                    href="mailto:babaconstructioncorp@gmail.com"
                    target="_blank"
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
                  >
                    babaconstructioncorp@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-muted-foreground text-sm max-md:text-center">
              <p>© 2026 Baba Construction Corp. All rights reserved. </p>
              <p>
                Made by{' '}
                <Link
                  href="https://znagy.hu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors duration-200"
                >
                  znagy
                </Link>
                .
              </p>
            </div>

            <Link
              href="/privacy-policy"
              className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
