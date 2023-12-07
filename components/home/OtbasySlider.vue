<template>
  <div v-if="true" class="z-10 mt-[40px] lg:mt-[85px]">
    <carousel
        @init="_onSliderInit"
        :settings="settings"
        :breakpoints="breakpoints"
        :mouse-drag="true"
        :autoplay="8000"
        :touch-drag="true"
    >
      <slide v-for="(item, k) of otbasy" :key="k" v-show="isSliderReady">
        <div class="flex flex-col items-center lg:px-4">
          <div class="overflow-hidden" style="aspect-ratio: 9/16;">
            <img :src="item.image" class="w-full h-full object-cover object-top" :alt="item.name">
          </div>
          <h3 class="text-white font-semibold uppercase text-xl mt-3">
            {{ item.name }}
          </h3>
          <p class="text-white mt-2 lg:mt-5 text-center text-xs lg:text-xl">
            {{ item.description }}
          </p>
        </div>
      </slide>
    </carousel>
  </div>
</template>

<script setup>
import Image1 from '~/assets/images/otbasy/1.jpg';
import Image2 from '~/assets/images/otbasy/2.jpg';
import Image3 from '~/assets/images/otbasy/3.jpg';
import Image4 from '~/assets/images/otbasy/4.jpg';

const otbasy = reactive([
  {
    image: Image1,
    name: 'Серик Итыбаев',
    description: '1 место в номинации «Классический бодибилдинг, до 175 см», ' +
        'Абсолютный чемпион в номинации «Классический бодибилдинг», ' +
        '1 место в номинации «Физик классик, до 175 см», ' +
        'Абсолютный чемпион в номинации «Физик классик»'
  },
  {
    image: Image2,
    name: 'Андрей Соловьев',
    description: 'Официальный представитель бренда в Казахстане, руководитель сети магазинов «Iron Addicts»'
  },
  {
    image: Image3,
    name: 'Елена Бадареу',
    description: 'Пятикратный чемпион Казахстана в номинации фитнес-бикини\n'
  },
  {
    image: Image4,
    name: '❓',
    description: 'Стань частью нашей семьи!'
  }
]);

const isSliderReady = ref(false);
import 'vue3-carousel/dist/carousel.css';

const settings = ref({
  itemsToShow: 2,
  snapAlign: 'center',
  cursor: 'grab',
})

const breakpoints = ref({
  1: {
    itemsToShow: 1,
    snapAlign: 'left',
  },
  700: {
    itemsToShow: 1,
    snapAlign: 'left',
  },
  1024: {
    itemsToShow: 4,
    snapAlign: 'center',
  },
})

const _onSliderInit = () => {
  isSliderReady.value = true;
}
</script>

<style scoped>
.carousel__slide {
  @apply block;
}
</style>
