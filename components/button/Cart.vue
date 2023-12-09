<template>
  <div>
    <button @click="_handleClick" class="button py-3 px-4 bg-dark flex items-center justify-center gap-x-3 relative">
      <img src="~/assets/images/icons/cart.svg" alt="Cart icon">
      <span class="text-white text-xl" v-if="cartCount">
        {{ cartCount }}
      </span>
    </button>
  </div>
</template>

<script setup>
import {useCartStore} from '~/store/cart.js';
const cartStore = useCartStore();
const { cartCount } = storeToRefs(cartStore);
const { $toast } = useNuxtApp();
const router = useRouter();

const _handleClick = async () => {
  if (!cartCount.value) {
    return $toast.warn('Ваша корзина пуста')
  }
  await router.push('/cart');
}
</script>

<style scoped>
.button::after {
  display: block;
  position: absolute;
  bottom: -11px;
  left: 0;
  content: "";
  width: 100%;
  height: 19px;
  background-color: transparent;
  filter: blur(28px);
  z-index: 1;
  border-radius: 20px;
  transition-duration: .3s;
}

.button:hover::after {
  background: #E63534;
}
</style>
