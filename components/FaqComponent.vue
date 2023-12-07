<template>
  <div class="faq">
    <h6>Вопрос-Ответ</h6>
    <div class="faq--wrapper">
      <div class="hidden lg:block w-[357px] h-[357px] overflow-hidden flex-shrink-0">
        <img src="~/assets/images/products/product-faq-ornament.png" alt="FAQ Ornament"
             class="w-full h-full object-contain">
      </div>
      <div class="faq--container">
        <faq-element
            v-for="(item, idx) of faqs"
            :faq="item"
            :opened="openedFaq === item.id"
            :key="item.title"
            @toggle="_onToggle"
        >
          <template #content>
            <p class="text-white font-light text-sm lg:text-xl">
              {{ item.content }}
            </p>
            <div v-if="item.id === 3" class="mt-4">
              <a href="https://drive.google.com/uc?export=download&id=1XSXuK0ESn2Oq3TAmnQeqsgRGA_PgIbwj" rel="nofollow" target="_blank" class="outlined-home-button-link z-10 mt-2">
                Скачать сертификаты
              </a>
            </div>
          </template>
        </faq-element>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  faqs: {
    type: Array,
    required: true,
  }
})

const openedFaq = ref(null);

onMounted(() => {
  const firstElement = props.faqs.at(0);
  if (firstElement) {
    openedFaq.value = firstElement.id;
  }
})

const _onToggle = (key) => {
  if (openedFaq.value === key) {
    openedFaq.value = null;
  } else {
    openedFaq.value = key;
  }
}
</script>

<style scoped>

.faq {
  @apply mt-[116px] lg:mt-[201px];
}

.faq h6 {
  @apply text-white uppercase;
  @apply font-semibold;
  @apply text-[32px] lg:text-[48px];
}

.faq--wrapper {
  @apply flex items-start gap-x-[67px];
  @apply mt-[76px];
}

.faq--container {
  @apply w-full;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
}

.faq__title {
  @apply text-white font-medium;
  @apply text-base lg:text-[24px];
}

.faq--item button {
  @apply p-[6px] w-[28px] h-[28px] lg:w-[40px] lg:h-[40px];
  @apply bg-white rounded-full flex items-center justify-center;
  @apply transition-all duration-300;
}

.faq--item {
  @apply py-5 lg:py-[28px];
  cursor: pointer;
  border-bottom: 1px solid #fff;
}

.faq--item:last-child {
  border-bottom: none;
}
</style>
