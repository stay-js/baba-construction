import {
  Hammer,
  Wrench,
  Building,
  Zap,
  Cuboid,
  Paintbrush,
  Wallpaper,
  Home,
  Sparkles,
} from 'lucide-react';

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
    popup: GeneralContractingPopup,
  },
  {
    icon: Wrench,
    title: 'Maintenance Services',
    description:
      'Ongoing maintenance and repair services to keep your property in perfect condition.',
    popup: MaintenanceServicesPopup,
  },
  {
    icon: Zap,
    title: 'Mechanical Systems',
    description: 'Expert installation and maintenance of HVAC, electrical, and plumbing systems.',
    popup: MechanicalSystemsPopup,
  },
  {
    icon: Hammer,
    title: 'Dry Construction',
    description:
      'Framing, drywall, and interior construction services for new builds and renovations.',
    popup: DryConstructionPopup,
  },
  {
    icon: Cuboid,
    title: 'Insulation',
    description:
      'We specialize in facade and acoustic insulation works, enhancing energy efficiency and comfort in your buildings.',
    popup: InsulationPopup,
  },
  {
    title: 'Interior Painting',
    description:
      'Transform your spaces with professional interior painting services using premium materials and techniques.',
    icon: Paintbrush,
  },
  {
    title: 'Wallpaper',
    description:
      'Expert wallpaper installation and removal services to create stunning accent walls and complete room makeovers.',
    icon: Wallpaper,
  },
  {
    title: 'Roofing',
    description:
      'Complete roofing solutions including installation, repair, and maintenance for residential and commercial properties.',
    icon: Home,
  },
  {
    title: 'Venetian Plaster',
    description:
      'Luxury decorative plaster finishes that add elegance and sophistication to any interior space.',
    icon: Sparkles,
  },
];
