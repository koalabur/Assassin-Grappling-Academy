import type {
  AssetStoryblok,
  AssetUrlLinkStoryblok,
  LinkStoryblok,
} from '../Storyblok';

type NavMenuData = { name: string; _uid: string; pageLink: LinkStoryblok };

export type NavMenu = NavMenuData[];

export type Logo = AssetStoryblok;

type SocialMediaData = {
  component: 'media';
  _uid: string;
  link: AssetUrlLinkStoryblok;
  icon: AssetStoryblok;
};

export type SocialMedia = SocialMediaData[];

export type HeaderCta = AssetUrlLinkStoryblok & { text: string };

export type BusinessInfo = {
  address: string;
  googleMapsLink: string;
  businessNumber: string;
};
