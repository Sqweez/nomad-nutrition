<template>
  <div class="flex items-center gap-x-2.5">
    <button>
      <svg width="28" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 6.63949L3.41372 6.63948L9.02656 1.21799L7.76559 6.78889e-07L-6.55746e-07 7.50086L7.76559 15L9.02656 13.782L3.41372 8.36224L28 8.36224L28 6.63949Z" fill="white"/>
      </svg>
    </button>
    <button
        v-for="page of pages"
        :key="page"
        class="pagination__page"
        :class="[
            page === activePage ? 'pagination__page--active' : '',
        ]"
    >
      {{ page }}
    </button>
    <button>
      <svg width="28" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M-1.32691e-06 8.36051L24.5863 8.36052L18.9734 13.782L20.2344 15L28 7.49914L20.2344 2.18213e-06L18.9734 1.21799L24.5863 6.63776L-1.1763e-06 6.63776L-1.32691e-06 8.36051Z" fill="white"/>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    pages: [1, 2, 3],
    activePage: 1,
  }),
  methods: {},
  computed: {}
}
</script>

<style scoped>
.pagination__page {
  @apply text-white font-medium p-[7px] flex-1 transition-colors hover:bg-accent;
  @apply text-sm lg:text-lg;
  @apply w-[30px] h-[30px] lg:w-[38px] lg:h-[38px];
}

.pagination__page--active {
  @apply bg-accent;
}
</style>
