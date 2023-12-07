<template>
  <!-- DESKTOP -->
  <section class="hidden container xl:pt-[59px] xl:flex flex-col gap-y-6 bg-[#0C0C0C]" ref="headerDesktop" id="headerDesktop">
    <div class="flex justify-between gap-x-8 items-end">
      <nuxt-link class="flex-shrink-0" to="/">
        <img src="~/assets/images/logo/logo-main.svg" alt="Nomad Logo">
      </nuxt-link>
      <div class="flex flex-1 items-center gap-x-10">
        <HeaderSearchInput />
        <LazyButtonCart />
      </div>
      <div class="flex-shrink-0 flex flex-col items-end gap-y-3">
        <ButtonLang />
        <nuxt-link :to="CONTACT_WHATSAPP" class="text-white text-xl">
          +7 705 300 0227
        </nuxt-link>
      </div>
    </div>
    <DesktopMenu />
  </section>
  <!-- END DESKTOP -->
</template>

<script setup>
import DesktopMenu from '~/components/header/DesktopMenu.vue';
import {CONTACT_WHATSAPP} from '~/common/contacts.js';
</script>

<style scoped>

</style>
