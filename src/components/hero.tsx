'use client';

import { Award, Calendar, ChevronDown, MoveRight, Users } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '~/components/ui/button';
import { useMounted } from '~/hooks/use-mounted';
import { cn } from '~/lib/utils';

export function Hero() {
  const isMounted = useMounted();

  function scrollToNext() {
    window.scrollTo({
      behavior: 'smooth',
      top: window.innerHeight - 32,
    });
  }

  return (
    <section className="relative isolate grid min-h-screen place-content-center overflow-hidden py-16">
      <div className="absolute inset-0 z-0">
        <Image
          alt="BABA Construction"
          className="animation-duration-5000 h-full w-full animate-pulse object-cover"
          fill
          priority
          src="/hero-bg.jpg"
        />

        <div className="absolute inset-0 bg-linear-to-b from-black/80 via-black/60 to-black/70" />
      </div>

      <div className="text-foreground relative z-10 container flex max-w-4xl flex-col gap-16 text-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl font-bold text-balance md:text-7xl">
              <span
                className={cn(
                  'block transition-all duration-1000',
                  isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
                )}
              >
                Building Beyond Walls,
              </span>
              <span
                className={cn(
                  'block transition-all duration-1400',
                  isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
                )}
              >
                Creating Legacies
              </span>
            </h1>

            <h2
              className={cn(
                'text-foreground/80 text-xl text-balance opacity-90 transition-all delay-300 duration-1000 md:text-2xl',
                isMounted ? 'translate-y-0 opacity-90' : 'translate-y-10 opacity-0',
              )}
            >
              BABA Construction Corp. - Redefining Luxury Living in{' '}
              <span className="whitespace-nowrap">New York</span>. Integrated expertise. Seamless
              execution. Timeless results.
            </h2>
          </div>

          <div
            className={cn(
              'flex flex-col items-center justify-center gap-4 transition-all delay-500 duration-1000 sm:flex-row',
              isMounted ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
            )}
          >
            <Button
              asChild
              className="flex w-fit gap-2 transition-all duration-300 hover:scale-105"
              size="lg"
              variant="secondary"
            >
              <Link href="#contact">
                <span>Contact Us</span>
                <MoveRight />
              </Link>
            </Button>

            <Button
              asChild
              className="w-fit transition-all duration-300 hover:scale-105"
              size="lg"
              variant="outline"
            >
              <Link href="#projects">Previous Projects</Link>
            </Button>
          </div>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-12 py-24 max-md:hidden md:grid-cols-3 md:gap-8 md:py-6">
          {[
            { description: 'Years Experience', icon: Calendar, title: '15+' },
            { description: 'Projects Completed', icon: Award, title: 'Countless' },
            { description: 'Client Satisfaction', icon: Users, title: '100%' },
          ].map((item) => (
            <div
              className="group animate-fade-in-up hover:text-muted-foreground flex flex-col items-center gap-3 transition-colors duration-300"
              key={item.title}
            >
              <span className="animate-float text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">
                <item.icon className="size-6" />
              </span>

              <div className="flex flex-col gap-0.5">
                <span className="block text-3xl font-bold">{item.title}</span>
                <span className="block text-sm opacity-90">{item.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="text-foreground hover:text-muted-foreground absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce cursor-pointer transition-colors"
        onClick={scrollToNext}
      >
        <ChevronDown className="size-7" />
      </button>
    </section>
  );
}
