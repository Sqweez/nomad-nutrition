<template>
  <div v-if="show" class="w-full py-8 flex items-center justify-center">
    <span class="loading loading-spinner bg-accent" />
  </div>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    default: true,
  }
})
</script>
