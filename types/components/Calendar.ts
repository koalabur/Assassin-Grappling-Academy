interface Event {
  _uid: symbol;
  title: string;
  time: string;
  ampm: string;
  category: string;
}

export interface CalendarData {
  blok: {
    component: 'Calendar';
    title: string;
    monday?: Event[];
    tuesday?: Event[];
    wednesday?: Event[];
    thursday?: Event[];
    friday?: Event[];
    saturday?: Event[];
    sunday?: Event[];
  };
}
