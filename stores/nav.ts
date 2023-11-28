import { defineStore } from 'pinia';

// eslint-disable-next-line import/prefer-default-export
export const useNavStore = defineStore('nav', () => {
  const showNav = ref(false);

  function closeNav() {
    showNav.value = false;
  }

  function openNav() {
    showNav.value = true;
  }

  function toggleNav() {
    showNav.value = !showNav.value;
  }

  return { showNav, closeNav, openNav, toggleNav };
});
