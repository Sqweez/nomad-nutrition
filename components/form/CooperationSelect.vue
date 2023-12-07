<template>
  <select
      v-if="isMobile"
      class="w-full"
      v-model="selectedItem"
      @change="$emit('update:modelValue', selectedItem)"
      v-bind="$attrs"
  >
    <option
        selected
        disabled
        class="select-option"
        :value="null"
    >
      {{ label }}
    </option>
    <option
        class="select-option"
        v-for="item of items"
        :key="item"
        :value="item">
      {{ item }}
    </option>
  </select>
  <div v-else v-bind="$attrs" class="relative box-content" v-on-click-outside="hideDropdown">
    <div class="flex flex-row justify-between items-center cursor-pointer" @click="showDropdown = true;">
      <input
          disabled
          class="text-sm lg:text-xl bg-transparent pointer-events-none appearance-none"
          :value="getLabel"
          type="text"
      >
      <svg width="18" height="11" viewBox="0 0 18 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 11L17.6603 0.500001H0.339746L9 11Z" fill="white"/>
      </svg>
    </div>
    <div class="select-option&#45;&#45;dropdown" v-if="showDropdown">
      <div class="flex flex-col">
        <div
            @click="_onSelect(item)"
            class="select-option"
            v-for="item of items"
            :key="item"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { vOnClickOutside } from '@vueuse/components'
const { isMobile } = useDevice();
const emit = defineEmits(['update:modelValue']);
const props = defineProps({
  label: {
    type: String,
  },
  items: {
    type: Array,
    default: () => ([])
  },
  autocomplete: {
    type: Boolean,
    default: false,
  },
  modelValue: {},
});

const selectedItem = ref(null);
const showDropdown = ref(false);
const _onSelect = (item) => {
  selectedItem.value = item;
  showDropdown.value = false;
  emit('update:modelValue', item);
}

const getLabel = computed(() => {
  return !selectedItem.value ? props.label : selectedItem.value;
});

const hideDropdown = () => {
  if (showDropdown.value) {
    showDropdown.value = false;
  }
}

const model = computed({
  get () {
    return props.modelValue;
  },
  set (value) {
    emit('update:modelValue', value);
  }
});
</script>

<style scoped>
.select-option--dropdown {
  @apply absolute top-full inset-x-0 pt-1 z-30;
  @apply overflow-y-scroll;
  @apply max-h-[150px] lg:max-h-[300px];
}

.select-option {
  @apply text-sm lg:text-xl py-[15px] px-[18px] lg:py-[20px] lg:px-[31px];
  @apply transition-colors;
  @apply bg-[#292929];
  @apply hover:bg-[#0E0E0E];
  @apply cursor-pointer;
}
</style>
