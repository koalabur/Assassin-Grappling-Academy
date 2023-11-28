import type { AssetStoryblok } from '../Storyblok';

export interface BasicHeroData {
  blok: {
    component: 'BasicHero';
    image: AssetStoryblok;
    title: string;
    subtitle: string;
    textPosition: 'left' | 'right' | 'center';
    backgroundImage: AssetStoryblok;
  };
}
