<template>
  <div v-if="isHomeRoute" class="min-h-[100vh] bg-white relative hidden lg:block overflow-x-hidden bg-[#0A0A0A]" id="headerHome"
       ref="headerHome">
    <div class="relative container mx-auto z-10 lg:pt-[75px]">
      <div class="flex w-full justify-between items-start">
        <nuxt-link class="flex-shrink-0" to="/">
          <img src="~/assets/images/logo/logo-main.svg" alt="Nomad Logo">
        </nuxt-link>
        <div class="flex gap-x-6">
          <nuxt-link to="/cooperation"
                     class="relative button__header text-white text-lg uppercase py-5 px-[45px] border-solid border-white border">
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
<!--
        <nuxt-link to="/partners" class="font-medium text-[24px] uppercase header__link">
          Наши партнеры
        </nuxt-link>-->
        <nuxt-link to="/about" class="font-medium text-[24px] uppercase header__link">
          О нас
        </nuxt-link>
        <nuxt-link to="/news" class="font-medium text-[24px] uppercase header__link">
          Новости бренда
        </nuxt-link>
        <a href="#" @click="_showCooperationModal" class="font-medium text-[24px] uppercase header__link">
          Сотрудничество
        </a>
        <nuxt-link to="/contacts" class="font-medium text-[24px] uppercase header__link">
          Контакты
        </nuxt-link>
      </div>
    </div>
    <div class="absolute z-0 inset-0 bg-cover bg-no-repeat appearance-none select-none pointer-events-none"
         :style="{backgroundImage: `url('${HomeHeaderBackground}')`}"/>
    <div class="absolute z-1 inset-0 bg-black bg-opacity-50 appearance-none select-none pointer-events-none"></div>
    <div class="rellax absolute z-1 right-[117px] appearance-none select-none pointer-events-none top-[40%] w-[120px]"
         data-rellax-speed="-1">
      <img src="~/assets/images/parallax/1.webp" alt="Parallax" class="w-full h-full object-contain filter blur-[2px]">
    </div>
  </div>
</template>

<script setup>
import HomeHeaderBackground from '~/assets/images/backgrounds/home_header-desktop-bg.webp'
import {useIntersectionObserver} from "@vueuse/core";
import Rellax from "rellax";
import { useModal } from '~/store/modal.js';
import CooperationModal from '~/components/modals/CooperationModal.vue';
const route = useRoute();
const headerHome = ref(null);
const { $gsap, $ScrollTrigger, $ScrollToPlugin } = useNuxtApp();
const targetIsVisible = ref(true);
const scrollY = ref(0);
const { isMobile } = useDevice();
const trigger = ref(null);
const modal = useModal();

useIntersectionObserver(headerHome, ([{isIntersecting}], observerElement) => {
  targetIsVisible.value = isIntersecting;
},);

const isHomeRoute = computed(() => {
  return route.path === '/';
})

new Rellax('.rellax');

const _showCooperationModal = () => {
  modal.open(CooperationModal);
}


onMounted(() => {
  $gsap.registerPlugin($ScrollTrigger, $ScrollToPlugin);
  const scrollToHeaderDesktop = () => {
    $gsap.to(window, {
      scrollTo: {
        y: "#header-desktop",
        offsetY: 0,
      },
      duration: 1,
      ease: "power2.inOut",
      onStart: () => {
        document.documentElement.style.scrollBehavior = 'auto';
      },
      onComplete: () => {
        document.documentElement.style.scrollBehavior = 'smooth';
      }
    });
  };

  trigger.value = $ScrollTrigger.create({
    trigger: "#headerHome",
    start: "top top",
    onEnter: scrollToHeaderDesktop,
  });
});

onBeforeUnmount(() => {
  if (trigger.value) {
    trigger.value.kill();
  }
})

/*const _handleScrollY = () => {
  if (!isMobile) {
    window.addEventListener('wheel', () => {
      scrollY.value = window.scrollY;
    })
  }
}

const _handleScrollAnimation = () => {
  const handleScroll = () => {
    window.removeEventListener('wheel', handleScroll);
    $gsap.to(window, {
      scrollTo: '#header-desktop',
      duration: 1,
      ease: 'power2.inOut',
      delay: 0,
      onComplete: () => {
        isScrolled.value = true;
      }
    });
  }

  if (!isMobile) {
    window.addEventListener('wheel', handleScroll, { passive: false });
  }
}

watch(scrollY, () => {
  if (scrollY.value === 0 && isScrolled.value === true) {
    _handleScrollAnimation();
  }
})*/
</script>

<style scoped>
.button__header::after {
  display: block;
  position: absolute;
  bottom: -11px;
  left: 0;
  right: 0;
  content: "";
  width: 100%;
  height: 22px;
  background-color: transparent;
  filter: blur(20px);
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
  bottom: -14px;
//width: 100%; width: 0; left: 0; right: 0; height: 5px;
  background: #E63534;
//opacity: 0; transition: all .3s;
}

.header__link:hover::after {
//opacity: 1; width: 100%;
}

.button__header:hover::after {
  background: #E63534;
}
</style>
