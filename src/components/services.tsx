import { Hammer, Wrench, Building, Zap, Cuboid, Drill } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/card';
import { Button } from '~/components/ui/button';

const services = [
  {
    icon: Building,
    title: 'General Contracting',
    description:
      'Complete project management from planning to completion for residential and commercial projects.',
    features: ['Project Planning', 'Permit Handling', 'Quality Control', 'Timeline Management'],
  },
  {
    icon: Wrench,
    title: 'Maintenance Services',
    description:
      'Ongoing maintenance and repair services to keep your property in perfect condition.',
    features: [
      'Preventive Maintenance',
      'Emergency Repairs',
      'System Inspections',
      'Regular Upkeep',
    ],
  },
  {
    icon: Zap,
    title: 'Mechanical Systems',
    description: 'Expert installation and maintenance of HVAC, electrical, and plumbing systems.',
    features: ['HVAC Installation', 'Electrical Work', 'Plumbing Systems', 'System Upgrades'],
  },
  {
    icon: Hammer,
    title: 'Dry Construction',
    description:
      'Framing, drywall, and interior construction services for new builds and renovations.',
    features: ['Framing', 'Drywall Installation', 'Insulation', 'Interior Finishing'],
  },
  {
    icon: Cuboid,
    title: 'Insulation',
    description:
      'We specialize in facade and acoustic insulation works, enhancing energy efficiency and comfort in your buildings.',
    features: [
      'Thermal Insulation',
      'Acoustic Insulation',
      'Facade Insulation',
      'Moisture & Vapor Barriers',
    ],
  },
  {
    icon: Drill,
    title: 'Custom Millwork',
    description: 'Bespoke woodwork and millwork to add character and functionality to your space.',
    features: ['Built-in Storage', 'Crown Molding', 'Custom Shelving', 'Architectural Details'],
  },
];

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

                <Button variant="outline" className="w-full">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
);
