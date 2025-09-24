import { Hammer, Wrench, Building, Zap, Cuboid, Drill } from 'lucide-react';

import { GeneralContractingPopup } from '~/components/popups/general-contracting';
import { MaintenanceServicesPopup } from '~/components/popups/maintenance-services';
import { MechanicalSystemsPopup } from '~/components/popups/mechanical-systems';
import { DryConstructionPopup } from '~/components/popups/dry-construction';
import { InsulationPopup } from '~/components/popups/insulation';

export const services = [
  {
    icon: Building,
    title: 'General Contracting',
    description:
      'Complete project management from planning to completion for residential and commercial projects.',
    features: ['Project Planning', 'Permit Handling', 'Quality Control', 'Timeline Management'],
    popup: GeneralContractingPopup,
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
    popup: MaintenanceServicesPopup,
  },
  {
    icon: Zap,
    title: 'Mechanical Systems',
    description: 'Expert installation and maintenance of HVAC, electrical, and plumbing systems.',
    features: ['HVAC Installation', 'Electrical Work', 'Plumbing Systems', 'System Upgrades'],
    popup: MechanicalSystemsPopup,
  },
  {
    icon: Hammer,
    title: 'Dry Construction',
    description:
      'Framing, drywall, and interior construction services for new builds and renovations.',
    features: ['Framing', 'Drywall Installation', 'Insulation', 'Interior Finishing'],
    popup: DryConstructionPopup,
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
    popup: InsulationPopup,
  },
  {
    icon: Drill,
    title: 'Custom Millwork',
    description: 'Bespoke woodwork and millwork to add character and functionality to your space.',
    features: ['Built-in Storage', 'Crown Molding', 'Custom Shelving', 'Architectural Details'],
  },
];
