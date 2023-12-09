import {useCartStore} from '~/store/cart.js';

const useApi = () => {
  const config = useRuntimeConfig();
  const token = useCookie('auth:token');
  const cartStore = useCartStore();


  const request = async (url, params, method) => {
    const queryParams = params?.query ? params.query : {};
    const opts = {
      key: url,
      baseURL: config.public.baseURL,
      async onRequest({ options }) {

        options.headers = options.headers || {}

        if (cartStore.userToken) {
          options.headers['Authorization'] = `Bearer ${cartStore.userToken}`;
        }
      },

      async onRequestError({ error }) {
        console.log(error.message)
      },

      async onResponseError({ response }) {
        console.log(response._data.message)
      },

      ...params,

      query: {
        user_token: cartStore.userToken,
        ...queryParams
      },

    };

    return useFetch(url, {...opts, method});
  }

  const get = async (url, params) => {
    return await request(url, params, 'GET');
  }

  const post = async (url, params) => {
    return await request(url, params, 'POST');
  }

  const patch = async (url, params) => {
    return await request(url, params, 'PATCH');
  }

  return {
    get, post, patch
  }
}

export default useApi;
