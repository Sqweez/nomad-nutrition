<template>
  <div class="z-10 relative" id="breadcrumbs">
    <div class="container hidden md:flex py-[67px] flex-row gap-x-5 z-1"  v-if="props.breadcrumbs && props.breadcrumbs.length > 1">
      <div
          v-for="(item, key) of props.breadcrumbs"
          :key="item.name"
          class="flex items-center gap-x-5"
      >
        <nuxt-link
            :to="item.path"
            class="text-white text-lg"
        >
          {{ item.name }}
        </nuxt-link>
        <svg v-if="key !== props.breadcrumbs.length - 1" width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 4L0.5 0.535898L0.5 7.4641L5 4Z" fill="#E63534"/>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  breadcrumbs: {
    type: Array,
    required: true,
  },
});

console.log(props.breadcrumbs);

</script>

<style scoped>

</style>
