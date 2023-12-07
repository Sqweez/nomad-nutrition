<template>
  <div class="z-10 relative" v-show="isSliderReady">
    <carousel :items-to-show="1" :mouse-drag="true" :autoplay="3000" :touch-drag="true" :wrap-around="false" ref="myCarousel" @init="_onInit">
      <slide v-for="_ of slides" :key="_">
        <img src="~/assets/images/slider/1.webp" alt="">
      </slide>
    </carousel>
    <div v-if="slides.length > 1" class="text-white absolute top-1/2 -translate-y-1/2 left-0 right-0 lg:-left-[41px] lg:-right-[41px] flex justify-between">
      <button @click="prev">
        <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-3.49691e-07 7L6.75 0.0717961L6.75 13.9282L-3.49691e-07 7Z" fill="white"/>
        </svg>
      </button>
      <button @click="next">
        <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 7L0.249998 13.9282L0.249999 0.0717966L7 7Z" fill="white"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { Carousel } from 'vue3-carousel';
const myCarousel = ref(null);
const isSliderReady = ref(false);

const slides = reactive([
    1,
]);

const next = () => {
  myCarousel.value.next()
}

const prev = () => {
  myCarousel.value.prev();
}

const _onInit = () => {
  isSliderReady.value = true;
}

</script>

<style scoped>
button {
  background: rgba(0, 0, 0, .5);
  @apply w-10 h-10 lg:w-[82px] lg:h-[82px];
  @apply rounded-full flex items-center justify-center;
}
</style>
