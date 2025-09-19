'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Award, Users, Calendar, ChevronDown, MoveRight } from 'lucide-react';
import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';
import Link from 'next/link';

const Item = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => (
  <div className="group animate-fade-in-up flex flex-col items-center gap-2 transition-colors duration-300 hover:text-neutral-400">
    <span className="animate-float text-neutral-400 transition-colors duration-300 group-hover:text-neutral-600">
      {icon}
    </span>

    <div className="flex flex-col gap-0.5">
      <span className="block text-3xl font-bold">{title}</span>
      <span className="block text-sm opacity-90">{description}</span>
    </div>
  </div>
);

export const Hero: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  const scrollToNext = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative isolate grid min-h-screen place-content-center overflow-hidden py-16">
      <div className="absolute inset-0 z-0">
        <Image
          priority
          fill
          src="/hero-bg.jpg"
          alt="BABA Construction"
          className="animation-duration-5000 h-full w-full animate-pulse object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/70" />
      </div>

      <div className="relative z-10 container mx-auto flex max-w-4xl flex-col gap-16 px-4 text-center text-white">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl font-bold text-balance md:text-7xl">
              <span
                className={cn(
                  'block transition-all duration-1000',
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
                )}
              >
                Building Beyond Walls,
              </span>
              <span
                className={cn(
                  'block transition-all duration-1400',
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
                )}
              >
                Creating Legacies
              </span>
            </h1>

            <h2
              className={cn(
                'text-xl text-balance text-neutral-200 opacity-90 transition-all delay-300 duration-1000 md:text-2xl',
                isVisible ? 'translate-y-0 opacity-90' : 'translate-y-10 opacity-0',
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
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0',
            )}
          >
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="flex w-fit gap-2 transition-all duration-300 hover:scale-105"
            >
              <Link href="#contact">
                <span>Contact Us</span>
                <MoveRight />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-fit transition-all duration-300 hover:scale-105"
            >
              <Link href="#projects">Previous Projects</Link>
            </Button>
          </div>
        </div>

        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-12 py-24 max-md:hidden md:grid-cols-3 md:gap-8 md:py-6">
          <Item title="15+" description="Years Experience" icon={<Calendar size={28} />} />

          <Item title="Countless" description="Projects Completed" icon={<Award size={28} />} />

          <Item title="100%" description="Client Satisfaction" icon={<Users size={28} />} />
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 transform animate-bounce cursor-pointer text-white transition-colors hover:text-neutral-300"
      >
        <ChevronDown size={28} />
      </button>
    </section>
  );
};
