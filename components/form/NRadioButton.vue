<template>
  <input
      ref="radioInputRef"
      type="radio"
      v-bind="$props"
      :value="value"
      :checked="isChecked"
      class="hidden"
      @change="$emit('update:modelValue', $event.target.value)"
  >
  <button
      v-bind="$attrs"
      @click="$refs.radioInputRef.click()"
      class="flex items-center gap-x-3.5 md:gap-x-5">
    <button
      class="p-1 w-[18px] md:w-[26px] h-[18px] md:h-[26px] flex-shrink-0 border-solid border-white border flex items-center justify-center">
      <img v-if="isChecked" src="~/assets/images/icons/checkmark-red.svg" alt="">
    </button>
    <span class="text-white text-sm md:text-lg text-left">
        {{ label }}
    </span>
  </button>
</template>

<script setup>
const props = defineProps({
  label: {
    type: String,
    default: '',
  },
  modelValue: {
    type: [String, Number]
  },
  value: {}
});

const radioInputRef = ref(null);

const emit = defineEmits(['update:modelValue']);
const model = computed({
  get () {
    return props.modelValue
  },
  set (value) {
    emit('update:modelValue', value);
  }
});

const isChecked = computed(() => {
  return props.modelValue == props.value;
});
</script>

<style scoped>

</style>
