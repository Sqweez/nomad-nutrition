<template>
  <div class="bg-[#141414]">
    <section id="#about" class="bg-[#141414] relative">
      <div class="container mx-auto px-3 lg:px-0 py-[58px] lg:pt-[159px] lg:pb-[30px] z-10">
        <div class="flex flex-col-reverse lg:flex-row gap-y-[54px]">
          <div class="lg:flex-1 h-[130px] lg:h-0 flex items-center justify-center overflow-x-hidden overflow-y-hidden">
          </div>
          <div class="flex-1 flex flex-col lg:items-end">
            <h1 class="text-white text-center lg:text-left text-[32px] lg:text-[70px] uppercase">
              <span class="text-accent font-medium ">Nomad</span>&nbsp;<span class="font-medium ">Nutrition</span>
            </h1>
            <p class="text-white text-sm lg:text-xl mt-5 lg:mt-[35px] font-light text-left lg:text-right">
              Современный номадизм не так уж отличается от того, что было раньше, и также включает в себя гораздо
              больше, чем просто путешествия. Каждый день мы боремся за право быть первым, быть главным, быть
              победителем! Если ты также, как и мы нацелен на результат - у нас есть кое-что рабочее для тебя….
            </p>
            <nuxt-link to="/about" class="outlined-home-button-link z-10">
              О нас
            </nuxt-link>
          </div>
        </div>
      </div>
      <div
          class="hidden lg:block z-0 absolute right-1/2 left-0 inset-y-0 overflow-hidden select-none appearance-none pointer-events-none">
        <img src="~/assets/images/backgrounds/home-section-1-bg.webp" alt="Home Background"
             class="w-full h-full object-contain">
      </div>
      <div
          class="block lg:hidden z-0 absolute inset-x-0 -bottom-4 select-none appearance-none pointer-events-none overflow-hidden">
        <img src="~/assets/images/backgrounds/home-section-1-bg.webp" alt="Home Background"
             class="w-full h-full object-cover">
      </div>
    </section>
    <section id="#slides" class="slides__wrapper relative lg:pt-[130px] pb-[90px] lg:pb-[320px] bg-[#141414]">
      <div class="container mx-auto relative z-20">
        <HomeBannerSlider/>
      </div>
      <div
          class="rellax hidden lg:block absolute left-0 top-0 w-[225px] z-1 select-none appearance-none pointer-events-none z-10"
          data-rellax-speed="-2">
        <img src="~/assets/images/parallax/2.webp" alt="Parallax">
      </div>
    </section>
    <section id="products"
             class="bg-[#141414] overflow-hidden relative  pb-[40px] lg:pb-[284px]">
      <div class="container mx-auto">
        <div class="w-full overflow-hidden lg:h-[90vh] relative z-10 px-5 lg:px-0">
          <img src="~/assets/images/products/products.webp" alt="Products" class="w-full h-full object-contain">
        </div>
      </div>
      <div
          class="absolute left-0 top-0 bottom-0 right-1/2 z-20 appearance-none select-none pointer-events-none"
          style="-webkit-mask-image: linear-gradient(to top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);"
      >
        <img src="~/assets/images/backgrounds/background-products-smoke.png" alt="BG Smoke">
      </div>
      <div v-if="false"
           class="absolute left-0 bottom-10 right-1/2 z-10 appearance-none select-none pointer-events-none">
        <div class="w-full h-full" style="background: linear-gradient(180deg, transparent 0%, #141414 20%)"/>
      </div>
      <div
          style="background: linear-gradient(180deg, rgba(20,20,20,1) 0%, rgba(20,20,20,0) 35%, rgba(20,20,20,1) 100%); top: 15%;"
          class="absolute inset-x-0 z-0 appearance-none select-none pointer-events-none"
      >
        <img
            :style="opacityMaskStyles"
            src="~/assets/images/backgrounds/products-bg-upd.png"
            alt="BG Nomads"
            class="w-full h-full object-center z-10 product__bg relative"
        >
      </div>
    </section>
    <section id="#about-1" class="bg-[#141414] relative">
      <div
          class="rellax hidden lg:block absolute right-0 -top-[400px] w-[225px] z-1 select-none appearance-none pointer-events-none z-50"
          data-rellax-speed="-2">
        <img src="~/assets/images/parallax/3.webp" alt="Parallax">
      </div>
      <div class="container mx-auto px-3 lg:px-0 py-[58px] lg:py-[159px] z-10">
        <div class="flex flex-col lg:flex-row gap-y-[54px]">
          <div class="flex-1 flex flex-col lg:items-start">
            <h1 class="text-white text-center lg:text-left text-[32px] lg:text-[70px] font-medium uppercase whitespace-nowrap">
              <span class="text-accent font-medium">Nomad</span>&nbsp;<span class="font-medium">Nutrition</span>
            </h1>
            <p class="text-white text-sm lg:text-xl mt-5 lg:mt-[35px] font-light">
              Новый бренд, уже на полках лучших магазинов Казахстана и России. Спортивное питание для современных
              кочевников - для тех, кто привык побеждать суровые условия! Европейское сырье, гарантия результата и
              эффект уже в течение первой недели приема. К своему делу мы подошли с огромным энтузиазмом и
              ответственностью. Целых 2 года мы разрабатывали и тестировали состав наших продуктов, еще полгода ушло на
              поиск качественных банок и упаковки. Теперь мы готовы идти в бой и расширять линейку наших продуктов
              каждый месяц!
            </p>
            <nuxt-link to="/catalog" class="outlined-home-button-link z-10">
              Перейти в каталог
            </nuxt-link>
          </div>
          <div class="lg:flex-1 h-[130px] lg:h-0 flex items-center justify-center overflow-x-hidden overflow-y-hidden"/>
        </div>
      </div>
      <div
          class="hidden lg:block z-0 absolute left-1/2 right-0 inset-y-0 overflow-hidden select-none appearance-none pointer-events-none">
        <img src="~/assets/images/backgrounds/home-section-4-bg.png" alt="Home Background"
             class="w-full h-full object-contain">
      </div>
      <div
          class="block lg:hidden z-0 absolute inset-x-0 -bottom-4 select-none appearance-none pointer-events-none overflow-hidden">
        <img src="~/assets/images/backgrounds/home-section-4-bg.png" alt="Home Background"
             class="w-full h-full object-cover">
      </div>
      <div class="absolute right-0 bottom-full">
        <img src="~/assets/images/backgrounds/background-smoke-otbasy.png" alt="">
      </div>
    </section>
    <section id="#otbasy" class="relative">
      <div class="container mx-auto py-[60px] lg:py-[150px]">
        <h3 class="text-accent text-center uppercase text-[32px] lg:text-[70px] font-medium">
          Nomad&nbsp;<span class="text-white">ОТБАСЫ</span>
        </h3>
        <div>
          <HomeOtbasySlider/>
        </div>
      </div>
      <div
          class="rellax hidden lg:block absolute left-0 -top-[400px] w-[225px] z-1 select-none appearance-none pointer-events-none z-50"
          data-rellax-speed="-2">
        <img src="~/assets/images/parallax/4.webp" alt="Parallax">
      </div>
    </section>
    <section id="#cooperation" class="relative pb-[80px]">
      <div
          style="background: linear-gradient(180deg, rgba(20,20,20,1) 0%, rgba(20,20,20,0) 35%, rgba(20,20,20,1) 100%);"
          class="absolute inset-x-0 top-0 z-0 appearance-none select-none pointer-events-none"
      >
        <img
            src="~/assets/images/backgrounds/cooperation-bg.png"
            alt="BG Nomads"
            class="w-full h-full object-center"
        >
      </div>
      <div
          class="absolute left-0 -top-1/2 z-0 appearance-none select-none pointer-events-none"
      >
        <img
            src="~/assets/images/backgrounds/cooperation-smoke.png"
            alt="BG Nomads"
            class="w-full h-full object-center"
        >
      </div>
      <div class="container mx-auto py-[60px] lg:py-[100px] min-h-[100vh] relative">
        <h4 class="text-center text-white uppercase text-[28px] lg:text-[70px] font-medium">
          Виды сотрудничества
        </h4>
        <div class="mt-10 lg:mt-[100px] px-4">
          <HomeCooperationSlider/>
        </div>

        <div class="flex flex-col px-4 mt-10 lg:mt-[200px] gap-y-[60px] lg:gap-y-[90px]">
          <div>
            <p class="font-medium text-white text-[32px] uppercase">История Бренда Nomad Nutrition</p>
            <p class="my-4 text-white text-sm lg:text-xl font-light">
              Nomad Nutrition - это совершенно новый бренд в индустрии спортивного питания. Созданный с целью предоставить
              инновационные и высококачественные продукты, бренд был основан в 2023 году человеком, объединяющий любовь к
              активному образу жизни и заботу о здоровье.
              Идея Nomad Nutrition возникла из стремления создать питание, которое соответствовало бы потребностям
              современного человека, ведущего активный образ жизни. Бренд не только предоставляет высококачественные
              продукты, но и стремится быть лидером в инновациях, при этом не забывая о казахском этносе.
            </p>
          </div>
          <div>
            <p class="font-medium text-white text-[32px] uppercase">Ключевые продукты и команда</p>
            <p class="my-4 text-white text-sm lg:text-xl font-light">
              Nomad Nutrition специализируется на разработке спортивного питания, обогащенного уникальными и эффективными
              ингредиентами. В наших продуктах широко используются натуральные компоненты, такие как высококачественные
              белки, витамины, минералы и растительные добавки. Особое внимание уделяется удовлетворению потребностей
              организма во время физических нагрузок.
              Команда бренда работает над поиском и внедрением инновационных ингредиентов, которые могут увеличить силовые
              показатели. повысить выносливость, ускорить восстановление и поддерживать общее здоровье. Nomad Nutrition
              гордится своими продуктами, которые не только вкусны, но и эффективны в достижении спортивных целей.
            </p>
          </div>
          <div>
            <p class="font-medium text-white text-[32px] uppercase">Качество и ингредиенты</p>
            <p class="my-4 text-white text-sm lg:text-xl font-light">
              Nomad Nutrition, казахстанский бренд спортивного питания, представляет уникальную линейку продуктов,
              разработанных для активных и целеустремленных людей. Сочетая в себе вдохновение традициями кочевого народа и
              современные технологии в области питания, бренд создает продукты, способствующие достижению выдающихся
              результатов в тренировках и поддержанию здорового образа жизни.
              Одним из ключевых принципов Nomad Nutrition является стремление к высшему качеству продуктов. Бренд
              тщательно отбирает ингредиенты, уделяя внимание их происхождению и эффективности. Натуральные добавки и
              отсутствие вредных добавок - это основа, на которой строится каждый продукт Nomad Nutrition.
            </p>
          </div>
          <div>
            <p class="font-medium text-white text-[32px] uppercase">Сообщество и Инновации</p>
            <p class="my-4 text-white text-sm lg:text-xl font-light">
              Nomad Nutrition гордится своим активным сообществом, объединенным общей страстью к здоровому образу жизни и
              спорту. Мы регулярно взаимодействуем с клиентами, тренерами и спортсменами через социальные сети, обсуждая
              новые продукты, делимся советами по тренировкам и поддерживая друг друга в достижении спортивных целей.
              Мы постоянно внедряем инновации, отслеживая последние тенденции в области спортивного питания.
              Сотрудничество с ведущими специалистами в области физиологии и питания помогает Nomad Nutrition
              разрабатывать продукты, соответствующие последним научным достижениям.
              Nomad Nutrition - это не просто бренд спортивного питания; это образ жизни, где забота о себе переплетена со
              стремлением к постоянному совершенствованию.
            </p>
          </div>
        </div>

        <faq-component :faqs="faq" />
      </div>

      <div
          class="hidden lg:block rellax absolute z-1 right-0 appearance-none select-none pointer-events-none top-[50%] w-[120px]"
          data-rellax-speed="-1">
        <img src="~/assets/images/parallax/1.webp" alt="Parallax"
             class="w-full h-full object-contain filter blur-[2px]">
      </div>
    </section>
  </div>
</template>

<script setup>
import Rellax from 'rellax';
import faq from '~/common/faq.js';
import FaqComponent from '~/components/FaqComponent.vue';

const opacityMaskStyles = {
  maskImage: 'linear-gradient(to top, transparent 0%, #141414 20%)',
  maskMode: 'alpha',
};

onMounted(async () => {
  new Rellax('.rellax');
});
</script>

<style scoped>
.slides__wrapper:after {
  content: '';
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 100px;
  z-index: 0;
  background: #070707;
  filter: blur(54px);
  appearance: none;
  pointer-events: none;
}

</style>
