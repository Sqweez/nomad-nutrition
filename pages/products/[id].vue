<template>
  <div>
    <section id="#product" class="relative pb-[100px] lg:pb-[200px]">
      <div class="hidden lg:block absolute -top-[350px] right-0 no-interaction">
        <img src="~/assets/images/backgrounds/bg-catalog-smoke.png" alt="">
      </div>
      <div class="hidden lg:block absolute top-[10%] left-0 no-interaction">
        <img src="~/assets/images/products/products-left-smoke.png" alt="">
      </div>
      <!-- PARALLAX -->
      <div class="hidden lg:block absolute rellax right-0 no-interaction" data-rellax-speed="-1">
        <img src="~/assets/images/parallax/3.webp" alt="">
      </div>
      <div class="hidden lg:block absolute rellax top-[20%] left-0 no-interaction z-0" data-rellax-speed="-1">
        <img src="~/assets/images/parallax/5.webp" alt="">
      </div>
      <div class="hidden lg:block absolute rellax top-[65%] right-0 no-interaction z-0" data-rellax-speed="-1">
        <img src="~/assets/images/parallax/4.webp" alt="">
      </div>
      <!-- PARALLAX -->
      <page-wrapper class="px-3 overflow-x-hidden">
        <!--- PRODUCT TOP -->
        <div class="product-info__wrapper overflow-hidden">
          <div class="flex flex-col gap-y-[10px] lg:gap-y-[21px]">
            <div class="image__preview--item">
              <img src="~/assets/images/products/1.jpg" alt="Product 1" class="w-full h-full object-cover">
            </div>
            <div class="image__preview--item">
              <img src="~/assets/images/products/2.jpg" alt="Product 2" class="w-full h-full object-cover">
            </div>
            <div class="image__preview--item">
              <img src="~/assets/images/products/3.jpg" alt="Product 3" class="w-full h-full object-cover">
            </div>
            <div class="image__preview--item">
              <img src="~/assets/images/products/4.jpg" alt="Product 4" class="w-full h-full object-cover">
            </div>
            <button class="bg-[#0C0C0C] w-full py-[11px] lg:py-[24px] flex items-center justify-center">
              <svg width="16" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 8L15.7942 0.5L0.205771 0.5L8 8Z" fill="#E63534"/>
              </svg>
            </button>
          </div>
          <div class="product__item">
            <div class="w-full bg-[#0C0C0C] overflow-hidden lg:px-10 h-[320px] lg:h-[636px] lg:max-h-[636px]">
              <img src="~/assets/images/products/sample-product-big.png" class="w-full h-full object-contain">
            </div>
          </div>
          <div class="product__item">
            <h1 class="product__title line-clamp-2">
              THERMO RUSH
            </h1>
            <p class="product__category">
              Жиросжигатели и термогенетики
            </p>
            <!-- PRODUCT TAGS -->
            <product-tags/>
            <!-- END PRODUCT TAGS -->
            <p class="product__price">
              12.990 тг
            </p>
            <p class="product__type">
              60 капсул
            </p>
            <!-- PRODUCT ACTIONS -->
            <div class="actions__wrapper">
              <div class="action__item cursor-pointer">
                <span>
                  60 капсул
                </span>
              </div>
              <div class="action__item flex items-center">
                <button @click="_decrement" class="font-medium flex-1 flex-shrink-0">
                  -
                </button>
                <span>
                  {{ quantity }}
                </span>
                <button @click="_increment" class="font-medium flex-1">
                  +
                </button>
              </div>
              <button class="action__item action__item--cart flex-1 flex-shrink-0">
                В корзину
              </button>
            </div>
            <!-- PRODUCT ACTIONS -->
          </div>
        </div>
        <!-- END PRODUCT TOP -->
        <!-- DESCRIPTION -->
        <div class="product__description relative z-10">
          <h3>
            Описание
          </h3>
          <p>
            ThermoRush - один из самых крутых по составу термогеников для жиросжигания, результат которого клиент
            почувствует уже после 5 дня приема. Ускоряет метаболизм, нормализует обмен веществ. Подавляет чувство голода
            и поддерживает нормальную работу центральной нервной системы. Предотвращает отложение жиров на животе и
            боках, а также выводит из организма шлаки и токсины.

            Главной задачей ThermoRush бренда Nomad Nutrition является ускорение метаболизма, которое ведет к
            стремительному сжиганию жиров за счет усиления термогенеза. Помните, что ускорение метаболизма влечет за
            собой подъем работоспособности и рост силовых показателей, а увеличение энергетических резервов и силового
            потенциала позволяет вам повышать интенсивность тренировочного процесса.

            Жиросжигатель идеально подходит для стимуляции организма во время динамических нагрузок, направленных на
            повышение интенсивности для прироста мышечной массы и сжигания жира.

            -Ускорение сжигания жиров
            -Устранение задержки воды
            -Антикатаболическое действие, которое защитит мышцы
          </p>

          <h4>
            Активное вещество (2 капсулы):
          </h4>
          <p>
            ThermoRush - один из самых крутых по составу термогеников для жиросжигания, результат которого клиент
            почувствует уже после 5 дня приема. Ускоряет метаболизм, нормализует обмен веществ. Подавляет чувство голода
            и поддерживает нормальную работу центральной нервной системы. Предотвращает отложение жиров на животе и
            боках, а также выводит из организма шлаки и токсины.

            Главной задачей ThermoRush бренда Nomad Nutrition является ускорение метаболизма, которое ведет к
            стремительному сжиганию жиров за счет усиления термогенеза. Помните, что ускорение метаболизма влечет за
            собой подъем работоспособности и рост силовых показателей, а увеличение энергетических резервов и силового
            потенциала позволяет вам повышать интенсивность тренировочного процесса.

            Жиросжигатель идеально подходит для стимуляции организма во время динамических нагрузок, направленных на
            повышение интенсивности для прироста мышечной массы и сжигания жира.

            -Ускорение сжигания жиров
            -Устранение задержки воды
            -Антикатаболическое действие, которое защитит мышцы
          </p>
          <h4>
            Состав:
          </h4>
          <p>
            L-холина битартрат (витамин В4), экстракт плодов горького померанца (синефрин 6%), экстракт плодов гарцинии
            камбоджийской, L-карнитина L-тартрат, кофеин безводный, экстракт корня колеуса форсколии, экстракт коры
            йохимбе (йохимбин 8%), желатиновая капсула (желатин — загуститель, диоксид титана — краситель),
            антислеживающий агент — диоксид кремния.

            Рекомендации по применению: взрослым принимать по 1 порции (2 капсулы) 1 раз в день или в соответствии с
            вашей индивидуальной программой питания или рекомендациями врача.
          </p>
        </div>
        <!-- END DESCRIPTION -->
        <!-- BRAND VIDEO -->
        <div class="product__video">
          <div class="overflow-hidden w-full" style="aspect-ratio: 1400/574">
            <img src="~/assets/images/products/product-video.jpg" alt="Product video"
                 class="w-full h-full object-contain">
          </div>
        </div>
        <!-- BRAND VIDEO -->
        <!-- PRODUCT FAQ -->
        <faq-component :faqs="faq"/>
        <!-- PRODUCT--FAQ -->
      </page-wrapper>
    </section>
  </div>
</template>

<script setup>
import PageWrapper from '~/components/wrapper/PageWrapper.vue';
import ProductTags from '~/components/products/ProductTags.vue';
import TransitionCollapse from '~/components/utils/transitions/TransitionCollapse.vue';
import faq from '~/common/faq.js';
import FaqComponent from '~/components/FaqComponent.vue';
import {useCommonStore} from '~/store/common.js';

const commonStore = useCommonStore();

const route = useRoute();

const _getBreadcrumbs = () => {
  const breadcrumbs = [
    {
      name: 'Главная',
      path: '/',
    },
    {
      name: 'Каталог',
      path: '/catalog',
    },
    {
      name: 'Thermo rush',
      path: route.path,
    }
  ];

  return breadcrumbs;
};

onMounted(async () => {
  commonStore.$patch({
    commonBreadcrumbs: {
      [route.name]: _getBreadcrumbs(),
    }
  })
});

const quantity = ref(1);

const _increment = () => {
  quantity.value = Math.min(quantity.value + 1, 10);
};

const _decrement = () => {
  quantity.value = Math.max(quantity.value - 1, 1);
};
</script>

<style scoped>
.product-info__wrapper {
  display: grid;
  grid-template-columns: 124px minmax(0, 1.4fr) minmax(0, 2fr);
  column-gap: 42px;
}

@media (max-width: 1024px) {
  .product-info__wrapper {
    grid-template-columns: 16% 1fr;
    grid-template-rows: auto auto;
    column-gap: 20px;
    row-gap: 25px;
  }

  .product__item:last-child {
    grid-column: 1/-1;
  }
}

.image__preview--item {
  @apply w-full aspect-square overflow-hidden cursor-pointer;
}

.product__title {
  @apply text-white text-[32px] lg:text-[60px];
}

.product__category {
  @apply text-white text-sm lg:text-xl;
  @apply mt-3 lg:mt-4;
}

.product__price {
  @apply mt-[46px];
  @apply text-white font-semibold;
  @apply text-[32px] lg:text-[48px];
}

.product__type {
  @apply mt-3 lg:mt-4;
  @apply text-sm lg:text-xl;
  @apply text-white;
}

.actions__wrapper {
  @apply w-full flex items-center gap-x-[10px] lg:gap-x-[22px];
  @apply mt-[36px] lg:mt-[78px];
}

.action__item {
  @apply flex-1 text-white text-center;
  @apply text-sm lg:text-[28px];
  @apply py-[9px] lg:py-[9px];
  @apply border border-solid border-white;
}

.action__item--cart {
  @apply select-none;
  @apply transition-all duration-300 hover:bg-accent;
}

.action__item--cart:hover {
  border-color: #E63534;
}

.product__description {
  @apply py-[50px] lg:py-[114px];
  @apply text-white;
  @apply overflow-x-hidden;
  @apply whitespace-normal;
  @apply z-10;
}

.product__description h3 {
  @apply uppercase;
  @apply font-medium text-[32px];
}

.product__description p {
  @apply mt-8;
  @apply text-sm lg:text-lg;
}

.product__description h4 {
  @apply font-semibold;
  @apply mt-8;
  @apply text-sm lg:text-xl;
}

.product__video {
  @apply cursor-pointer;
}

.product__faq {
  @apply mt-[116px] lg:mt-[201px];
}

.product__faq h6 {
  @apply text-white uppercase;
  @apply font-semibold;
  @apply text-[32px] lg:text-[48px];
}

.product__faq--wrapper {
  @apply flex items-start gap-x-[67px];
  @apply mt-[76px];
}

.product__faq--container {
  @apply w-full;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
}

.faq__title {
  @apply text-white font-medium;
  @apply text-base lg:text-[24px];
}

.product__faq--item button {
  @apply p-[6px] w-[28px] h-[28px] lg:w-[40px] lg:h-[40px];
  @apply bg-white rounded-full flex items-center justify-center;
  @apply transition-all duration-300;
}

.product__faq--item {
  @apply py-5 lg:py-[28px];
  cursor: pointer;
  border-bottom: 1px solid #fff;
}

.product__faq--item:last-child {
  border-bottom: none;
}
</style>
