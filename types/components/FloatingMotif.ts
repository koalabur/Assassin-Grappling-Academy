export interface FloatingMotifData {
  blok: {
    component: 'FloatingMotif';
    leftOrRight: 'left' | 'right';
    location: number;
    mobileLocation?: number;
    useMobileLocation: boolean;
    usePercentOrPixel: '%' | 'px';
    showOnMobile: boolean;
  };
}
