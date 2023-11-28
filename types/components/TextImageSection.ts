import type {
  RichtextStoryblok,
  AssetStoryblok,
  LinkStoryblok,
} from '../Storyblok';

export interface TextImageSectionData {
  blok: {
    id?: string;
    component: 'TextImageSection';
    image: AssetStoryblok;
    useBackgroundColor: boolean;
    useLightOrDark: 'light' | 'dark';
    title?: string;
    body: RichtextStoryblok;
    ctaText: string;
    ctaLink: LinkStoryblok;
    orientation: boolean;
  };
}
