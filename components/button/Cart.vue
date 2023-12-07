<template>
  <div>
    <nuxt-link tag="button" to="/cart" class="button py-3 px-4 bg-dark flex items-center justify-center gap-x-3 relative">
      <img src="~/assets/images/icons/cart.svg" alt="Cart icon">
      <span class="text-white text-xl" v-if="count">
        {{ count }}
      </span>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  data: () => ({
    count: 23,
  }),
  methods: {},
  computed: {}
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
