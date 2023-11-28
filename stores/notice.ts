import { defineStore } from 'pinia';

// eslint-disable-next-line import/prefer-default-export
export const useNoticeStore = defineStore('notice', () => {
  const visible = ref(false);

  function visibleChange(payload) {
    visible.value = payload;
  }

  function closeNotice() {
    visible.value = false;
  }

  return { visible, visibleChange, closeNotice };
});
