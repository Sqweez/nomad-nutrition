<template>
  <InlineLoader v-if="!pageLoaded" />
  <div v-if="pageLoaded">
    <section id="#catalog" class="relative">
      <div class="hidden lg:block absolute -top-[350px] right-0">
        <img src="~/assets/images/backgrounds/bg-catalog-smoke.png" alt="">
      </div>
      <!-- PARALLAX -->
      <div class="hidden lg:block absolute rellax right-0"  data-rellax-speed="-1">
        <img src="~/assets/images/parallax/3.webp" alt="">
      </div>
      <div class="hidden lg:block absolute rellax bottom-[20px]"  data-rellax-speed="-1">
        <img src="~/assets/images/parallax/2.webp" alt="">
      </div>
      <!-- PARALLAX -->
      <div class="container mx-auto lg:pt-[38px]">
        <div class="flex flex-col lg:flex-row justify-start lg:justify-between lg:items-start gap-x-6 gap-y-6">
          <!-- FILTERS SECTION -->
          <div id="filters" class="flex-shrink-0 lg:min-w-[265px] lg:max-w-[265px]">
            <button class="flex lg:hidden py-[22px] px-3 bg-[#0c0c0c] w-full gap-x-2 items-center" @click="mobileFiltersShow = true">
              <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="22.0005" height="2.00004" transform="matrix(-1 0 0 1 22 0)" fill="white"/>
                <rect width="15" height="2" transform="matrix(-1 0 0 1 15 8)" fill="white"/>
                <rect width="9" height="2" transform="matrix(-1 0 0 1 9 16)" fill="white"/>
              </svg>
              <span class="text-white text-sm font-bold">
                Фильтр
              </span>
            </button>
            <mobile-product-filters
                :filters="filters"
                :active="mobileFiltersShow"
                @close="mobileFiltersShow = false"
            />
            <div class="hidden lg:block">
              <product-filters
                  :filters="filters"
              />
            </div>
          </div>
          <!--END FILTERS SECTION -->
          <!-- PRODUCTS SECTION -->
          <div class="flex-1 px-[11px] lg:px-0 flex flex-col">
            <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
              <ProductCard
                  v-for="item of 20"
                  :key="item"
                  :product="{}"
              />
            </div>
            <div class="w-full flex justify-between items-center mt-14">
              <div class="hidden md:block flex-1" />
              <div class="flex-1">
                <button
                    class="button__more"
                >
                  Показать еще
                </button>
              </div>
              <products-pagination />
            </div>
          </div>
          <!-- END PRODUCTS -->
        </div>
      </div>
    </section>
    <page-wrapper class="container mx-auto py-[60px] lg:py-[100px] relative">
      <div class="mt-10 px-4">
        <p class="font-medium text-white text-[32px] uppercase">Для магазинов</p>
        <p class="my-4 text-white text-sm lg:text-xl font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deserunt dolore expedita fugiat impedit
          magni non quae quod sit, velit. Commodi cumque illum incidunt nemo unde! Alias amet aperiam autem cum
          delectus deleniti dolorem ducimus ea eaque enim eos error est expedita fugit illum ipsa, iusto laudantium
          libero magnam modi nam necessitatibus nesciunt nihil non numquam omnis perferendis porro qui quis quod
          reiciendis sunt tempora tempore totam unde voluptatem voluptatum! Ab accusamus consectetur cumque debitis
          ducimus error, expedita ipsum, itaque minima molestias odit omnis optio pariatur quaerat quidem reiciendis
          repellendus sunt. Adipisci aperiam autem consequatur dolorem doloremque doloribus enim eos eveniet expedita
          explicabo id inventore laborum magnam nesciunt nostrum numquam odio omnis porro praesentium provident
          quaerat quidem quisquam, recusandae reiciendis rem repellendus sequi unde? Aperiam debitis doloribus ipsa
          placeat quibusdam! Autem corporis cumque enim, error ex exercitationem illum itaque labore mollitia natus
          neque officiis optio porro quae quaerat recusandae reprehenderit.
        </p>
        <p class="my-4 text-white text-sm lg:text-xl font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto deserunt dolore expedita fugiat impedit
          magni non quae quod sit, velit. Commodi cumque illum incidunt nemo unde! Alias amet aperiam autem cum
          delectus deleniti dolorem ducimus ea eaque enim eos error est expedita fugit illum ipsa, iusto laudantium
          libero magnam modi nam necessitatibus nesciunt nihil non numquam omnis perferendis porro qui quis quod
          reiciendis sunt tempora tempore totam unde voluptatem voluptatum! Ab accusamus consectetur cumque debitis
          ducimus error, expedita ipsum, itaque minima molestias odit omnis optio pariatur quaerat quidem reiciendis
          repellendus sunt. Adipisci aperiam autem consequatur dolorem doloremque doloribus enim eos eveniet expedita
          explicabo id inventore laborum magnam nesciunt nostrum numquam odio omnis porro praesentium provident
          quaerat quidem quisquam, recusandae reiciendis rem repellendus sequi unde? Aperiam debitis doloribus ipsa
          placeat quibusdam! Autem corporis cumque enim, error ex exercitationem illum itaque labore mollitia natus
          neque officiis optio porro quae quaerat recusandae reprehenderit.
        </p>
      </div>

    </page-wrapper>
  </div>
</template>

<script setup>
import ProductCard from "~/components/products/ProductCard.vue";
import ProductFilters from "~/components/products/ProductFilters.vue";
import MobileProductFilters from "~/components/products/MobileProductFilters.vue";
import ProductsPagination from "~/components/products/ProductsPagination.vue";
import PRODUCT_FILTERS from "~/consts/PRODUCT_FILTERS.js";
import PageWrapper from "~/components/wrapper/PageWrapper.vue";
import {useCommonStore} from '~/store/common.js';
import {toReactive} from '@vueuse/core';
import InlineLoader from '~/components/utils/InlineLoader.vue';

const commonStore = useCommonStore();
const { categories } = toReactive(commonStore);
const pageLoaded = ref(false);

const route = useRoute();

const { $loader } = useNuxtApp()

const filters = reactive(PRODUCT_FILTERS);
const mobileFiltersShow = ref(false);

const _getBreadCrumbs = () => {
  const breadcrumbs = [
    {
      name: 'Главная',
      path: '/'
    },
    {
      name: 'Каталог',
      path: '/catalog'
    }
  ];

  const slug = route.params.slug;
  const type = route.params.type;
  let pageName = '';
  for (let i = 0; i < categories.length; i++) {
    if (type === 'category' && categories[i].category_slug === slug) {
      pageName = categories[i].name;
      break;
    }
    if (type === 'subcategory') {
      for (let x = 0; x < categories[i].subcategories.length; x++) {
        if (categories[i].subcategories[x].subcategory_slug === slug) {
          pageName = categories[i].subcategories[x].subcategory_name;
          break;
        }
      }
    }
  }


  if (route.name === 'catalog-type-slug') {
    breadcrumbs.push({
      name: pageName,
      path: route.path,
    })
  }

  return breadcrumbs;
}

onMounted(() => {
  commonStore.$patch({
    commonBreadcrumbs: {
      [route.name]: _getBreadCrumbs(),
    }
  })
  setTimeout(() => {
    pageLoaded.value = true;
  }, 2000)
})

onBeforeUnmount(() => {
  commonStore.$patch({
    commonBreadcrumbs: {},
  })
})
</script>

<style scoped>
.button__more {
  @apply text-white border border-solid border-white py-2 transition-colors hover:bg-accent hover:border-accent;
  @apply text-sm lg:text-lg;
  @apply px-4 lg:px-8;
}
</style>
