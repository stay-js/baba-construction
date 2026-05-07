import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card';
import { services } from '~/constants/services';

export function Services() {
  return (
    <section className="bg-card scroll-m-8 py-20" id="services">
      <div className="container flex flex-col gap-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-4xl font-bold text-balance">Our Comprehensive Services</h2>
          <h3 className="text-muted-foreground mx-auto max-w-2xl text-xl text-balance">
            From concept to completion
          </h3>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              className="group hover:bg-background/70 bg-black/80 transition-all duration-300 hover:shadow-lg"
              key={index}
            >
              <CardHeader className="flex items-center gap-3">
                <div className="group-hover:bg-foreground rounded-lg bg-red-800/10 p-2 text-red-800 transition-colors duration-300">
                  <service.icon className="size-5" />
                </div>

                <CardTitle className="text-lg font-semibold">{service.title}</CardTitle>
              </CardHeader>

              <CardContent className="flex h-full flex-col justify-between gap-4">
                <CardDescription className="text-muted-foreground leading-relaxed">
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
