import { useUtilsStore } from "../store/utils";
export default defineNuxtPlugin((nuxtApp) => {

  const utilsStore = useUtilsStore();

  nuxtApp.provide('loader', {
    enable: function() {
      utilsStore.toggleLoading(true);
    },
    disable: function() {
      utilsStore.toggleLoading(false);
    },
    toggle: function() {
      utilsStore.toggleLoading();
    }
  });
})
