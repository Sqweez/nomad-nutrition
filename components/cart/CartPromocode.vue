<template>
  <div class="promocode_container">
    <p>
      Использовать промокод
    </p>
    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 5L6.90043e-08 0.669873L4.47556e-07 9.33013L6 5Z" fill="#E63534"/>
    </svg>
    <input
        type="text"
        v-model="promocode"
        placeholder="Введите промокод"
    >
    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 5L6.90043e-08 0.669873L4.47556e-07 9.33013L6 5Z" fill="#E63534"/>
    </svg>
    <button :disabled="!isPromocodeEntered">
      Активировать
    </button>
  </div>
</template>

<script setup>
const promocode = ref('');
const isPromocodeEntered = computed(() => {
  return promocode.value.length;
})
</script>

<style scoped lang="scss">
.promocode_container {
  @apply bg-[#0A0A0A] py-6 lg:py-[10px] flex flex-col lg:flex-row text-white items-center justify-between;
  @apply px-6 lg:px-[38px];
  @apply gap-y-4 gap-x-8;

  input {
    flex-grow: 3;
    outline: none;
    @apply py-4 px-[25px] lg:py-5;
    @apply bg-transparent text-lg;
    border: 1px solid #3d3d3d;
    @apply w-full lg:w-auto;
    @apply text-center lg:text-left;
  }

  svg {
    @apply rotate-90 lg:rotate-0;
    @apply flex-shrink-0;
  }

  button {
    flex-grow: 2;
    @apply transition-all duration-300;
    @apply text-lg;
    @apply py-4 lg:py-5;
    @apply border border-solid border-white disabled:border-[#3d3d3d];
    @apply disabled:text-[#3D3D3D];
    @apply relative;
    @apply w-full lg:w-auto;
  }

  button::after {
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

  button:not(:disabled):hover::after {
    background: #E63534;
  }

}
</style>
