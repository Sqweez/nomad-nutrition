<template>
  <transition-slide-up :active="active">
    <div
        class="fixed inset-0 bg-[#141414] z-50"
    >
      <div @click="$emit('close')" class="fixed inset-x-0 top-0 flex lg:hidden py-[22px] px-3 bg-[#0c0c0c] w-full items-center justify-between">
        <div class="flex items-center gap-x-2">
          <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="22.0005" height="2.00004" transform="matrix(-1 0 0 1 22 0)" fill="white"/>
            <rect width="15" height="2" transform="matrix(-1 0 0 1 15 8)" fill="white"/>
            <rect width="9" height="2" transform="matrix(-1 0 0 1 9 16)" fill="white"/>
          </svg>
          <span class="text-white text-sm font-bold">
            Фильтр
          </span>
        </div>
       <button class="text-white">
         <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
           <rect width="22.0005" height="2.00004" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 16.9707 15.5566)" fill="white"/>
           <rect width="22.0005" height="2.00004" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 1.41406 16.9712)" fill="white"/>
         </svg>
       </button>
      </div>
      <div class="mt-[62px] pt-[34px] px-3 overflow-y-auto filters__scroll" style="max-height: 85dvh;">
        <product-filters :filters="filters" />
      </div>
      <div class="fixed-inset-x-0 bottom-0 flex px-3 gap-x-3">
        <button class="flex-1 text-white border border-solid border-white py-2 text-sm" @click="_clearFilters">
          Очистить
        </button>
        <button class="flex-1 text-white border border-solid border-white py-2 text-sm transition transition-colors hover:bg-accent" @click="_acceptFilters">
          Применить
        </button>
      </div>
    </div>
  </transition-slide-up>
</template>

<script>
import TransitionSlideUp from "~/components/utils/transitions/TransitionSlideUp.vue";
import ProductFilters from "~/components/products/ProductFilters.vue";

export default {
  components: {ProductFilters, TransitionSlideUp},
  emits: [
      'close'
  ],
  props: {
    active: {
      type: Boolean,
      default: false,
    },
    filters: {
      type: Array,
      required: true,
    }
  },
  data: () => ({}),
  methods: {
    _clearFilters () {
      return this.$emit('close');
    },
    _acceptFilters () {
      return this.$emit('close');
    },
  },
  computed: {},
  watch: {
    active (val) {
      if (val) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    }
  }
}
</script>

<style scoped>
.filters__scroll::-webkit-scrollbar {
  width: 2px;
}

/*::-webkit-scrollbar-track {
  background-color: #ccc;
}

::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.5);
  background-color: #141414;
}*/
</style>
