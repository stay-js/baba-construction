import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Button } from '~/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog';
import { ScrollArea } from '~/components/ui/scroll-area';
import { services } from '~/constants/services';

export const Services: React.FC = () => (
  <section id="services" className="bg-card scroll-m-8 py-20">
    <div className="container mx-auto flex flex-col gap-16 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-4xl font-bold text-balance">Our Comprehensive Services</h2>
        <p className="max-w-2xl text-xl text-balance text-neutral-300">
          From concept to completion
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <Card
            key={index}
            className="group bg-neutral-950 transition-shadow duration-300 hover:shadow-xl"
          >
            <CardHeader className="flex flex-col gap-4">
              <div className="grid w-fit items-center rounded-lg bg-neutral-800/50 p-3 transition-colors duration-300 group-hover:bg-neutral-800/20">
                <service.icon size={28} className="text-red-800" />
              </div>
              <CardTitle className="text-xl">{service.title}</CardTitle>
            </CardHeader>

            <CardContent className="h-full">
              <div className="flex h-full flex-col justify-between gap-6">
                <div className="flex flex-col gap-4">
                  <p className="leading-relaxed text-neutral-400">{service.description}</p>
                  <ul className="flex list-inside list-disc flex-col gap-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-sm marker:text-red-800">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {service.popup && (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline">Learn More</Button>
                    </DialogTrigger>
                    <DialogContent className="h-full max-h-[calc(100%-2rem)] w-full max-w-[calc(100%-2rem)] sm:max-h-[calc(100%-4rem)] sm:max-w-[calc(100%-4rem)] lg:max-w-5xl">
                      <DialogHeader>
                        <DialogTitle>{service.title}</DialogTitle>
                        <DialogDescription>{service.description}</DialogDescription>
                      </DialogHeader>

                      <ScrollArea className="h-[75vh]">
                        <service.popup />
                      </ScrollArea>
                    </DialogContent>
                  </Dialog>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
