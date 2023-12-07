<template>
  <div>
    <transition name="fade" appear>
      <div v-if="isOpen" class="z-75 inset-0 fixed bg-black bg-opacity-70" style="z-index: 998;"/>
    </transition>
    <transition name="pop" appear>
      <div
          v-show="isOpen"
          class="inset-0 fixed flex justify-center items-center"
          style="z-index: 999;"
      >
        <component
            v-if="view"
            :is="view"
            v-model="model"
            ref="modalRef"
        />
      </div>
    </transition>
  </div>
</template>

<script setup>
import {useModal} from '~/store/modal.js';
import { onClickOutside } from '@vueuse/core'

const modal = useModal();
const model = reactive({});
const { view, isOpen } = storeToRefs(modal);
import { useScrollLock } from '@vueuse/core'
const isBodyLocked = useScrollLock(document.querySelector('html'));
const modalRef = ref(null);

onMounted(() => {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen) {
      modal.close();
    }
  })
})

watch(isOpen, (value) => {
  isBodyLocked.value = value;
});

onClickOutside(modalRef, () => {
  if (isOpen.value) {
    modal.close();
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .3s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.pop-enter-active,
.pop-leave-active {
  transition: transform 0.3s cubic-bezier(0.5, 0, 0.5, 1), opacity 0.3s linear;
}

.pop-enter,
.pop-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
