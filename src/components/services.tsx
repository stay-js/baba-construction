import { MoveRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '~/components/ui/card';
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
            className="group bg-card transition-all duration-300 hover:bg-neutral-800/50 hover:shadow-lg"
          >
            <CardHeader className="flex items-center gap-3">
              <div className="rounded-lg bg-red-800/10 p-2 text-red-800 transition-colors duration-300 group-hover:bg-white">
                <service.icon size={20} />
              </div>
              <CardTitle className="text-lg font-semibold">{service.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex h-full flex-col justify-between gap-4">
              <CardDescription className="leading-relaxed text-neutral-400">
                {service.description}
              </CardDescription>

              {service.popup && (
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="flex w-fit gap-2">
                      <span> Learn More</span>
                      <MoveRight />
                    </Button>
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
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
