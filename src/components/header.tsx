'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { Button } from '~/components/ui/button';
import { NAV_ITEMS } from '~/constants/nav-items';
import { cn } from '~/lib/utils';

export function Header() {
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
      <div className="container grid grid-cols-[1fr_auto] items-center py-4 lg:grid-cols-3">
        <LinkOrDiv>
          <Image
            alt="BABA Construction Corp. Logo"
            className="rounded-lg"
            height={48}
            src="/logo.jpg"
            width={48}
          />

          <div className="flex flex-col">
            <span className="text-foreground block font-bold sm:text-xl">BABA Construction</span>
            <span className="text-muted-foreground block text-sm">
              Building Beyond Walls<span className="max-sm:hidden">, Since 2010</span>
            </span>
          </div>
        </LinkOrDiv>

        <nav className="hidden items-center gap-6 justify-self-center lg:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              className="text-foreground/90 hover:text-muted-foreground transition-all duration-300"
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4 justify-self-end">
          <Button
            className="transition-all duration-300 hover:scale-105 max-lg:hidden"
            variant="secondary"
          >
            <Link href="#contact">Get In Touch</Link>
          </Button>

          <button
            className="h-6 w-6 cursor-pointer lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            title="Toggle Hamburger"
            type="button"
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
        <div className="container border-t py-4 lg:hidden">
          <nav className="animate-fade-in-up flex flex-col gap-4">
            {NAV_ITEMS.map((item) => (
              <Link
                className="text-foreground/90 hover:text-muted-foreground transition-colors"
                href={item.href}
                key={`${item.href}-mobile`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

function LinkOrDiv({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const className = 'flex cursor-pointer items-center gap-3 justify-self-start select-none';

  if (pathname === '/')
    return (
      <div
        className={className}
        onClick={() => scrollTo({ behavior: 'smooth', top: 0 })}
        role="button"
      >
        {children}
      </div>
    );

  return (
    <Link className={className} href="/">
      {children}
    </Link>
  );
}
