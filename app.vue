<script setup>
import Rellax from "rellax";
import {useCommonStore} from '~/store/common.js';
import AppLoading from '~/components/utils/AppLoading.vue';
const commonStore = useCommonStore();
const { $loader, $toast } = useNuxtApp();
const appReady = ref(false);

onMounted(async () => {
  await Promise.all([
    commonStore.getCategories()
  ]);
  appReady.value = true;
  new Rellax('.rellax');
})
</script>

<template>
  <transition name="fade">
    <AppLoading v-if="!appReady"/>
  </transition>
  <transition>
    <NuxtLayout v-if="appReady">
      <NuxtPage />
    </NuxtLayout>
  </transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all .5s
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>
