export type SolutionListing = {
  href: string
  title: string
  navLabel: string
  summary: string
  image: string
  imageAlt: string
}

export const SOLUTIONS: readonly SolutionListing[] = [
  {
    href: '/solutions/aerosol-fire-extinguisher',
    title: 'Aerosol Fire Extinguisher Solutions',
    navLabel: 'Aerosol Fire Extinguisher Solution',
    summary:
      'DIN rail thermal aerosol fire extinguishers for electrical cabinets, PV combiner boxes, and industrial enclosures.',
    image: '/images/solutions/aerosol-fire-extinguisher/Aerosol-Fire-Extinguisher-Solutions.jpg',
    imageAlt: 'Aerosol fire extinguisher for electrical cabinet',
  },
  {
    href: '/solutions/22mm-digital-display-indicator',
    title: '22mm Digital Display Indicator Solutions',
    navLabel: '22mm Digital Display Indicator',
    summary:
      '22mm digital display indicators for voltage, current, frequency, and temperature. SA50, SA60, and ED16-22 meters for control cabinets.',
    image: '/images/solutions/22mm-digital-display-indicator/hero.jpg',
    imageAlt: 'SA50 and SA60 22mm digital display indicators',
  },
]
