import type { RichtextStoryblok } from '../Storyblok';

export interface Notice {
  title: string;
  subtitle: string;
  body: RichtextStoryblok;
  button: string;
  useNotice: boolean;
}
