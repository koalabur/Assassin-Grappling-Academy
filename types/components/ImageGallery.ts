import type { AssetStoryblok } from '../Storyblok';

export interface ImageGalleryData {
  blok: {
    component: 'ImageGallery';
    images: AssetStoryblok[];
  };
}
