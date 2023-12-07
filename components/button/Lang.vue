<template>
  <div class="relative">
    <div class="min-w-[40px] max-w-[40px] w-[40px]" v-click-outside="() => {showDropdown = false}">
      <span @click="showDropdown = !showDropdown" class="cursor-pointer text-white text-xl p-1 border border-solid border-white rounded-[9px] uppercase w-full">
        {{ currentLanguage }}
      </span>
      <transition>
        <div v-if="showDropdown" class="absolute top-8 inset-x-0 flex flex-col bg-black border border-solid border-white rounded-[9px] z-10">
          <div
              v-for="lang of availableLanguages"
              :key="lang"
              class="py-1.5 text-center uppercase cursor-pointer"
              @click.prevent="setLang(lang)"
          >
          <span
              class="text-xl text-white"
              :class="[currentLanguage.toLowerCase() === lang.toLowerCase() ? 'text-red-500' : 'text-white']"
          >
            {{ lang }}
          </span>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    availableLanguages: [
      /*'kz', */'ru'
    ],
    currentLanguage: 'ru',
    showDropdown: false,
  }),
  methods: {
    setLang (lang) {
      this.currentLanguage = lang;
      this.showDropdown = false;
    }
  },
  computed: {}
}
</script>

<style scoped>

</style>
