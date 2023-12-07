import { defineStore } from 'pinia'
import useApi from '~/composables/useApi.js';
export const useCommonStore = defineStore('common', {
  state: () => ({
    categories: [],
    commonBreadcrumbs: {},
  }),
  getters: {
    catalogNavigation () {
      return {
        name: 'Каталог',
        url: '/catalog',
        showDropdown: false,
        children: this.categories.map((category) => ({
          name: category.name,
          url: `/catalog/category/${category.category_slug}`,
          showDropdown: false,
          children: category.subcategories.map(subcategory => ({
            name: subcategory.subcategory_name,
            url: `/catalog/subcategory/${subcategory.subcategory_slug}`,
          })),
        })),
      };
    },
  },
  actions: {
    async getCategories () {
      const { data } = await useApi().get('/v3/nomad/category');
      this.categories = data.value.data;
    }
  }
})
