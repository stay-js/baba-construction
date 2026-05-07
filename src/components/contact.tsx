import { Mail, MapPin, Phone } from 'lucide-react';

import { ContactForm } from '~/components/contact-form';
import { Card, CardContent } from '~/components/ui/card';

export function Contact() {
  return (
    <section className="container flex scroll-m-8 flex-col gap-16 py-20" id="contact">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-4xl font-bold text-balance">Let&apos;s Discuss Your Project</h2>
        <h3 className="text-muted-foreground mx-auto max-w-2xl text-xl text-balance">
          Ready to transform your space? Get in touch with us.
        </h3>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <ContactForm />

        <div className="flex flex-col justify-between gap-4">
          {[
            {
              description: 'Ready to discuss your project?',
              icon: Phone,
              info: '+1 (914) 240-3509',
              title: 'Call Us',
            },
            {
              description: 'Send us your project details',
              icon: Mail,
              info: 'babaconstructioncorp@gmail.com',
              title: 'Email Us',
            },
            {
              description: 'We serve the greater NYC area',
              icon: MapPin,
              info: 'Manhattan, Brooklyn, Queens, Bronx and Westchester County',
              title: 'Service Area',
            },
          ].map((card) => (
            <Card className="h-full justify-center py-8" key={card.title}>
              <CardContent className="flex items-start gap-4 lg:px-8">
                <div className="bg-foreground/10 rounded-lg p-3">
                  <card.icon className="size-4 sm:size-6" />
                </div>

                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="font-semibold sm:text-lg">{card.title}</h3>
                    <p className="text-muted-foreground">{card.description}</p>
                  </div>

                  <p className="font-semibold text-balance wrap-anywhere sm:text-lg md:text-xl">
                    {card.info}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
