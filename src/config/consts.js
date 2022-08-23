import { appConfig } from '@/config/appConfig'

export const CONSTS = {
  NavbarLinks: [
    {
      key: 'navbar:home',
      href: '/',
    },
    {
      key: 'navbar:about',
      href: '/#about',
    },
    {
      key: 'navbar:features',
      href: '/#features',
    },
    {
      key: 'navbar:price',
      href: '/#price',
    },
    {
      key: 'navbar:contact',
      href: '/#contact',
    },
    {
      key: 'navbar:signUp',
      href: appConfig.siteUrl,
      type: 'button',
    },
  ],
  Locales: [
    {
      key: 'sr',
      flag: '/img/f-sr.svg',
    },
    {
      key: 'en',
      flag: '/img/f-gb.svg',
    },
  ],
}
