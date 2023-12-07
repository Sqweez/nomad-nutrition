<template>
  <!--- MOBILE -->
  <div class="flex flex-col xl:hidden container bg-[#141414]">
    <div class="py-6 px-3 flex-1 flex items-start justify-between relative" :style="additionalStyles">
      <div class="flex items-end gap-x-4">
        <div @click.prevent="isMenuOpened = !isMenuOpened" class="menu__button z-30"
             :class="[isMenuOpened ? 'menu__button-opened' : '']">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nuxt-link tag="div" to="/" class="w-[144px] h-[41px] overflow-hidden z-30">
          <img src="~/assets/images/logo/logo-main.svg" alt="Logo" class="w-full h-full object-contain">
        </nuxt-link>
      </div>
      <div class="relative">
        <button
            @click="$router.push('/cart')"
            class="relative w-[44px] h-[34px] border-white border-solid border py-[7px] px-[10px] z-30"
        >
          <img src="~/assets/images/icons/cart.svg" alt="">
        </button>
      </div>
      <div
          v-if="isHomeRoute"
          class="absolute z-0 inset-0 bg-cover bg-no-repeat appearance-none select-none pointer-events-none"
          :style="{backgroundImage: `url('${desktopBg}')`}"
      />
      <div v-if="isHomeRoute"
           class="absolute z-1 inset-0 bg-black bg-opacity-50 appearance-none select-none pointer-events-none"></div>
    </div>
    <HeaderSearchInput/>
    <HeaderMobileMenu
        :show="isMenuOpened"
        @close="isMenuOpened = false"
    />
  </div>
  <!-- END MOBILE -->
</template>

<script>
import HomeHeaderBackground from '~/assets/images/backgrounds/home_header-desktop-bg.webp';

export default {
  data: () => ({
    isMenuOpened: false,
    desktopBg: HomeHeaderBackground,
  }),
  methods: {},
  computed: {
    isHomeRoute() {
      return this.$route.path === '/';
    },
    additionalStyles() {
      let styles = {};
      if (this.isHomeRoute) {
        styles.aspectRatio = '360/198'
      }
      return styles;
    },
  }
}
</script>

<style scoped>
.menu__button {
  width: 28px;
  height: 22px;
  position: relative;
  margin-bottom: 6px;
}

.menu__button > span {
  height: 2px;
  background-color: #fff;
  position: absolute;
  left: 0;
  display: block;
  transition-duration: 0.3s;
  transform-origin: 3px 1px;
}

.menu__button > span:nth-child(1) {
  top: calc(50% - 8px);
  width: 22px;
}

.menu__button-opened > span:nth-child(1) {
  transform: rotate(45deg);
  width: 28px;
}

.menu__button > span:nth-child(2) {
  width: 28px;
  top: calc(50% - 0px);
  opacity: 1;
}


.menu__button-opened > span:nth-child(2) {
  opacity: 0;
}

.menu__button > span:nth-child(3) {
  width: 22px;
  top: calc(50% + 8px);
}

.menu__button-opened > span:nth-child(3) {
  transform: rotate(-45deg);
  width: 28px;
}
</style>
