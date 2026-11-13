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
    href: '/solutions/22mm-push-button-switch',
    title: '22mm Push Button Switch Solutions',
    navLabel: '22mm Push Button Switches (EB2M)',
    summary:
      'Φ22 mm EB2M push buttons, selector switches, key switches and emergency stops. 10 A Ith, AC-15 220 V / 5 A, IP40/IP65, six colors. Request a quote.',
    image: '/images/solutions/22mm-push-button-switch/eb2m-a-hero.jpg',
    imageAlt: 'EB2M 22mm push buttons, selector, key switch and emergency stop',
  },
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
  {
    href: '/solutions/metal-push-button',
    title: 'Metal Push Button Solutions',
    navLabel: 'Metal Push Button',
    summary:
      'Anti-vandal metal push buttons for Φ12, Φ16, Φ19, Φ22 and Φ25 mm cutouts, with momentary or latching action, ring or dot illumination, and screw or pin terminals.',
    image: '/images/solutions/metal-push-button/hero.jpg',
    imageAlt: 'Metal push buttons in 12, 16, 19, 22 and 25 mm cutouts',
  },
]
