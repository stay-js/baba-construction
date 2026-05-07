'use client';

import Image from 'next/image';

import { Card } from '~/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui/carousel';
import { projects } from '~/constants/projects';

export function Projects() {
  return (
    <div className="container flex scroll-m-8 flex-col gap-16 py-20" id="projects">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-4xl font-bold text-balance">Previous Projects</h2>
        <h3 className="text-muted-foreground mx-auto max-w-2xl text-xl text-balance">
          Take a closer look at the projects we&apos;ve built and the stories of the people who rely
          on our dedication and skill.
        </h3>
      </div>

      <Carousel
        className="relative w-full md:px-16"
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          {projects.map((project, index) => (
            <CarouselItem className="lg:basis-1/2" key={index}>
              <Card className="bg-card grid grid-cols-2 gap-2 p-2">
                <div className="relative col-span-2 h-80 overflow-hidden rounded-lg lg:h-96">
                  <Image
                    alt={project.title}
                    className="object-cover"
                    fill
                    src={project.mainImage}
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />

                  <h2 className="absolute bottom-0 left-0 p-6 text-2xl font-bold lg:text-3xl">
                    {project.title}
                  </h2>
                </div>

                {project.images.map((image) => (
                  <div className="relative h-48 overflow-hidden rounded-lg lg:h-56" key={image}>
                    <Image
                      alt={project.title}
                      className="object-cover object-center"
                      fill
                      src={image}
                    />
                  </div>
                ))}
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="max-md:hidden" />
        <CarouselNext className="max-md:hidden" />

        <CarouselDots />
      </Carousel>
    </div>
  );
}
