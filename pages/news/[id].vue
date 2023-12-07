<template>
  <section id="news" class="relative pb-[100px] lg:pb-[400px]">
    <div class="hidden lg:block absolute -top-[350px] right-0 no-interaction">
      <img src="~/assets/images/backgrounds/bg-catalog-smoke.png" alt="">
    </div>
    <div class="hidden lg:block absolute -bottom-[1000px] left-0 no-interaction">
      <img src="~/assets/images/backgrounds/cooperation-smoke.png" alt="">
    </div>
    <div class="hidden lg:block absolute top-16 left-16 no-interaction">
      <img src="~/assets/images/news/ornament.webp" alt="">
    </div>
    <div class="hidden lg:block absolute rellax right-0 no-interaction" data-rellax-speed="4">
      <img src="~/assets/images/parallax/3.webp" alt="">
    </div>
    <div class="hidden lg:block absolute rellax top-1/2 right-0 no-interaction" data-rellax-speed="4">
      <img src="~/assets/images/parallax/4.webp" alt="">
    </div>
    <div class="hidden lg:block absolute rellax bottom-1/4 left-0 no-interaction" data-rellax-speed="4">
      <img src="~/assets/images/parallax/5.webp" alt="">
    </div>
    <page-wrapper class="px-3 relative z-10">
      <h1 class="font-medium text-white text-[32px] lg:text-[70px] uppercase py-3 overflow-hidden">
        <span class="text-accent">Как укрепить</span> иммунитет
      </h1>
      <div class="pt-[50px] lg:pt-[116px]">
        <div class="news__image">
          <img src="~/assets/images/news/news_single.jpg" alt="Single News"
               class="w-full h-full object-cover object-center">
        </div>
        <div class="text-white mt-[56px] lg:mt-[91px] text-sm lg:text-lg flex flex-col gap-y-4 lg:gap-y-8">
          <p>
            <b>ThermoRush</b> - один из самых крутых по составу термогеников для жиросжигания, результат которого клиент
            почувствует уже после 5 дня приема. Ускоряет метаболизм, нормализует обмен веществ. Подавляет чувство голода
            и поддерживает нормальную работу центральной нервной системы. Предотвращает отложение жиров на животе и
            боках, а также выводит из организма шлаки и токсины.
          </p>
          <p>
            Главной задачей <b>ThermoRush</b> бренда Nomad Nutrition является ускорение метаболизма, которое ведет к
            стремительному сжиганию жиров за счет усиления термогенеза. Помните, что ускорение метаболизма влечет за
            собой подъем работоспособности и рост силовых показателей, а увеличение энергетических резервов и силового
            потенциала позволяет вам повышать интенсивность тренировочного процесса.
          </p>
          <p>
            Жиросжигатель идеально подходит для стимуляции организма во время динамических нагрузок, направленных на
            повышение интенсивности для прироста мышечной массы и сжигания жира.
          </p>
          <ul>
            <li>- Ускорение сжигания жиров</li>
            <li>- Устранение задержки воды</li>
            <li>- Антикатаболическое действие, которое защитит мышцы</li>
          </ul>
          <h4 class="text-xl lg:text-2xl font-medium mt-8">
            Активное вещество (2 капсулы):
          </h4>
          <p>
            <b>ThermoRush</b> - один из самых крутых по составу термогеников для жиросжигания, результат которого клиент
            почувствует уже после 5 дня приема. Ускоряет метаболизм, нормализует обмен веществ. Подавляет чувство голода
            и поддерживает нормальную работу центральной нервной системы. Предотвращает отложение жиров на животе и
            боках, а также выводит из организма шлаки и токсины.
          </p>
          <p>
            Главной задачей <b>ThermoRush</b> бренда Nomad Nutrition является ускорение метаболизма, которое ведет к
            стремительному сжиганию жиров за счет усиления термогенеза. Помните, что ускорение метаболизма влечет за
            собой подъем работоспособности и рост силовых показателей, а увеличение энергетических резервов и силового
            потенциала позволяет вам повышать интенсивность тренировочного процесса.
          </p>
          <p>
            Жиросжигатель идеально подходит для стимуляции организма во время динамических нагрузок, направленных на
            повышение интенсивности для прироста мышечной массы и сжигания жира.
          </p>
          <ul>
            <li>- Ускорение сжигания жиров</li>
            <li>- Устранение задержки воды</li>
            <li>- Антикатаболическое действие, которое защитит мышцы</li>
          </ul>
          <h4 class="text-xl lg:text-2xl font-medium mt-8">
            Состав:
          </h4>
          <p>
            L-холина битартрат (витамин В4), экстракт плодов горького померанца (синефрин 6%), экстракт плодов гарцинии
            камбоджийской, L-карнитина L-тартрат, кофеин безводный, экстракт корня колеуса форсколии, экстракт коры
            йохимбе (йохимбин 8%), желатиновая капсула (желатин — загуститель, диоксид титана — краситель),
            антислеживающий агент — диоксид кремния.
          </p>
          <p>
            Рекомендации по применению: взрослым принимать по 1 порции (2 капсулы) 1 раз в день или в соответствии с
            вашей индивидуальной программой питания или рекомендациями врача.
          </p>
        </div>
      </div>
    </page-wrapper>
  </section>
</template>

<script>
import PageWrapper from "~/components/wrapper/PageWrapper.vue";
import Rellax from "rellax";

definePageMeta({
  name: 'Как укрепить иммунитет'
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
.news__image {
  aspect-ratio: 1400 / 574;
}

@media (max-width: 700px) {
  .news__image {
    aspect-ratio: 338 / 198;
  }
}

p, li {
  @apply font-light;
}
</style>
