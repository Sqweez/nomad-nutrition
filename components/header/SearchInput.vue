<template>
  <div class="flex-1 flex relative" ref="inputContainer">
    <div class="flex items-center justify-between flex-1">
      <div class="flex flex-1 items-center gap-x-2 py-1 pr-1 pl-6 bg-[#0c0c0c] lg:bg-dark">
        <input
            v-model.trim="search"
            ref="inputRef"
            type="search"
            placeholder="Введите поисковый запрос"
            class="flex-1 bg-transparent outline-0 text-white text-sm xl:text-xl placeholder:text-[#3E3E3E]"
        >
        <button type="button" class="py-[15px] px-5 text-white shadow-xl text-sm xl:text-xl bg-accent hover:bg-accent-dark transition-colors">
          Найти
        </button>
      </div>
    </div>
    <div v-if="showSearchDropdown" class="absolute inset-0 top-full z-30" >
      <div v-if="pendingResult" class="py-8 bg-[#0E0E0E] px-6 flex justify-center items-center">
        <span class="loading loading-spinner bg-accent"></span>
      </div>
      <div v-else class="lg:max-h-[350px] overflow-y-scroll">
        <nuxt-link tag="div" to="/products/1" class="flex lg:py-3 lg:px-6 bg-[#0E0E0E] items-center lg:gap-x-[33px] cursor-pointer transition-colors hover:bg-[#080808]">
          <div class="lg:w-[119px] lg:h-[143px]">
            <img src="~/assets/images/products/sample_product.png" alt="Sample Product Name" class="w-full h-full object-contain">
          </div>
          <div class="flex flex-col gap-y-3">
            <span class="text-white font-semibold lg:text-xl uppercase">
              thermo rush
            </span>
            <span class="text-[#757575]">
              Жиросжигатель-термогенетик
            </span>
          </div>
        </nuxt-link>
        <nuxt-link tag="div" to="/products/1" class="flex lg:py-3 lg:px-6 bg-[#0E0E0E] items-center lg:gap-x-[33px] cursor-pointer transition-colors hover:bg-[#080808]">
          <div class="lg:w-[119px] lg:h-[143px]">
            <img src="~/assets/images/products/sample_product.png" alt="Sample Product Name" class="w-full h-full object-contain">
          </div>
          <div class="flex flex-col gap-y-3">
            <span class="text-white font-semibold lg:text-xl uppercase">
              thermo rush
            </span>
            <span class="text-[#757575]">
              Жиросжигатель-термогенетик
            </span>
          </div>
        </nuxt-link>
        <nuxt-link tag="div" to="/products/1" class="flex lg:py-3 lg:px-6 bg-[#0E0E0E] items-center lg:gap-x-[33px] cursor-pointer transition-colors hover:bg-[#080808]">
          <div class="lg:w-[119px] lg:h-[143px]">
            <img src="~/assets/images/products/sample_product.png" alt="Sample Product Name" class="w-full h-full object-contain">
          </div>
          <div class="flex flex-col gap-y-3">
            <span class="text-white font-semibold lg:text-xl uppercase">
              thermo rush
            </span>
            <span class="text-[#757575]">
              Жиросжигатель-термогенетик
            </span>
          </div>
        </nuxt-link>
        <nuxt-link tag="div" to="/products/1" class="flex lg:py-3 lg:px-6 bg-[#0E0E0E] items-center lg:gap-x-[33px] cursor-pointer transition-colors hover:bg-[#080808]">
          <div class="lg:w-[119px] lg:h-[143px]">
            <img src="~/assets/images/products/sample_product.png" alt="Sample Product Name" class="w-full h-full object-contain">
          </div>
          <div class="flex flex-col gap-y-3">
            <span class="text-white font-semibold lg:text-xl uppercase">
              thermo rush
            </span>
            <span class="text-[#757575]">
              Жиросжигатель-термогенетик
            </span>
          </div>
        </nuxt-link>
        <nuxt-link tag="div" to="/products/1" class="flex lg:py-3 lg:px-6 bg-[#0E0E0E] items-center lg:gap-x-[33px] cursor-pointer transition-colors hover:bg-[#080808]">
          <div class="lg:w-[119px] lg:h-[143px]">
            <img src="~/assets/images/products/sample_product.png" alt="Sample Product Name" class="w-full h-full object-contain">
          </div>
          <div class="flex flex-col gap-y-3">
            <span class="text-white font-semibold lg:text-xl uppercase">
              thermo rush
            </span>
            <span class="text-[#757575]">
              Жиросжигатель-термогенетик
            </span>
          </div>
        </nuxt-link>
        <nuxt-link tag="div" to="/products/1" class="flex lg:py-3 lg:px-6 bg-[#0E0E0E] items-center lg:gap-x-[33px] cursor-pointer transition-colors hover:bg-[#080808]">
          <div class="w-[60px] h-[80px] lg:w-[119px] lg:h-[143px]">
            <img src="~/assets/images/products/sample_product.png" alt="Sample Product Name" class="w-full h-full object-contain">
          </div>
          <div class="flex flex-col gap-y-3">
            <span class="text-white font-semibold lg:text-xl uppercase">
              thermo rush
            </span>
            <span class="text-[#757575]">
              Жиросжигатель-термогенетик
            </span>
          </div>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useDebounceFn, onClickOutside } from '@vueuse/core'
const search = ref('');
const inputRef = ref(null);
const inputContainer = ref(null);
const pendingResult = ref(false);
const showSearchDropdown = ref(false);
const route = useRoute();
const routePath = computed(() => route.path);

onClickOutside(inputContainer, () => {
  if (showSearchDropdown.value) {
    showSearchDropdown.value = false;
  }
})

const closeDropdown = () => {
  showSearchDropdown.value = false;
  pendingResult.value = false;
}

const searchDebounced = useDebounceFn(() => {
  if (search.value.length < 3) {
    closeDropdown();
    return false;
  }
  showSearchDropdown.value = true;
  pendingResult.value = true;
  setTimeout(() => {
    pendingResult.value = false;
  }, 500);
}, 500)

watch(search, () => {
  searchDebounced();
});

watch(routePath, () => {
  closeDropdown();
  search.value = '';
})

</script>

<style scoped>

</style>
