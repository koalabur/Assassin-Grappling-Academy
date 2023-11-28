import { useNavStore } from '@/stores/nav';

export default defineNuxtRouteMiddleware(() => {
  const store = useNavStore();
  store.closeNav();
  if (process.client) {
    document.body.style.overflow = 'auto';
  }
});
