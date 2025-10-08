// Navigation for TapRebook

export const headerData = {
  links: [
    {
      text: 'Solutions',
      links: [
        { text: 'Reception', href: '/modules/reception/' },
        { text: 'Labs', href: '/modules/labs/' },
        { text: 'Pharma', href: '/modules/pharma/' },
        { text: 'DentalLab', href: '/modules/dentallab/' },
        { text: 'Stay', href: '/modules/stay/' },
        { text: 'Campus', href: '/modules/campus/' },
        { text: 'Queue', href: '/modules/queue/' },
      ],
    },
    { text: 'Pricing', href: '/pricing/' },
    { text: 'About', href: '/about/' },
    { text: 'Contact', href: '/contact/' },
  ],
  actions: [
    { text: 'Book a demo', href: '/contact/', target: '_self', variant: 'primary' },
  ],
};

export const footerData = {
  columns: [
    {
      title: 'TapRebook',
      links: [
        { text: 'Pricing', href: '/pricing/' },
        { text: 'Contact', href: '/contact/' },
      ],
    },
    {
      title: 'Modules',
      links: [
        { text: 'Reception', href: '/modules/reception/' },
        { text: 'Labs', href: '/modules/labs/' },
        { text: 'Pharma', href: '/modules/pharma/' },
        { text: 'DentalLab', href: '/modules/dentallab/' },
        { text: 'Stay', href: '/modules/stay/' },
        { text: 'Campus', href: '/modules/campus/' },
        { text: 'Queue', href: '/modules/queue/' },
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/91XXXXXXXXXX' },
  ],
  footNote: '© ' + new Date().getFullYear() + ' TapRebook. All rights reserved.',
};

