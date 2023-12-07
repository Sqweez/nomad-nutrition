<template>
  <div class="mx-3 lg:px-0">
    <carousel
        v-if="true"
        @init="_onSliderInit"
        :mouse-drag="true"
        :autoplay="8000"
        :touch-drag="true"
        :wrap-around="true"
        :settings="settings"
        :breakpoints="breakpoints"
        ref="myCarousel"
        class="block"
    >
      <slide
          v-for="(item, k) of services"
          :key="k"
          v-show="isSliderReady"
          style="overflow: hidden;"
          class="pr-[12px] lg:pr-[27px]"
      >
        <div class="w-full h-full relative">
          <div class="service__card absolute inset-0">
            <div class="w-[106px] h-[106px] lg:w-[160px] lg:h-[160px] overflow-hidden inline-block">
              <img :src="item.image" alt="" class="w-full h-full object-contain">
            </div>
            <p class="font-medium">
              {{ item.title }}
            </p>
            <p class="text-left">
              {{ item.description }}
            </p>
          </div>
        </div>

      </slide>
    </carousel>
  </div>
</template>

<script setup>
import { Carousel } from 'vue3-carousel';
import Service1 from '~/assets/images/services/1.svg';
const myCarousel = ref(null);
const isSliderReady = ref(false);

const services = reactive([
  {
    id: 1,
    title: 'Наличие на складе',
    description: 'один из самых крутых по составу термогеников для жиросжигания, результат которого клиент почувствует уже после 5 дня приема. Ускоряет метаболизм',
    image: Service1,
  },
  {
    id: 2,
    title: 'Наличие на складе',
    description: 'один из самых крутых по составу термогеников для жиросжигания, результат которого клиент почувствует уже после 5 дня приема. Ускоряет метаболизм',
    image: Service1,
  },
  {
    id: 3,
    title: 'Наличие на складе',
    description: 'один из самых крутых по составу термогеников для жиросжигания, результат которого клиент почувствует уже после 5 дня приема. Ускоряет метаболизм',
    image: Service1,
  },
  {
    id: 4,
    title: 'Наличие на складе',
    description: 'один из самых крутых по составу термогеников для жиросжигания, результат которого клиент почувствует уже после 5 дня приема. Ускоряет метаболизм',
    image: Service1,
  },
]);

const settings = ref({
  itemsToShow: 1,
  snapAlign: 'start',
  cursor: 'grab',
});

const slickSettings = {
  "dots": true,
  "focusOnSelect": true,
  "infinite": true,
  "speed": 500,
  "slidesToShow": 3,
  "slidesToScroll": 3,
  "touchThreshold": 5
}

const breakpoints = ref({
  1: {
    itemsToShow: 1.5,
    snapAlign: 'start',
  },
  700: {
    itemsToShow: 1,
    snapAlign: 'start',
  },
  1024: {
    itemsToShow: 4,
    snapAlign: 'start',
  },
});

const _onSliderInit = () => {
  isSliderReady.value = true;
}
const next = () => {
  myCarousel.value.next();
};

const prev = () => {
  myCarousel.value.prev();
};
</script>

<style scoped>
.carousel__slide {
  @apply min-h-[332px] lg:min-h-[484px]
}
.service__card {
  min-height: 200px;
  @apply w-full;
  max-width: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
 /* @apply py-[34px] lg:py-[52px] px-4 lg:px-5*/
  @apply py-[34px] lg:py-[52px];
  @apply flex flex-col items-start;
  @apply gap-y-5 lg:gap-y-[33px];
  @apply text-white text-sm lg:text-xl;
  @apply px-4 lg:px-[26px];
}
</style>
