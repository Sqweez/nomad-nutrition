<template>
  <transition name="fade" appear>
    <div v-if="loading" class="loader__container">
      <span class="loading loading-ring loading-lg"></span>
      <div class="mt-4 text-white font-semibold text-center pointer-events-none appearance-none select-none">
        <p>Пожалуйста, подождите...</p>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { useScrollLock } from '@vueuse/core';
import { useUtilsStore } from '~/store/utils.js';

const utilsStore = useUtilsStore();
const { loading } = storeToRefs(utilsStore);
const html = ref(document.querySelector('html'));
const isScrollLocked = useScrollLock(html);

watch(loading, (value) => {
  isScrollLocked.value = !!value;
}, {
  immediate: true
})

</script>

<style scoped lang="scss">
.loader__container {
  background-color: rgba(0, 0, 0, .6);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;;
}
.loader-2 {
  display: block;
  height: 64px;
  width: 64px;
  -webkit-animation: loader-2-1 3s linear infinite;
  animation: loader-2-1 3s linear infinite;
}
@-webkit-keyframes loader-2-1 {
  0%   { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}
@keyframes loader-2-1 {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.loader-2 span {
  display: block;
  position: absolute;
  top: 0; left: 0;
  bottom: 0; right: 0;
  margin: auto;
  height: 64px;
  width: 64px;
  clip: rect(32px, 64px, 64px, 0);
  -webkit-animation: loader-2-2 1.5s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
  animation: loader-2-2 1.5s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
}
@-webkit-keyframes loader-2-2 {
  0%   { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}
@keyframes loader-2-2 {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.loader-2 span::before {
  content: "";
  display: block;
  position: absolute;
  top: 0; left: 0;
  bottom: 0; right: 0;
  margin: auto;
  height: 64px;
  width: 64px;
  border: 5px solid transparent;
  border-top: 5px solid #FFF;
  border-radius: 50%;
  -webkit-animation: loader-2-3 1.5s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
  animation: loader-2-3 1.5s cubic-bezier(0.770, 0.000, 0.175, 1.000) infinite;
}
@-webkit-keyframes loader-2-3 {
  0%   { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}
@keyframes loader-2-3 {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
.loader-2 span::after {
  content: "";
  display: block;
  position: absolute;
  top: 0; left: 0;
  bottom: 0; right: 0;
  margin: auto;
  height: 64px;
  width: 64px;
  border: 5px solid rgba(255, 255, 255, .5);
  border-radius: 50%;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

</style>
