<template>
  <section id="news" class="relative pb-[100px] lg:pb-[400px]">
    <div class="hidden lg:block absolute -top-[350px] right-0 no-interaction">
      <img src="~/assets/images/backgrounds/bg-catalog-smoke.png" alt="">
    </div>
    <div class="hidden lg:block absolute -bottom-[300px] left-0 no-interaction overflow-hidden">
      <img src="~/assets/images/backgrounds/cooperation-smoke.png" alt="" class="w-full h-full object-cover">
    </div>
    <div class="hidden lg:block absolute top-16 left-16 no-interaction">
      <img src="~/assets/images/news/ornament.webp" alt="">
    </div>
    <div class="hidden lg:block absolute bottom-1/3 right-16 no-interaction">
      <img src="~/assets/images/news/ornament.webp" alt="">
    </div>
    <div class="hidden lg:block absolute rellax right-0 no-interaction" data-rellax-speed="-1">
      <img src="~/assets/images/parallax/3.webp" alt="">
    </div>
    <div class="hidden lg:block absolute rellax top-1/2 right-0 no-interaction" data-rellax-speed="-1">
      <img src="~/assets/images/parallax/4.webp" alt="">
    </div>
    <div class="hidden lg:block absolute rellax bottom-1/4 left-0 no-interaction" data-rellax-speed="-1">
      <img src="~/assets/images/parallax/5.webp" alt="">
    </div>
    <page-wrapper class="px-3 relative z-10">
      <h1 class="font-medium text-white text-[32px] lg:text-[70px] uppercase py-3 overflow-hidden">
        Новости бренда
      </h1>
      <div class="pt-[50px] lg:pt-[116px] flex flex-col gap-y-[58px] lg:gap-y-[96px]">
        <div class="banner__news overflow-hidden">
          <img src="~/assets/images/news/news_1.jpg" alt="" class="w-full h-full object-cover object-center" placeholder />
        </div>
        <div
            class="news__attachmentfull">
          <div class="flex-1 overflow-hidden">
            <img src="~/assets/images/news/news_2.jpg" alt="" class="w-full h-full object-cover object-center">
          </div>
          <div class="flex-1 flex-shrink-0 flex flex-col items-stretch lg:items-end justify-between">
            <div>
              <p class="font-medium text-white uppercase text-[32px]">
                <span class="text-accent">Новый</span>&nbsp;тренер-партнер
              </p>
              <p class="text-white mt-6 lg:mt-[32px] text-sm lg:text-xl font-light">
                <b>ThermoRush</b> - один из самых крутых по составу термогеников для жиросжигания, результат которого клиент
                почувствует уже после 5 дня приема. Ускоряет метаболизм, нормализует обмен веществ. Подавляет чувство
                голода и поддерживает нормальную работу центральной нервной системы. Предотвращает отложение жиров на
                животе и боках, а также выводит из организма шлаки и токсины.
              </p>
              <p class="mt-6 text-[#686868] text-sm lg:text-lg text-right">
                Опубликовано 29.09.2023
              </p>
            </div>
            <div class="mt-[30px] lg:mt-0">
              <nuxt-link to="/news/1" class="news__cta">
                Подробнее
              </nuxt-link>
            </div>
          </div>
        </div>
        <div
            class="news__attachmentfull">
          <div class="flex-1 flex-shrink-0 flex flex-col justify-between gap-y-[30px] lg:gap-y-[40px]">
            <div>
              <p class="font-medium text-white uppercase text-[32px]">
                <span class="text-accent">Как укрепить</span> иммунитет
              </p>
              <p class="text-white mt-6 lg:mt-[32px] text-sm lg:text-xl font-light">
                <b>ThermoRush</b> - один из самых крутых по составу термогеников для жиросжигания, результат которого клиент
                почувствует уже после 5 дня приема. Ускоряет метаболизм, нормализует обмен веществ. Подавляет чувство
                голода и поддерживает нормальную работу центральной нервной системы. Предотвращает отложение жиров на
                животе и боках, а также выводит из организма шлаки и токсины.
              </p>
            </div>
            <div class="flex flex-col lg:flex-row justify-between items-stretch lg:items-center gap-y-[31px]">
              <p class="text-[#686868] text-sm lg:text-lg text-right lg:text-left">
                Опубликовано 29.09.2023
              </p>
              <nuxt-link to="/news/1" class="news__cta">
                Подробнее
              </nuxt-link>
            </div>
          </div>
        </div>
        <div class="banner__news overflow-hidden">
          <img src="~/assets/images/news/news_4.jpg" alt="" class="w-full h-full object-cover object-center">
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div
              class="news__small">
            <p class="font-medium text-white uppercase text-[32px]">
              <span class="text-accent">Как укрепить</span> иммунитет
            </p>
            <p class="text-white mt-8 text-sm lg:text-xl font-light">
              <b>ThermoRush</b> - один из самых крутых по составу термогеников для жиросжигания, результат которого клиент
              почувствует уже после 5 дня приема. Ускоряет метаболизм, нормализует обмен веществ. Подавляет чувство
              голода и поддерживает нормальную работу центральной нервной системы. Предотвращает отложение жиров на
              животе и боках, а также выводит из организма шлаки и токсины.
            </p>
            <p class="text-[#686868] text-sm lg:text-lg mt-8">
              Опубликовано 29.09.2023
            </p>
            <nuxt-link to="/news/1" class="news__cta mt-8">
              Подробнее
            </nuxt-link>
          </div>
          <div
              class="news__small">
            <p class="font-medium text-white uppercase text-[32px]">
              <span class="text-accent">Как укрепить</span> иммунитет
            </p>
            <p class="text-white mt-8 text-sm lg:text-xl font-light">
              <b>ThermoRush</b> - один из самых крутых по составу термогеников для жиросжигания, результат которого клиент
              почувствует уже после 5 дня приема. Ускоряет метаболизм, нормализует обмен веществ. Подавляет чувство
              голода и поддерживает нормальную работу центральной нервной системы. Предотвращает отложение жиров на
              животе и боках, а также выводит из организма шлаки и токсины.
            </p>
            <p class="text-[#686868] text-sm lg:text-lg mt-8">
              Опубликовано 29.09.2023
            </p>
            <nuxt-link to="/news/1" class="news__cta mt-8">
              Подробнее
            </nuxt-link>
          </div>
          <div
              class="news__small">
            <p class="font-medium text-white uppercase text-[32px]">
              <span class="text-accent">Как укрепить</span> иммунитет
            </p>
            <p class="text-white mt-8 text-sm lg:text-xl font-light">
              <b>ThermoRush</b> - один из самых крутых по составу термогеников для жиросжигания, результат которого клиент
              почувствует уже после 5 дня приема. Ускоряет метаболизм, нормализует обмен веществ. Подавляет чувство
              голода и поддерживает нормальную работу центральной нервной системы. Предотвращает отложение жиров на
              животе и боках, а также выводит из организма шлаки и токсины.
            </p>
            <p class="text-[#686868] text-sm lg:text-lg mt-8">
              Опубликовано 29.09.2023
            </p>
            <nuxt-link to="/news/1" class="news__cta mt-8">
              Подробнее
            </nuxt-link>
          </div>
        </div>
        <div class="banner__news-bottom overflow-hidden cursor-pointer">
          <img src="~/assets/images/news/news_5.jpg" alt="" class="w-full h-full object-cover object-center">
        </div>
      </div>
    </page-wrapper>
  </section>
</template>

<script>
import PageWrapper from "~/components/wrapper/PageWrapper.vue";
import Rellax from "rellax";

definePageMeta({
  name: 'Новости бренда'
})
export default {
  components: {PageWrapper},
  data: () => ({}),
  methods: {},
  mounted() {
    new Rellax('.rellax');
  },
  computed: {}
}
</script>

<style scoped>
.banner__news {
  aspect-ratio: 7/2;
}

@media (max-width: 700px) {
  .banner__news {
    aspect-ratio: 338/212;
  }
}

.banner__news-bottom {
  aspect-ratio: 1400/574;
}

@media (max-width: 700px) {
  .banner__news-bottom {
    aspect-ratio: 338/198;
  }
}

.news__attachmentfull {
  @apply w-full border border-solid border-white p-5 lg:px-[60px] lg:py-[60px] flex flex-col lg:flex-row justify-between gap-y-[44px] lg:gap-x-[60px];
}


.news__cta {
  @apply text-white uppercase text-sm py-4 lg:py-5 lg:text-lg border border-solid border-white relative;
  @apply text-center lg:px-[93px];
  @apply block lg:inline;
}

.news__cta::after {
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


.news__cta:hover::after {
  background: #E63534;
}

.news__small {
  @apply flex flex-col border border-solid border-white;
  @apply py-[33px] px-[23px];
  @apply lg:py-[47px] lg:px-[60px];
}

</style>
