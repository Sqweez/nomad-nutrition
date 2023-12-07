<template>
  <div class="faq--item" @click="$emit('toggle', faq.id)">
    <div class="flex justify-between items-center">
                  <span class="faq__title">
                    {{ faq.title }}
                  </span>
      <button :class="[
                     opened ? 'transform rotate-45' : ''
                  ]">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
             class="w-full h-full object-contain">
          <rect y="13" width="2" height="24" transform="rotate(-90 0 13)" fill="#222222"/>
          <rect x="13" y="24" width="2" height="24" transform="rotate(180 13 24)" fill="#222222"/>
        </svg>
      </button>
    </div>
    <transition-collapse>
      <div v-show="opened" class="py-[13px]">
        <slot name="content" />
      </div>
    </transition-collapse>
  </div>
</template>

<script setup>
import TransitionCollapse from '~/components/utils/transitions/TransitionCollapse.vue';
defineEmits(['toggle']);
defineProps({
  faq: {
    type: Object,
  },
  opened: {
    type: Boolean,
    default: false,
  }
})
</script>

<style scoped>

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
