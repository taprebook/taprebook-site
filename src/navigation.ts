// src/navigation.ts
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
    { text: 'About', href: '/about/' },
    { text: 'Contact', href: '/contact/' },
  ],
  actions: [
    { text: 'Book a demo', href: '/contact/', target: '_self', variant: 'primary' },
  ],
};

// (Footer can stay as-is unless you want to remove Modules/Pricing there too)
// src/navigation.ts

export const footerData = {
  columns: [
    {
      title: 'TapRebook',
      links: [
        { text: 'Contact', href: '/contact/' },
        { text: 'About', href: '/about/' },
        { text: 'Modules', href: '/modules/' }, // keep or remove as you prefer
      ],
    },
    {
      title: 'Solutions',
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
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: '/privacy/' },
        { text: 'Terms of Service', href: '/terms/' },
        { text: 'Application & Data Security', href: '/security/' },
        // { text: 'Subprocessors', href: '/subprocessors/' }, // optional later
        // { text: 'Cookie Policy', href: '/cookies/' },       // optional later
      ],
    },
  ],
  socialLinks: [
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/919539231117' },
  ],
  footNote: `© ${new Date().getFullYear()} TapRebook. All rights reserved.`,
};

