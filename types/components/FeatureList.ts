import type { RichtextStoryblok } from '../Storyblok';

interface Feature {
  _uid: symbol;
  title: string;
  body: RichtextStoryblok;
}

export interface FeatureListData {
  blok: {
    component: 'FeatureList';
    title: string;
    feature: Feature[];
  };
}
