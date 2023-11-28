import type { AssetStoryblok, LinkStoryblok } from '../Storyblok';

export interface HeroData {
  blok: {
    title: string;
    subtitle: string;
    buttonText: string;
    buttonLink: LinkStoryblok;
    secondaryButtonText: string;
    secondaryButtonLink: LinkStoryblok;
    desktopBackgroundImage: AssetStoryblok;
    highlights?: {
      component: 'singleHighlight';
      _uid: string;
      image: AssetStoryblok;
      title: string;
      buttonText: string;
      buttonLink: LinkStoryblok;
    }[];
  };
}
