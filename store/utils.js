import { defineStore } from 'pinia';

export const useUtilsStore = defineStore('utils', {
  state: () => ({
    loading: false,
    currentToast: null,
  }),
  actions: {
    toggleLoading (key = null) {
      if (key) {
        this.loading = key;
      } else {
        this.loading = !this.loading;
      }
    },
    showToast (toast = {}) {
      this.currentToast = toast;
    }
  }
})
