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
  actions: [{ text: 'Book a demo', href: '/contact/', target: '_self', variant: 'primary' }],
};

export const footerData = {
  // small inline links under the site name (optional)
  secondaryLinks: [
    { text: 'Contact', href: '/contact/' },
    { text: 'About', href: '/about/' },
  ],

  // main columns
  links: [
    {
      title: 'TapRebook',
      links: [
        { text: 'About', href: '/about/' },
        { text: 'Contact', href: '/contact/' },
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
      ],
    },
  ],

  socialLinks: [
    { ariaLabel: 'WhatsApp', icon: 'tabler:brand-whatsapp', href: 'https://wa.me/15303018709' },
  ],

  footNote: `© ${new Date().getFullYear()} TapRebook. All rights reserved.`,
  theme: 'light', // keep the footer styled for light mode
};
