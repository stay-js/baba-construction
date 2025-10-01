'use client';

import Image from 'next/image';
import { Card } from '~/components/ui/card';
import { projects } from '~/constants/projects';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from '~/components/ui/carousel';

export const Projects: React.FC = () => (
  <div
    id="projects"
    className="container mx-auto flex scroll-m-8 flex-col gap-16 px-4 py-20 sm:px-6 lg:px-8"
  >
    <div className="flex flex-col items-center gap-4 text-center">
      <h2 className="text-4xl font-bold text-balance">Previous Projects</h2>
      <h3 className="mx-auto max-w-2xl text-xl text-balance text-neutral-400">
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
          <CarouselItem key={index} className="lg:basis-1/2">
            <Card className="bg-card grid grid-cols-2 gap-2 p-2">
              <div className="relative col-span-2 h-80 overflow-hidden rounded-lg lg:h-96">
                <Image src={project.mainImage} alt={project.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                <h2 className="absolute bottom-0 left-0 p-6 text-2xl font-bold lg:text-3xl">
                  {project.title}
                </h2>
              </div>

              {project.images.map((image) => (
                <div className="relative h-48 overflow-hidden rounded-lg lg:h-56" key={image}>
                  <Image
                    src={image}
                    alt={project.title}
                    fill
                    className="object-cover object-center"
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
