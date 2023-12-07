<template>
  <div class="text-white w-full lg:w-[382px]">
    <div class="summary__container">
      <div class="summary__item">
      <span>
        Сумма:
      </span>
        <span>
        {{ $filter.currency(cartStore.totalAmount) }}
      </span>
      </div>
      <div class="summary__item">
      <span>
        Доставка:
      </span>
        <span>
       Бесплатно
      </span>
      </div>
      <div class="summary__item">
      <span>
        Промокод:
      </span>
        <span>
       10%
      </span>
      </div>
      <div class="summary__item">
      <span>
        Итого:
      </span>
        <span>
       {{ $filter.currency(cartStore.totalAmount) }}
      </span>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
import {useCartStore} from "~/store/cart.js";

const cartStore = useCartStore();
const { $filter } = useNuxtApp();

</script>

<style scoped>
.summary__container {
  border-bottom: 1px solid #3D3D3D;
}
.summary__item {
  @apply flex justify-between items-center;
  @apply px-5 lg:px-6;
  @apply py-2;
  @apply text-sm lg:text-lg;
  @apply font-medium;
}

.summary__item:last-child {
  @apply text-base lg:text-xl;
  @apply font-semibold;
  @apply text-accent;
}

.summary__item:nth-child(odd) {
  @apply bg-[#0A0A0A];
}
</style>
