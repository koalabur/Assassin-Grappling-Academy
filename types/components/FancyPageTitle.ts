import type { RichtextStoryblok } from '../Storyblok';

export interface FancyPageTitleData {
  blok: {
    component: 'FancyPageTitle';
    title: string;
    subtitle: string;
    body: RichtextStoryblok;
  };
}
