import type { AssetStoryblok } from '../Storyblok';

interface singleItem {
  component: 'singleItem';
  _uid: symbol;
  title: string;
  image: AssetStoryblok;
  subtitle: string;
}

export interface ItemGalleryData {
  blok: {
    component: 'ItemGallery';
    item: singleItem[];
  };
}
