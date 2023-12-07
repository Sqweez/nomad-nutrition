<template>
  <div class="product__tags">
    <div v-for="tag of tags" :key="tag.title" class="product__tag">
      <div class="product__tag--description">
        <span>
          {{ tag.title }}
        </span>
      </div>
      <img
          :src="tag.image"
          class="w-full h-full object-contain"
          :alt="tag.title"
      >
    </div>
  </div>
</template>

<script setup>
import lactoseFree from '~/assets/images/products/icons/lactose-free.svg';
import forVegans from '~/assets/images/products/icons/vegan.svg'
import forVegeterians from '~/assets/images/products/icons/vegeterians.svg'
import minCarbonhydrates from '~/assets/images/products/icons/min-carbonhydrate.svg'
import forNewbies from '~/assets/images/products/icons/for-newbies.svg'
import forPros from '~/assets/images/products/icons/for-pros.svg'
import forEveryOne from '~/assets/images/products/icons/for-everyone.svg'
import halal from '~/assets/images/products/icons/halalsvg.svg'
import glutenFree from '~/assets/images/products/icons/gluten-free.svg';
import sugarFree from '~/assets/images/products/icons/sugar-free.svg';

const tags = reactive([
  {
    title: 'Минимум углеводов',
    image: minCarbonhydrates
  },
  {
    title: 'Без глютена',
    image: glutenFree
  },
  {
    title: 'Без лактозы',
    image: lactoseFree
  },
  {
    title: 'Для веганов',
    image: forVegans
  },
  {
    title: 'Для вегетарианцев',
    image: forVegeterians
  },
  {
    title: 'Без сахара',
    image: sugarFree,
  },
  {
    title: 'Для новичков',
    image: forNewbies
  },
  {
    title: 'Для профи',
    image: forPros
  },
  {
    title: 'Подходит всем',
    image: forEveryOne
  },
  {
    title: 'Халал',
    image: halal
  },
]);
</script>

<style scoped>

.product__tags {
  @apply mt-[25px] lg:mt-[35px];
  @apply flex items-center gap-y-[14px] gap-x-[14px] lg:gap-x-[18px];
  @apply flex-wrap;
  @apply max-w-xs lg:max-w-full;
}

.product__tag {
  @apply relative;
  @apply w-[34px] lg:w-[48px] aspect-square cursor-pointer;
}

.product__tag--description {
  @apply absolute -top-[22px] left-[20px] lg:left-[36px] bg-[#D9D9D9] text-[#141414] text-left text-sm lg:text-base opacity-0;
  @apply px-2 lg:px-3 py-1 lg:py-2;
  @apply whitespace-nowrap;
  @apply font-normal;
  @apply z-10;
  transform: translateY(8px);
  transition: all .3s;
}

.product__tag--description:after {
  content: '';
  position: absolute;
  width: 0;
  height: 0;
  bottom: -12px;
  left: 0;
  border-left: 20px solid #D9D9D9;
  border-right: 20px solid transparent;
  border-bottom: 20px solid transparent;
}

@media (max-width: 700px) {
  .product__tag--description:after {
    border-left-width: 15px;
    border-right-width: 15px;
    border-bottom-width: 15px;
  }
}

.product__tag:hover .product__tag--description {
  opacity: 1;
  transform: translateY(0);
}
</style>
