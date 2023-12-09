import { defineStore } from 'pinia';
import useProductApi from '~/composables/api/useProductApi.js';

const api = useProductApi;

export const useCatalogStore = defineStore('catalog', {
  state: () => ({
    products: [],
    product: null,
    links: [],
    meta: [],
  }),
  getters: {
    showPagination (state) {
      return state.meta && state.meta?.last_page > 1;
    }
  },
  actions: {
    async _getProducts (filters = {}) {
      const response = await api.getProducts(filters);
      const data = response.data.value;
      this.products = data.data;
      this.links = data.links;
      this.meta = data.meta;
    },
    async _getProduct (product_id) {
      const response = await api.getProduct(product_id);
      const data = response.data.value;
      this.product = data.data;
    },
  }
})
