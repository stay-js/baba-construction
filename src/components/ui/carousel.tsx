'use client';

import type { UseEmblaCarouselType } from 'embla-carousel-react';

import useEmblaCarousel from 'embla-carousel-react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import * as React from 'react';

import { Button } from '~/components/ui/button';
import { cn } from '~/lib/utils';

type CarouselApi = UseEmblaCarouselType[1];
type CarouselContextProps = CarouselProps & {
  api: ReturnType<typeof useEmblaCarousel>[1];
  canScrollNext: boolean;
  canScrollPrev: boolean;
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  scrollNext: () => void;
  scrollPrev: () => void;
};
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  orientation?: 'horizontal' | 'vertical';
  plugins?: CarouselPlugin;
  setApi?: (api: CarouselApi) => void;
};

type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function Carousel({
  children,
  className,
  opts,
  orientation = 'horizontal',
  plugins,
  setApi,
  ...props
}: CarouselProps & React.ComponentProps<'div'>) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === 'horizontal' ? 'x' : 'y',
    },
    plugins,
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  const onSelect = React.useCallback((api: CarouselApi) => {
    if (!api) return;
    setCanScrollPrev(api.canScrollPrev());
    setCanScrollNext(api.canScrollNext());
  }, []);

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);

  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext],
  );

  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);

  React.useEffect(() => {
    if (!api) return;
    onSelect(api); // eslint-disable-line react-hooks/set-state-in-effect
    api.on('reInit', onSelect);
    api.on('select', onSelect);

    return () => {
      api?.off('select', onSelect);
    };
  }, [api, onSelect]);

  return (
    <CarouselContext.Provider
      value={{
        api: api,
        canScrollNext,
        canScrollPrev,
        carouselRef,
        opts,
        orientation: orientation || (opts?.axis === 'y' ? 'vertical' : 'horizontal'),
        scrollNext,
        scrollPrev,
      }}
    >
      <div
        aria-roledescription="carousel"
        className={cn('relative', className)}
        data-slot="carousel"
        onKeyDownCapture={handleKeyDown}
        role="region"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
}

function CarouselContent({ className, ...props }: React.ComponentProps<'div'>) {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div className="overflow-hidden" data-slot="carousel-content" ref={carouselRef}>
      <div
        className={cn('flex', orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col', className)}
        {...props}
      />
    </div>
  );
}

function CarouselDots() {
  const { scrollSnaps, scrollTo, selectedIndex } = useCarouselProgress();

  return (
    <div className="mt-8 flex justify-center gap-2">
      {scrollSnaps.map((_, index) => (
        <button
          className={cn(
            'h-2 rounded-full transition-all',
            index === selectedIndex
              ? 'bg-primary w-8'
              : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2',
          )}
          key={index}
          onClick={() => scrollTo(index)}
        />
      ))}
    </div>
  );
}

function CarouselItem({ className, ...props }: React.ComponentProps<'div'>) {
  const { orientation } = useCarousel();

  return (
    <div
      aria-roledescription="slide"
      className={cn(
        'min-w-0 shrink-0 grow-0 basis-full',
        orientation === 'horizontal' ? 'pl-4' : 'pt-4',
        className,
      )}
      data-slot="carousel-item"
      role="group"
      {...props}
    />
  );
}

function CarouselNext({
  className,
  size = 'icon',
  variant = 'outline',
  ...props
}: React.ComponentProps<typeof Button>) {
  const { canScrollNext, orientation, scrollNext } = useCarousel();

  return (
    <Button
      className={cn(
        'absolute size-8 rounded-full',
        orientation === 'horizontal'
          ? 'top-1/2 right-4 -translate-y-1/2'
          : 'bottom-4 left-1/2 -translate-x-1/2 rotate-90',
        className,
      )}
      data-slot="carousel-next"
      disabled={!canScrollNext}
      onClick={scrollNext}
      size={size}
      variant={variant}
      {...props}
    >
      <ArrowRight />
      <span className="sr-only">Next slide</span>
    </Button>
  );
}

function CarouselPrevious({
  className,
  size = 'icon',
  variant = 'outline',
  ...props
}: React.ComponentProps<typeof Button>) {
  const { canScrollPrev, orientation, scrollPrev } = useCarousel();

  return (
    <Button
      className={cn(
        'absolute size-8 rounded-full',
        orientation === 'horizontal'
          ? 'top-1/2 left-4 -translate-y-1/2'
          : 'top-4 left-1/2 -translate-x-1/2 rotate-90',
        className,
      )}
      data-slot="carousel-previous"
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      size={size}
      variant={variant}
      {...props}
    >
      <ArrowLeft />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
}

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error('useCarousel must be used within a <Carousel />');
  }

  return context;
}

function useCarouselProgress() {
  const { api } = useCarousel();

  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [scrollSnaps, setScrollSnaps] = React.useState<number[]>([]);

  React.useEffect(() => {
    if (!api) return;

    setScrollSnaps(api.scrollSnapList()); // eslint-disable-line react-hooks/set-state-in-effect
    setSelectedIndex(api.selectedScrollSnap());

    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    api.on('select', onSelect);
    api.on('reInit', onSelect);

    return () => {
      api.off('select', onSelect);
      api.off('reInit', onSelect);
    };
  }, [api]);

  const scrollTo = React.useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api],
  );

  return { scrollSnaps, scrollTo, selectedIndex };
}

export {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  useCarouselProgress,
};
