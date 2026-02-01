import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '~/components/ui/card';
import { services } from '~/constants/services';

export function Services() {
  return (
    <section id="services" className="bg-card scroll-m-8 py-20">
      <div className="container mx-auto flex flex-col gap-16 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-4xl font-bold text-balance">Our Comprehensive Services</h2>
          <h3 className="mx-auto max-w-2xl text-xl text-balance text-neutral-400">
            From concept to completion
          </h3>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group bg-black transition-all duration-300 hover:bg-neutral-800/50 hover:shadow-lg"
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
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
