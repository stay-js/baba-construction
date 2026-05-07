import { SiInstagram } from '@icons-pack/react-simple-icons';
import { Building2, Mail, MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-card/80 border-t">
      <div className="container flex flex-col gap-12 py-12">
        <div className="flex flex-col justify-between gap-12 lg:flex-row">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <Building2 className="size-8" />
              <h3 className="text-xl font-bold">BABA Construction Corp.</h3>
            </div>

            <p className="text-muted-foreground max-w-[50ch] text-sm leading-relaxed">
              BABA Construction Corp. - Redefining Luxury Living in{' '}
              <span className="whitespace-nowrap">New York</span>. Integrated expertise. Seamless
              execution. Timeless results.
            </p>

            <div className="flex gap-4">
              <Link
                aria-label="Instagram"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                href="https://www.instagram.com/baba_construction"
                rel="noopener noreferrer"
                target="_blank"
              >
                <SiInstagram className="size-5.5" />
                <span className="sr-only">Instagram</span>
              </Link>

              <Link
                aria-label="Phone"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                href="tel:+19142403509"
                target="_blank"
              >
                <Phone className="size-5.5" />
                <span className="sr-only">Phone</span>
              </Link>

              <Link
                aria-label="Mail"
                className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                href="mailto:babaconstructioncorp@gmail.com"
                target="_blank"
              >
                <Mail className="size-5.5" />
                <span className="sr-only">Mail</span>
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-foreground text-lg font-semibold">Contact Info</h4>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <MapPin className="size-5" />

                <p className="text-muted-foreground text-sm">
                  9 Alta Vista Circle
                  <br />
                  Irvington, NY, 10533
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="size-5" />

                <Link
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
                  href="tel:+19142403509"
                  target="_blank"
                >
                  +1 (914) 240-3509
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="size-5" />

                <Link
                  className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
                  href="mailto:babaconstructioncorp@gmail.com"
                  target="_blank"
                >
                  babaconstructioncorp@gmail.com
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-muted-foreground text-sm max-md:text-center">
              <p>© 2026 BABA Construction Corp. All rights reserved. </p>
              <p>
                Made by{' '}
                <Link
                  className="hover:text-foreground transition-colors duration-200"
                  href="https://znagy.hu"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  znagy
                </Link>
                .
              </p>
            </div>

            <Link
              className="text-muted-foreground hover:text-foreground text-sm transition-colors duration-200"
              href="/privacy-policy"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
