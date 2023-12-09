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
            <div class="w-[106px] h-[106px] lg:w-[160px] lg:h-[160px] overflow-hidden inline-block flex-shrink-0">
              <img :src="item.image" alt="" class="w-full h-full object-contain">
            </div>
            <p class="font-medium text-left">
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
import {Carousel} from 'vue3-carousel';
import Service1 from '~/assets/images/services/1.svg';

const myCarousel = ref(null);
const isSliderReady = ref(false);

const services = reactive([
  {
    id: 1,
    title: 'Наличие на складе',
    description: 'Nomad Nutrition обеспечивает постоянное наличие своих позиций на складе. Это обеспечивает непрерывный доступ к выдающимся продуктам, разработанным для облегчения спортивной жизни и оздоровления всего организма. Готовьтесь к активному образу жизни вместе с Nomad Nutrition — вашим партнером в стремлении стать лучше.',
    image: Service1,
  },
  {
    id: 2,
    title: '4 вида сотрудничества',
    description: 'Мы ценим наших партнеров, обеспечивая особые условия сотрудничества с тренажерными залами, магазинами спортивного питания, фитнес-блогерами и тренерами. Развивайте свой бренд вместе с нами, обеспечьте себя эффективным и высококачественным спортивным питанием и вдохновляйте других заботиться о своем здоровье',
    image: Service1,
  },
  {
    id: 3,
    title: 'Маркетинговая поддержка',
    description: 'Партнерство с нами — это не просто предоставление продукции, это поддержка вашего бизнеса. Мы предлагаем мощную маркетинговую поддержку, включая персонализированные акции, материалы для продаж, участие в мероприятиях и продвижение в социальных сетях.',
    image: Service1,
  },
  {
    id: 4,
    title: '24 часа на отправку заказа',
    description: 'С Nomad Nutrition ваш заказ обрабатывается мгновенно! Мы гарантируем отправку в течение 24 часов, обеспечивая оперативную доставку. С нами вы не только получаете выгодные предложения, но и экспресс-сервис, чтобы наше сотрудничество было максимально удобным и беззаботным.',
    image: Service1,
  },
  {
    id: 5,
    title: 'Никакого демпинга',
    description: 'Nomad Nutrition гордится политикой демпинга. Мы ценим наших клиентов и предоставляем продукты высочайшего качества по честным ценам. Наш бренд придерживается принципов прозрачности и честности в отношениях с партнерами и потребителями, а также продуктов, которые соответствуют стандартам без компромиссов в ценовой политике.',
    image: Service1,
  },
  {
    id: 6,
    title: 'Быстрое расширение линейки',
    description: 'Nomad Nutrition продолжает удивлять своих клиентов, расширяя ассортимент спортивного питания. Новые продукты разрабатываются с учетом последних тенденций и научных исследований. Это позволяет нам предлагать не только разнообразие, но и инновационные решения для поддержания здоровья и достижения фитнес-целей.',
    image: Service1,
  },
]);

const settings = ref({
  itemsToShow: 1,
  snapAlign: 'start',
  cursor: 'grab',
});

const slickSettings = {
  'dots': true,
  'focusOnSelect': true,
  'infinite': true,
  'speed': 500,
  'slidesToShow': 3,
  'slidesToScroll': 3,
  'touchThreshold': 5,
};

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
    itemsToShow: 3,
    snapAlign: 'start',
  },
});

const _onSliderInit = () => {
  isSliderReady.value = true;
};
const next = () => {
  myCarousel.value.next();
};

const prev = () => {
  myCarousel.value.prev();
};
</script>

<style scoped>
.carousel__slide {
  @apply min-h-[420px] lg:min-h-[550px];
}

.service__card {
  min-height: 200px;
  @apply w-full;
  max-width: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  /* @apply py-[34px] lg:py-[52px] px-4 lg:px-5*/
  @apply py-[20px] lg:py-[30px];
  @apply flex flex-col items-start;
  @apply gap-y-5 lg:gap-y-6;
  @apply text-white text-sm lg:text-xl;
  @apply px-4 lg:px-[26px];
}
</style>
