export interface AssetStoryblok {
  alt?: string;
  copyright?: string;
  id: number;
  filename: string;
  name: string;
  title?: string;
  focus?: string;
  [k: string]: any;
}

export interface LinkStoryblok {
  id?: string;
  cached_url?: string;
  anchor?: string;
  url?: string;
  linktype?: 'story';
  target?: string;
  story?: {
    name: string;
    created_at?: string;
    published_at?: string;
    target?: string;
    id: number;
    uuid: string;
    content?: {
      [k: string]: any;
    };
    url: string;
    slug: string;
    full_slug: string;
    sort_by_date?: null | string;
    position?: number;
    tag_list?: string[];
    is_startpage?: boolean;
    parent_id?: null | number;
    meta_data?: null | {
      [k: string]: any;
    };
    group_id?: string;
    first_published_at?: string;
    release_id?: null | number;
    lang?: string;
    path?: null | string;
    alternates?: any[];
    default_full_slug?: null | string;
    translated_slugs?: null | any[];
    [k: string]: any;
  };
  [k: string]: any;
}

export interface EmailLinkStoryblok {
  email?: string;
  linktype?: 'email';
  [k: string]: any;
}

export interface AssetUrlLinkStoryblok {
  url?: string;
  cached_url?: string;
  anchor?: string;
  target?: string;
  linktype?: 'asset' | 'url';
  [k: string]: any;
}

export interface RichtextStoryblok {
  type: string;
  content?: RichtextStoryblok[];
  marks?: RichtextStoryblok[];
  attrs?: any;
  text?: string;
  [k: string]: any;
}
