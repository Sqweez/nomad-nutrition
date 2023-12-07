import { defineStore } from 'pinia';
import { markRaw } from 'vue';

export const useModal = defineStore('modal', {
  state: () => ({
    isOpen: false,
    view: {},
  }),
  actions: {
    open (view) {
      this.isOpen = true;
      this.view = markRaw(view);
    },
    close () {
      this.isOpen = false;
      this.view = {};
    }
  }
})
