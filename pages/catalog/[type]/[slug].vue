<template>
  <div>
    <CatalogIndex />
  </div>
</template>

<script setup>
import CatalogIndex from '~/pages/catalog/index.vue';
const route = useRoute();
const slug = ref(route.params.slug);
onMounted(() => {
  definePageMeta({})
});
</script>

<style scoped>

</style>
