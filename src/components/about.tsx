import Image from 'next/image';
import { BadgeCheck, Heart, Shield, Zap } from 'lucide-react';

import { Card, CardContent } from '~/components/ui/card';

export function About() {
  return (
    <section id="about" className="container mx-auto scroll-m-8 px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl font-bold text-balance">Creating Legacies Since 2010</h2>

            <p className="text-lg leading-relaxed text-neutral-400">
              BABA Construction Corp. is proudly serving New York City and the surrounding region
              since 2010. We specialize in high-end renovations, custom homebuilding, and
              comprehensive interior construction for both residential and commercial clients.
            </p>
            <p className="text-lg leading-relaxed text-neutral-400">
              What makes us unique is our all-in-one approach: under one roof, we bring together
              licensed and experienced professionals in electrical work, plumbing, carpentry, custom
              millwork, kitchen and bathroom renovations, and full gut remodels. This integrated
              model allows us to manage every stage of a project with precision, efficiency, and
              personalized care - from concept to completion.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              'Licensed & Insured',
              'Expert Craftsmen',
              'Quality Materials',
              'On-Time Delivery',
            ].map((item) => (
              <div className="flex items-center gap-2" key={item}>
                <BadgeCheck size={20} className="text-red-800" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid auto-rows-[1fr] gap-4 md:grid-cols-2">
          {[
            {
              title: 'Family Values',
              description:
                "Every project is personal to us, treated with the care we'd give our own home.",
              icon: Heart,
            },
            {
              title: 'Quality First',
              description: 'We use only the finest materials and proven construction techniques.',
              icon: Shield,
            },
            {
              title: 'Innovation',
              description:
                'Combining traditional craftsmanship with modern technology and techniques.',
              icon: Zap,
            },
          ].map((card) => (
            <Card className="mx-auto max-w-md" key={card.title}>
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <card.icon size={36} className="text-red-800" />

                <div className="flex flex-col gap-2">
                  <h3 className="font-semibold">{card.title}</h3>
                  <p className="text-muted-foreground text-sm">{card.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}

          <div className="bg-card mx-auto h-full w-full max-w-md rounded-lg max-md:hidden">
            <Image
              src="/projects/35-hudson-1.jpg"
              width={480}
              height={480}
              alt="BABA Construction Interior"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
