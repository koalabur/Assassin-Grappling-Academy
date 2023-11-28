import type { AssetUrlLinkStoryblok } from '../Storyblok';

interface SingleCard {
  component: 'singleCard';
  _uid: symbol;
  title: string;
  subtitle: string;
  image: AssetUrlLinkStoryblok;
}

export interface VerticalCardsData {
  blok: {
    component: 'VerticalCards';
    cards: SingleCard[];
  };
}
