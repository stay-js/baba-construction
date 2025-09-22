import { Card, CardContent } from '~/components/ui/card';
import { Phone, Mail, MapPin } from 'lucide-react';
import { ContactForm } from './contact-form';

export const Contact: React.FC = () => (
  <section
    id="contact"
    className="container mx-auto flex scroll-m-8 flex-col gap-16 px-4 py-20 sm:px-6 lg:px-8"
  >
    <div className="flex flex-col gap-4 text-center">
      <h2 className="text-4xl font-bold text-balance">Let&apos;s Discuss Your Project</h2>
      <h3 className="mx-auto max-w-2xl text-xl text-balance text-neutral-400">
        Ready to transform your space? Get in touch with us.
      </h3>
    </div>

    <div className="grid gap-8 lg:grid-cols-2">
      <ContactForm />

      <div className="flex flex-col gap-8">
        {[
          {
            title: 'Call Us',
            description: 'Ready to discuss your project?',
            info: '+1 (914) 240-3509',
            icon: Phone,
          },
          {
            title: 'Email Us',
            description: 'Send us your project details',
            info: 'babaconstructioncorp@gmail.com',
            icon: Mail,
          },
          {
            title: 'Service Area',
            description: 'We serve the greater NYC area',
            info: 'Manhattan, Brooklyn, Queens',
            icon: MapPin,
          },
        ].map((card) => (
          <Card className="bg-card" key={card.title}>
            <CardContent className="flex items-start gap-4 p-8">
              <div className="rounded-lg bg-neutral-800 p-3">
                <card.icon size={28} />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold sm:text-lg">{card.title}</h3>
                <p className="text-neutral-400">{card.description}</p>
                <p className="font-semibold wrap-anywhere sm:text-lg md:text-xl">{card.info}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
