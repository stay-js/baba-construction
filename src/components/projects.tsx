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
  <div id="projects" className="flex scroll-m-8 flex-col gap-16 py-20">
    <div className="flex flex-col items-center gap-4 text-center">
      <h2 className="text-4xl font-bold text-balance">Previous Projects</h2>
      <h3 className="mx-auto max-w-2xl text-xl text-balance text-neutral-400">
        Take a closer look at the projects we&apos;ve built and the stories of the people who rely
        on our dedication and skill.
      </h3>
    </div>

    <Carousel
      className="relative mx-auto w-full max-w-7xl p-4 md:p-16"
      opts={{
        align: 'start',
        loop: true,
      }}
    >
      <CarouselContent>
        {projects.map((project, index) => (
          <CarouselItem key={index}>
            <Card className="bg-card border-border grid overflow-hidden py-0 lg:grid-cols-2">
              <div className="relative h-96 lg:h-[500px]">
                <Image src={project.image} alt={project.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="flex flex-col justify-center gap-12 p-8 py-4 lg:p-12">
                <div className="flex flex-col gap-4">
                  <h2 className="text-2xl font-bold text-balance lg:text-3xl">{project.title}</h2>
                  <div className="w-fit rounded-full bg-neutral-800 px-3 py-1 text-sm text-neutral-100">
                    {project.type}
                  </div>
                </div>

                <p className="text-lg leading-relaxed text-pretty text-neutral-100">
                  {project.description}
                </p>
              </div>
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
