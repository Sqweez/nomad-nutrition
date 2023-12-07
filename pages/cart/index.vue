<template>
  <section id="#cart" class="relative pb-[100px] lg:pb-[200px]">
    <div class="hidden lg:block absolute rellax right-0 -top-[4%]"  data-rellax-speed="-1">
      <img src="~/assets/images/parallax/3.webp" alt="">
    </div>
    <page-wrapper class="px-3 lg:px-10 z-10 relative">
      <h1 class="font-medium text-white text-[30px] lg:text-[70px] uppercase py-3 overflow-hidden text-center">
        корзина
      </h1>
      <div class="mt:[50px] lg:mt-[84px]">
        <cart-table  />
      </div>
      <div class="mt-[54px] lg:mt-[74px]">
        <cart-promocode />
      </div>
      <div class="mt-[54px] lg:mt-[74px] flex items-center lg:items-end w-full flex-col">
        <cart-summary>
          <button class="action__button" @click="$router.push('/checkout')">
            Оформление заказа
          </button>
        </cart-summary>
      </div>
    </page-wrapper>
  </section>
</template>

<script setup>
import Rellax from "rellax";
import CartTable from "~/components/cart/CartTable.vue";
import PageWrapper from "~/components/wrapper/PageWrapper.vue";
import {useCartStore} from "~/store/cart.js";

const cartStore = useCartStore();
const { $filter } = useNuxtApp();

definePageMeta({
  name: 'Корзина'
})

onMounted(() => {
  new Rellax('.rellax')
})
</script>

<style scoped>
.action__button {
  @apply relative font-light text-sm lg:text-lg shadow-xl text-center py-4 lg:py-5 text-white uppercase inline-block border border-solid border-white;
  @apply mt-[57px] lg:mt-[82px];
  @apply w-full;
}


.action__button::after {
  display: block;
  position: absolute;
  bottom: -11px;
  left: 0;
  content: "";
  width: 100%;
  height: 19px;
  background-color: transparent;
  filter: blur(20px);
  z-index: 1;
  border-radius: 20px;
  transition-duration: .3s;
}

.action__button:hover::after {
  background: #E63534;
}
</style>
