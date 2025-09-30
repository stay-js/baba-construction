'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';
import { NAV_ITEMS } from '~/constants/nav-items';

const LinkOrDiv: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();

  const className = 'flex cursor-pointer items-center gap-3 justify-self-start select-none';

  if (pathname === '/')
    return (
      <div
        className={className}
        role="button"
        onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}
      >
        {children}
      </div>
    );

  return (
    <Link href="/" className={className}>
      {children}
    </Link>
  );
};

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > window.innerHeight - 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-background/95 translate-y-0 border-b backdrop-blur-md'
          : '-translate-y-full bg-transparent',
      )}
    >
      <div className="grid grid-cols-2 items-center p-4 lg:grid-cols-3">
        <LinkOrDiv>
          <Image
            className="rounded-lg"
            src="/logo.jpg"
            alt="BABA Construction Corp. Logo"
            width={48}
            height={48}
          />

          <div className="flex flex-col">
            <span className="block font-bold text-white sm:text-xl">BABA Construction</span>
            <span className="block text-sm text-neutral-400 max-sm:hidden">
              Building Beyond Walls, Since 2010
            </span>
          </div>
        </LinkOrDiv>

        <nav className="hidden items-center space-x-8 justify-self-center lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-neutral-100 transition-all duration-300 hover:text-neutral-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-4 justify-self-end">
          <Button variant="secondary" className="transition-all duration-300 hover:scale-105">
            <Link href="#contact">Get In Touch</Link>
          </Button>

          <button
            className="h-6 w-6 cursor-pointer lg:hidden"
            title="Toggle Hamburger"
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span
              className={cn(
                'absolute block h-0.5 w-6 bg-current transition-all duration-300',
                isMobileMenuOpen ? 'rotate-45' : '-translate-y-2',
              )}
            />
            <span
              className={cn(
                'absolute block h-0.5 w-4 bg-current transition-all duration-300',
                isMobileMenuOpen && 'opacity-0',
              )}
            />
            <span
              className={cn(
                'absolute block h-0.5 bg-current transition-all duration-300',
                isMobileMenuOpen ? 'w-6 -rotate-45' : 'w-2 translate-y-2',
              )}
            />
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="border-t p-4 lg:hidden">
          <nav className="animate-fade-in-up flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                key={`${item.href}-mobile`}
                href={item.href}
                className="text-neutral-100 transition-colors hover:text-neutral-300"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
