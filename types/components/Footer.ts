import type { AssetStoryblok, AssetUrlLinkStoryblok } from '../Storyblok';

export interface Footer {
  component: 'footer';
  logo: AssetStoryblok;
  phone: string;
  email: string;
  address: string;
  googleMapsLink: string;
  socialMedia: {
    component: 'media';
    _uid: string;
    link: AssetUrlLinkStoryblok;
    icon: AssetStoryblok;
  }[];
  sunday: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
}
