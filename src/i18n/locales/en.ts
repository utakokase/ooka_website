import type { DeepPartial, Messages } from '../types';

/**
 * English.
 * ja.ts と同じ形で書きます。書いていないキーは日本語で表示されます。
 * 翻訳が揃ったら src/i18n/config.ts の ENABLED_LOCALES に 'en' を追加すると公開されます。
 */
export const en: DeepPartial<Messages> = {
  meta: {
    defaultTitle: 'Ooka LLC | Real Estate in Nakano, Tokyo (Sales, Rentals, Investment)',
    titleTemplate: '{page} | Ooka LLC',
  },
  common: {
    phoneLabel: 'Call us',
    callShort: 'Call',
    emailUs: 'Email us',
    viewDetails: 'View details',
    priceOnRequest: 'Price on request',
    photoComingSoon: 'Photos coming soon',
    menuOpen: 'Open menu',
    menuClose: 'Close menu',
    skipToContent: 'Skip to content',
    languageSwitcher: 'Language',
    supportedLanguages: 'Japanese, Chinese and English',
  },
  nav: {
    home: 'Home',
    properties: 'Properties',
    company: 'About us',
    contact: 'Contact',
    tsuchiya: 'TSUCHIYA Building',
  },
  propertyKinds: {
    sale: 'For sale',
    rent: 'For rent',
    owned: 'Our building',
  },
  // TODO: home, propertiesPage, propertyDetail, company, contact, properties などを翻訳
};
