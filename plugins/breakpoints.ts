// eslint-disable-next-line import/no-extraneous-dependencies
import { useBreakpoints } from '@vueuse/core';

export default defineNuxtPlugin(() => {
  const breakpoints = useBreakpoints({
    sm: 480,
    md: 768,
    lg: 1024,
    xl: 1366,
  });

  return {
    provide: {
      sm: breakpoints.greater('sm'),
      md: breakpoints.greater('md'),
      lg: breakpoints.greater('lg'),
      xl: breakpoints.greater('xl'),
    },
  };
});
