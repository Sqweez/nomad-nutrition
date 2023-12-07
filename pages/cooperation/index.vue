<template>
  <section id="#cooperation" class="relative pb-[100px] lg:pb-[400px]">
    <div class="absolute inset-x-0 top-0 lg:-top-[7%] no-interaction z-0">
      <img
          class="w-full"
          src="~/assets/images/cooperation/cooperation-page-background.webp"
          alt="Background"
          srcset="
                ~/assets/images/cooperation/cooperation-page-background-mobile.webp 700w,
                ~/assets/images/cooperation/cooperation-page-background.webp
              "
      >
    </div>
    <div class="hidden lg:block absolute -top-[350px] right-0 no-interaction">
      <img src="~/assets/images/backgrounds/bg-catalog-smoke.png" alt="">
    </div>
    <div class="hidden lg:block absolute top-1/2 left-0 no-interaction">
      <img src="~/assets/images/backgrounds/cooperation-smoke.png" alt="">
    </div>
    <div class="hidden lg:block absolute rellax right-0 no-interaction" data-rellax-speed="-1">
      <img src="~/assets/images/parallax/3.webp" alt="">
    </div>
    <div class="hidden lg:block absolute rellax left-0 no-interaction z-1" data-rellax-speed="-1">
      <img src="~/assets/images/parallax/5.webp" alt="">
    </div>
    <div class="hidden lg:block rellax absolute z-1 right-[117px] no-interaction bottom-[100px] w-[140px]"
         data-rellax-speed="-1">
      <img src="~/assets/images/parallax/1.webp" alt="Parallax" class="w-full h-full object-contain filter blur-[2px]">
    </div>
    <page-wrapper class="px-3 relative z-10">
      <div class="lg:max-w-[750px] mx-auto">
        <h1 class="font-medium text-white text-[30px] lg:text-[70px] uppercase py-3 overflow-hidden text-center">
          <span class="text-accent">Сотрудничество</span> для фитнес залов
        </h1>
      </div>
      <div class="flex flex-col items-center text-white lg:mt-[160px]">
        <p class="text-sm lg:text-[32px] uppercase font-light">
          Условия скидок при закупе:
        </p>
        <div class="flex flex-col gap-y-4 mt-5 lg:mt-[44px]">
          <p class="text__conditions">
            от 100 000 тнг - <span>20%</span>
          </p>
          <p class="text__conditions">
            от 300 000 тнг - <span>25%</span>
          </p>
          <p class="text__conditions">
            от 500 000 тнг - <span>30%</span>
          </p>
        </div>
      </div>
      <div class="mt-[50px] lg:mt-[85px] flex flex-col lg:flex-row gap-y-10">
        <div class="flex-1 cooperation__advantage">
          <h4>
            nomad otbasy
          </h4>
          <h5>
            С нашей стороны
          </h5>
          <div class="adv__container">
            <span v-for="(item, key) of nomadOtbasyAdvs" :key="`otbasy-${key}`" class="adv__item">
              <svg class="hidden md:block" width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 9L0.5 0.339745L0.500001 17.6603L11 9Z" fill="#E63534"/>
              </svg>
              <svg class="block md:hidden" width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 6.5L0.25 0.870835L0.250001 12.1292L7 6.5Z" fill="#E63534"/>
              </svg>
              <span class="font-light">
                {{ item }}
              </span>
            </span>
          </div>
        </div>
        <div class="flex-1 cooperation__advantage">
          <h4>
            вы
          </h4>
          <h5>
            С вашей стороны
          </h5>
          <div class="adv__container">
            <span v-for="(item, key) of yoursAdvs" :key="`your-${key}`" class="adv__item">
              <svg class="hidden md:block" width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 9L0.5 0.339745L0.500001 17.6603L11 9Z" fill="#E63534"/>
              </svg>
              <svg class="block md:hidden" width="7" height="13" viewBox="0 0 7 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 6.5L0.25 0.870835L0.250001 12.1292L7 6.5Z" fill="#E63534"/>
              </svg>
              <span class="font-light">
                {{ item }}
              </span>
            </span>
          </div>
        </div>
      </div>
      <div class="mt-[62px] lg:mt-[150px]">
        <div class="video overflow-hidden cursor-pointer">
          <img src="~/assets/images/cooperation/cooperation_video.jpg" alt="" class="w-full h-full object-cover">
        </div>
      </div>
      <div class="flex justify-center mt-[46px] lg:mt-[100px]">
        <a href="https://t.me/andrplaz" class="button-hover">
          Связаться по сотрудничеству
        </a>
      </div>
      <div class="mt-[62px] lg:mt-[155px]">
        <p class="text-white text-center uppercase font-medium text-[32px] lg:text-[70px]">
          подарки
        </p>
        <div class="mt-[46px] lg:mt-[55px]">
          <lazy-cooperation-gift-slider />
        </div>
      </div>
    </page-wrapper>
  </section>
</template>

<script>
import Rellax from "rellax";
import PageWrapper from "~/components/wrapper/PageWrapper.vue";

definePageMeta({
  name: 'Сотрудничество',
  keepalive: true,
})
export default {
  components: {PageWrapper},
  data: () => ({
    nomadOtbasyAdvs: [
      'Скидки',
      'Товар на проведение 1 дегустации в месяц',
      'Товар на проведение 1 розыгрыша в Instagram в месяц',
      'Подарки от бренда каждый месяц'
    ],
    yoursAdvs: [
      'Проведение 1 дегустации с нашими продуктами в месяц и фото-отчет в месяц (следующая партия продуктов на дегустацию высылается через 30 дней с момента получения фото-отчета)',
      'Проведение 1 розыгрыша в Инстаграм с нашей продукцией в месяц',
      '2 отметки в сторис Инстаграм в месяц'
    ]
  }),
  methods: {},
  computed: {},
  mounted() {
    new Rellax('.rellax')
  }
}
</script>

<style scoped>
.text__conditions {
  @apply font-medium;
  @apply text-[24px] lg:text-[70px];
}

.text__conditions span {
  @apply text-accent;
}

.cooperation__advantage {
  @apply flex-1;
}

.cooperation__advantage h4 {
  @apply font-semibold uppercase text-accent;
  @apply text-[24px] lg:text-[32px];
}

.cooperation__advantage h5 {
  @apply mt-4 text-white relative inline-block;
  @apply text-[24px] lg:text-[32px];
}

.cooperation__advantage h5:after {
  content: '';
  position: absolute;
  height: 3px;
  @apply -bottom-1.5 lg:-bottom-2 inset-x-0 w-full bg-white;
}

@media (max-width: 700px) {
  .cooperation__advantage h5:after {
    @apply h-0.5;
  }
}

.cooperation__advantage .adv__container {
  @apply mt-10;
  @apply flex flex-col gap-y-3 lg:gap-y-6;
}

.adv__item {
  @apply text-white;
  @apply flex items-start;
  @apply gap-x-6;
  @apply text-sm lg:text-[24px];
}

.adv__item svg {
  @apply flex-shrink-0;
}

.video {
  aspect-ratio: 1400/574;
}

@media (max-width: 700px) {
  .video {
    aspect-ratio: 338/198;
  }
}

button, a {
  @apply text-white uppercase text-sm px-4 py-4 lg:py-5 lg:text-lg border border-solid border-white relative;
  @apply text-center lg:px-[93px];
  @apply block lg:inline;
}

a:after, button::after {
  display: block;
  position: absolute;
  bottom: -11px;
  left: 0;
  content: "";
  width: 100%;
  height: 19px;
  background-color: transparent;
  filter: blur(20px);
  z-index: 1;
  border-radius: 20px;
  transition-duration: .3s;
}


a:hover:after. button:hover::after {
  background: #E63534;
}
</style>
