<template>
  <div>
    <div v-for="(filter, key) of filters" :key="filter.name" class="pb-[20px] mb-8">
      <button class="flex items-center gap-x-3" @click="_toggleFilterCollapse(filter.id)">
        <span class="text-white uppercase font-medium text-sm md:text-xl">
          {{ filter.name }}
        </span>
        <svg
            width="13"
            height="6"
            viewBox="0 0 13 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            class="transition-all duration-300"
            :class="[isOpened(filter.id) ? '' : 'transform rotate-180']"
        >
          <path d="M6.5 6L12.1294 0L0.871094 0L6.5 6Z" fill="#E63534"/>
        </svg>
      </button>
      <transition-collapse>
        <div
            v-if="isOpened(filter.id)"
            class="pt-6"
        >
          <div class="flex flex-col gap-y-1.5">
            <button
                v-for="(item, _key) of filter.items"
                :key="`${key}-${_key}`"
                class="flex items-center gap-x-3.5 md:gap-x-5"
                @click="selectFilter(filter.id, item.id)"
            >
              <button
                  class="p-1 w-[18px] md:w-[26px] h-[18px] md:h-[26px] flex-shrink-0 border-solid border-white border flex items-center justify-center">
                <svg v-if="isFilterSelected(filter.id, item.id)" width="17" height="13" viewBox="0 0 17 13"
                     fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M16.8115 1.595L15.4469 0.193567C15.1949 -0.0645222 14.7882 -0.0645222 14.5369 0.193567L6.3549 8.59623L2.46308 4.57057C2.21177 4.31248 1.80506 4.31248 1.55311 4.57057L0.188484 5.972C-0.062828 6.23075 -0.062828 6.64842 0.188484 6.90651L5.89512 12.8064C6.14643 13.0645 6.55377 13.0645 6.80508 12.8064L16.8115 2.5295C17.0628 2.27207 17.0628 1.85309 16.8115 1.595Z"
                      fill="#E63534"/>
                </svg>
              </button>
              <span class="text-[#AAAAAA] text-sm md:text-lg text-left">
                {{ item.name }}
              </span>
            </button>
          </div>
        </div>
      </transition-collapse>
    </div>
  </div>
</template>

<script>
import TransitionCollapse from "~/components/utils/transitions/TransitionCollapse.vue";

export default {
  props: {
    filters: {
      type: Array,
      required: true
    }
  },
  components: {TransitionCollapse},
  data: () => ({
    openedFilters: [],
    checkedFilters: {},
  }),
  created() {
    this.openedFilters = this.filters.map(f => f.id);
  },
  methods: {
    isFilterSelected(parentId, filterId) {
      return !!(this.checkedFilters.hasOwnProperty(parentId) && this.checkedFilters[parentId].includes(filterId));
    },
    isOpened(parentId) {
      return this.openedFilters.includes(parentId);
    },
    _toggleFilterCollapse(parentId) {
      if (this.isOpened(parentId)) {
        this.openedFilters = this.openedFilters.filter(o => o !== parentId);
      } else {
        this.openedFilters.push(parentId);
      }
    },
    selectFilter(parentId, filterId) {
      let filters = [];
      if (this.isFilterSelected(parentId, filterId)) {
        filters = [...this.checkedFilters[parentId].filter(i => i !== filterId)];
      } else {
        if (this.checkedFilters.hasOwnProperty(parentId)) {
          filters = [...this.checkedFilters[parentId]];
          filters.push(filterId);
        } else {
          filters.push(filterId);
        }
      }
      this.checkedFilters = {
        ...this.checkedFilters,
        [parentId]: filters
      };
    }
  },
  computed: {}
}
</script>

<style scoped>

</style>
