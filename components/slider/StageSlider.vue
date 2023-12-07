<template>
  <div class="hidden lg:mt-[61px] lg:grid grid-cols-3 gap-16">
    <div
        v-for="(stage, key) of stages"
        :key="stage.title"
        class="stage__card"
    >
      <div class="absolute inset-0 z-0">
        <img :src="stage.image" :alt="stage.title" class="w-full h-full object-cover no-interaction">
      </div>
      <div class="flex items-center z-10">
        <div class="stage__num">
          {{ key + 1 }}
        </div>
        <div class="text-left flex-1 text-white text-sm lg:text-lg px-3 lg:px-4">
          {{ stage.title }}
        </div>
      </div>
    </div>
  </div>
  <div class="z-10 relative max-w-full w-full mt-[44px] block lg:hidden">
    <carousel
        :mouse-drag="true"
        :autoplay="8000"
        :touch-drag="true"
        :wrap-around="false"
        :settings="settings"
        :breakpoints="breakpoints"
        ref="myCarousel"
        class="block"
    >
      <slide
          v-for="(stage, key) of stages"
          :key="key"
      >
        <div class="absolute inset-0 z-0">
          <img :src="stage.image" :alt="stage.title" class="w-full h-full object-cover no-interaction">
        </div>
        <div class="absolute inset-x-0 bottom-0 flex items-center z-10">
          <div class="stage__num">
            {{ key + 1 }}
          </div>
          <div class="flex-1 text-white text-sm lg:text-lg px-3 lg:px-4 text-left">
            {{ stage.title }}
          </div>
        </div>
      </slide>
    </carousel>
    <div class="text-white absolute top-1/2 -translate-y-1/2 left-4 right-4 lg:-left-[41px] lg:-right-[41px] flex justify-between">
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
import Stage1 from '~/assets/images/stages/1.jpg';
import Stage2 from '~/assets/images/stages/2.jpg';
import Stage3 from '~/assets/images/stages/3.jpg';
import Stage4 from '~/assets/images/stages/4.jpg';
import Stage5 from '~/assets/images/stages/5.jpg';
import Stage6 from '~/assets/images/stages/6.jpg';
import Stage7 from '~/assets/images/stages/7.jpg';
import Stage8 from '~/assets/images/stages/8.jpg';
import Stage9 from '~/assets/images/stages/9.jpg';
import { Carousel, Slide} from 'vue3-carousel';

const myCarousel = ref(null);
const stages = reactive([
  {
    title: 'Изготовление банки и крышки',
    image: Stage1,
  },
  {
    title: 'Производство сырья',
    image: Stage2,
  },
  {
    title: 'Фасовка готового сырья в тары',
    image: Stage3,
  },
  {
    title: 'Проверка точности дозирования',
    image: Stage4,
  },
  {
    title: 'Вкладывание мерных ложек и силикагеля (при необходимости)',
    image: Stage5,
  },
  {
    title: 'Наклейка герметичной пленки и этикетки',
    image: Stage6,
  },
  {
    title: 'Отправка готовой партии во временный склад',
    image: Stage7,
  },
  {
    title: 'Транспортировка со склада производства на склад реализации',
    image: Stage8,
  },
  {
    title: 'Перемещение во все магазины наших партнеров',
    image: Stage9,
  },
]);

const settings = ref({
  itemsToShow: 1,
  snapAlign: 'start',
  cursor: 'grab',
})

const breakpoints = ref({
  1: {
    itemsToShow: 1,
    snapAlign: 'start',
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
</script>

<style scoped lang="scss">
.stage__card {
  @apply relative flex items-end bg-black;
  width: 100%;
  height: 100%;
  aspect-ratio: 424/251;
  &:nth-child(1)::after,
  &:nth-child(2)::after,
  &:nth-child(4)::after,
  &:nth-child(5)::after,
  &:nth-child(7)::after,
  &:nth-child(8)::after {
    position: absolute;
    content: url("/images/stage-arrow.svg");
    @apply hidden lg:inline-block;
    right: -32px;
    top: 50%;
    transform: translate(50%, -50%);
  }
}

.stage__num {
  @apply bg-accent flex items-center justify-center;
  @apply w-[48px] h-[46px] lg:w-[61px] lg:h-[58px];
  @apply text-white font-bold text-[38px] lg:text-[48px];
}

.carousel__slide {
  @apply w-full h-full max-w-full relative;
  @apply flex items-end bg-black;
  aspect-ratio: 338 / 200;
}

</style>
