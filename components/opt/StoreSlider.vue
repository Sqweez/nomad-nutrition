<template>
  <div class="z-10 relative max-w-full" v-show="isSliderReady">
    <carousel
        @init="_onSliderInit"
        :mouse-drag="true"
        :autoplay="8000"
        :touch-drag="true"
        :wrap-around="true"
        :settings="settings"
        :breakpoints="breakpoints"
        ref="myCarousel"
    >
      <slide v-for="(slide, idx) of stores" :key="slide.id" class="flex flex-col items-center cursor-pointer" @click="_onShow(idx)">
        <div class="flex-1 w-full" >
          <img :src="slide.image" alt="Склад" class="w-full h-full object-contain">
        </div>
      </slide>
    </carousel>
    <div
        class="text-white absolute top-1/2 -translate-y-1/2 left-0 right-0 lg:-left-[41px] lg:-right-[41px] flex justify-between pointer-events-none">
      <button @click="prev" class="arrow__carousel pointer-events-auto">
        <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-3.49691e-07 7L6.75 0.0717961L6.75 13.9282L-3.49691e-07 7Z" fill="white"/>
        </svg>
      </button>
      <button @click="next" class="arrow__carousel pointer-events-auto">
        <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M7 7L0.249998 13.9282L0.249999 0.0717966L7 7Z" fill="white"/>
        </svg>
      </button>
    </div>
    <client-only>
      <vue-easy-lightbox
          class="z-20"
          :visible="visibleRef"
          :imgs="images"
          @hide="_onGalleryHide"
      />
    </client-only>
  </div>
</template>

<script setup>
import { Carousel } from 'vue3-carousel';
const myCarousel = ref(null);
const isSliderReady = ref(false);
const visibleRef = ref(false);
const indexRef = ref(0);

import Store1 from '~/assets/images/cooperation/store-1.jpg';
import Store2 from '~/assets/images/cooperation/store-2.jpg';
import Store3 from '~/assets/images/cooperation/store-3.jpg';
import Store4 from '~/assets/images/cooperation/store-4.jpg';

const stores = ref([
  {
    id: 1,
    image: Store1
  },
  {
    id: 2,
    image: Store2
  },
  {
    id: 3,
    image: Store3
  },
  {
    id: 4,
    image: Store4
  },
]);

const images = computed(() => {
  return stores.value.map(s => s.image);
});

const _onGalleryHide = () => {
  visibleRef.value = false;
}

const _onShow = (idx) => {
  indexRef.value = idx;
  visibleRef.value = true;
}

const settings = ref({
  itemsToShow: 2,
  snapAlign: 'start',
  cursor: 'grab',
})

const breakpoints = ref({
  1: {
    itemsToShow: 1,
    snapAlign: 'start',
  },
  700: {
    itemsToShow: 1,
    snapAlign: 'center',
  },
  1024: {
    itemsToShow: 4,
    snapAlign: 'start',
  },
})

const next = () => {
  myCarousel.value.next()
}

const prev = () => {
  myCarousel.value.prev();
}

const _onSliderInit = () => {
  isSliderReady.value = true;
}

</script>

<style scoped>
button.arrow__carousel {
  background: rgba(0, 0, 0, .5);
  @apply w-10 h-10 lg:w-[82px] lg:h-[82px];
  @apply rounded-full flex items-center justify-center;
}

.carousel__slide {
  /*
  @apply w-full h-[259px] lg:h-[442px];
  */
  @apply lg:px-[15px];
}
</style>
