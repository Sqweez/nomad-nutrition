<template>
    <header class="bg-black w-full h-full">
      <div class="item" v-if="showHeaderHome">
        <HeaderHome />
      </div>
      <div class="item bg-[#0C0C0C]" id="header-desktop">
        <HeaderDesktop />
      </div>
      <div>
        <HeaderMobile />
      </div>
    </header>
</template>

<script setup>
const { isMobile } = useDevice();
const route = useRoute();

const showHeaderHome = computed(() => {
  return route.path === '/' && !isMobile;
})
</script>

<style></style>
