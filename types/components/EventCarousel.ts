import type {
  RichtextStoryblok,
  LinkStoryblok,
  AssetUrlLinkStoryblok,
} from '../Storyblok';

interface EventCarouselItem {
  component: 'eventcarouselItem';
  _uid: symbol;
  title: string;
  subtitle?: string;
  body: RichtextStoryblok;
  buttonLink: LinkStoryblok;
  buttonText: string;
  image: AssetUrlLinkStoryblok;
}

export interface EventCarouselData {
  blok: {
    component: 'EventCarousel';
    items: EventCarouselItem[];
  };
}
