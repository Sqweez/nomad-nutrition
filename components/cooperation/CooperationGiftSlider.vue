<template>
  <div class="z-10 relative max-w-full">
    <carousel
        @init="_onSliderInit"
        :mouse-drag="true"
        :autoplay="8000"
        :touch-drag="true"
        :wrap-around="false"
        :settings="settings"
        :breakpoints="breakpoints"
        ref="myCarousel"
    >
      <slide v-for="slide of gifts" :key="slide.id" class="flex flex-col items-center">
        <div class="flex-1 w-full" style="height: 80%;">
          <img :src="slide.image" :alt="slide.name" class="w-full h-full object-contain">
        </div>
        <p class="text-white uppercase text-sm lg:text-lg flex-shrink-0 mt-2">
          {{ slide.name }}
        </p>
      </slide>
    </carousel>
    <div class="text-white absolute top-1/2 -translate-y-1/2 left-0 right-0 lg:-left-[41px] lg:-right-[41px] flex justify-between">
      <button @click="prev" class="arrow__carousel">
        <svg width="7" height="14" viewBox="0 0 7 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M-3.49691e-07 7L6.75 0.0717961L6.75 13.9282L-3.49691e-07 7Z" fill="white"/>
        </svg>
      </button>
      <button @click="next" class="arrow__carousel">
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
import 'vue3-carousel/dist/carousel.css';
import Gift1 from '~/assets/images/cooperation/gift_1.png';
import Gift2 from '~/assets/images/cooperation/gift_2.png';
import Gift3 from '~/assets/images/cooperation/gift_3.png';
import Gift4 from '~/assets/images/cooperation/gift_4.png';

const gifts = ref([
  {
    id: 1,
    name: 'Футболка',
    image: Gift1
  },
  {
    id: 2,
    name: 'Кепка',
    image: Gift2
  },
  {
    id: 3,
    name: 'Шейкер',
    image: Gift3
  },
  {
    id: 4,
    name: 'Шоппер',
    image: Gift4
  },
]);

const settings = ref({
  itemsToShow: 2,
  snapAlign: 'start',
  cursor: 'grab',
})

const breakpoints = ref({
  1: {
    itemsToShow: 2,
    snapAlign: 'start',
  },
  700: {
    itemsToShow: 2,
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
  @apply w-full h-[259px] lg:h-[442px];
  @apply lg:px-[27px];
  //margin-right: 27px;
}

@media (max-width: 700px) {
  .carousel__slide {
  }
}
</style>
