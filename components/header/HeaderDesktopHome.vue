<template>
  <div class="min-h-[100vh] bg-white relative hidden lg:block" id="headerHome" ref="headerHome">
    <div class="relative container mx-auto z-10 lg:pt-[75px]">
      <div class="flex w-full justify-between items-start">
        <nuxt-link class="flex-shrink-0" to="/">
          <img src="~/assets/images/logo/logo-main.svg" alt="Nomad Logo">
        </nuxt-link>
        <div class="flex gap-x-6">
          <nuxt-link
              to="/cooperation"
              class="relative button__header text-white text-lg uppercase py-5 px-[45px] border-solid border-white border"
          >
            Стать партнером
          </nuxt-link>
          <nuxt-link to="/catalog"
                     class="relative button__header text-white text-lg uppercase py-5 px-[45px] border-solid border-white border">
            Каталог
          </nuxt-link>
        </div>
      </div>
    </div>
    <div class="absolute inset-x-0 bottom-[20%] z-30">
      <div class="container flex justify-between items-center text-white">
        <nuxt-link to="/about" class="font-bold text-[24px] uppercase header__link">
          О нас
        </nuxt-link>
        <nuxt-link to="/partners" class="font-bold text-[24px] uppercase header__link">
          Наши партнеры
        </nuxt-link>
        <nuxt-link to="/news" class="font-bold text-[24px] uppercase header__link">
          Новости бренда
        </nuxt-link>
        <a href="#" class="font-bold text-[24px] uppercase header__link">
          Сотрудничество123
        </a>
        <nuxt-link to="/contacts" class="font-bold text-[24px] uppercase header__link">
          Контакты
        </nuxt-link>
      </div>
    </div>
    <div class="absolute z-0 inset-0 bg-cover bg-no-repeat appearance-none select-none pointer-events-none"
         :style="{backgroundImage: `url('${desktopBg}')`}"/>
    <div class="absolute z-1 inset-0 bg-black bg-opacity-50 appearance-none select-none pointer-events-none"></div>
  </div>
</template>

<script>
import HomeHeaderBackground from '~/assets/images/backgrounds/home_header-desktop-bg.jpg';
import {useIntersectionObserver } from "@vueuse/core";

export default {
  data: () => ({
    desktopBg: HomeHeaderBackground,
    isAlreadyScrolled: false,
    targetIsVisible: false,
    topArrived: true,
  }),
  methods: {},
  computed: {},
  watch: {
    topArrived (v) {
      if (v) this.isAlreadyScrolled = false;
    },
    targetIsVisible (v, pV) {
      if (v === true && pV === false) {
        //window.scrollTo(0, 0)
      }
    }
  },
  mounted() {
    this.targetIsVisible = useIntersectionObserver(this.$refs.headerHome, ([{isIntersecting}], observerElement) => {
      this.targetIsVisible = isIntersecting;
    },);

    document.addEventListener('scroll', async () => {
      this.topArrived = window.scrollY === 0;
      if (!this.isAlreadyScrolled) {
        /*await window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
        })*/
        this.isAlreadyScrolled = true;
      }
    });
  }
}
</script>
<style scoped>
.button__header::after {
  display: block;
  position: absolute;
  bottom: -11px;
  left: 0;
  content: "";
  width: 130%;
  height: 22px;
  background-color: transparent;
  filter: blur(24px);
  z-index: 1;
  border-radius: 20px;
  transition-duration: .3s;
}

.header__link {
  position: relative;
}

.header__link::after {
  content: '';
  position: absolute;
  bottom: -8px;
  width: 100%;
  left: 0;
  right: 0;
  height: 5px;
  background: #E63534;
  opacity: 0;
  transition: opacity .3s;
}

.header__link:hover::after {
  opacity: 1;
}

.button__header:hover::after {
  background: #E63534;
}
</style>
