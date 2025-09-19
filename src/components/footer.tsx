import Link from 'next/link';
import { Building2, Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { NAV_ITEMS } from '~/constants/nav-items';

export const Footer = () => (
  <footer className="border-t bg-neutral-900">
    <div className="container mx-auto flex flex-col gap-12 px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-16 lg:flex-row">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Building2 size={32} />
            <h3 className="text-xl font-bold">BABA Construction Corp.</h3>
          </div>

          <p className="max-w-[50ch] text-sm leading-relaxed text-neutral-400">
            BABA Construction Corp. - Redefining Luxury Living in New York. Integrated expertise.
            Seamless execution. Timeless results.
          </p>

          <div className="flex gap-4">
            <Link
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 transition-colors duration-200 hover:text-white"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </Link>

            <Link
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 transition-colors duration-200 hover:text-white"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </Link>

            <Link
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 transition-colors duration-200 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-8 md:flex-row lg:gap-16 xl:gap-24">
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>

            <ul className="flex flex-col gap-2">
              {NAV_ITEMS.map((item) => (
                <li key={`footer-${item.href}`}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-white">Contact Info</h4>

            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <MapPin size={20} />

                <p className="text-sm text-neutral-400">
                  123 Construction Ave
                  <br />
                  New York, NY 10001
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={20} />

                <Link
                  href="tel:+9991112222"
                  target="_blank"
                  className="text-sm text-neutral-400 transition-colors duration-200 hover:text-white"
                >
                  (999) 111-2222
                </Link>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={20} />

                <Link
                  href="mailto:babaconstructioncorp@gmail.com"
                  target="_blank"
                  className="text-sm text-neutral-400 transition-colors duration-200 hover:text-white"
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
          <div>
            <p className="text-center text-sm text-neutral-400 md:text-left">
              © 2025 Baba Construction Corp. All rights reserved.{' '}
            </p>
            <p className="text-center text-sm text-neutral-400 md:text-left">
              Made by{' '}
              <Link
                href="https://znagy.hu"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors duration-200 hover:text-white"
              >
                znagy
              </Link>
              .
            </p>
          </div>

          <Link
            href="/privacy-policy"
            className="text-sm text-neutral-400 transition-colors duration-200 hover:text-white"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  </footer>
);
