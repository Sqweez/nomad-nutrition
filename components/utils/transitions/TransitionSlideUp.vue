<template>
  <transition>
    <slot v-if="active"/>
  </transition>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({}),
  methods: {},
  computed: {}
}
</script>

<style scoped>
.v-enter-from, .v-leave-to {
  transform: translateY(100%);
  opacity: 0;
}

.v-enter-to, .v-leave-from {
  transform: translateY(0);
  opacity: 1;
}

.v-enter-active, .v-leave-active {
  transition: all .4s;
}
</style>
