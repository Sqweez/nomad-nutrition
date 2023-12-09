import useApi from '~/composables/useApi.js';
const useProductApi = () => {

  const payload = {
    store_id: __hardcoded(1),
    brands: __hardcoded([608])
  };

  const getProducts = async (params) => {
    return await useApi().get(`/shop/products`, {
      query: {
        ...payload,
        ...params,
      }
    })
  }

  const getProduct = async (productId) => {
    return await useApi().get(`/shop/products/${productId}`, {
      query: {
        ...payload,
      }
    })
  }


  return {
    getProducts,
    getProduct,
  }
}

export default useProductApi();
