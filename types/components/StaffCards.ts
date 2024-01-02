import type { RichtextStoryblok, AssetUrlLinkStoryblok } from '../Storyblok';

interface StaffCard {
  component: 'StaffCard';
  _uid: symbol;
  firstName: string;
  lastName: string;
  biography: RichtextStoryblok;
  image?: AssetUrlLinkStoryblok;
}

export interface StaffCardsData {
  blok: {
    component: 'StaffCards';
    staffCard: StaffCard[];
  };
}
