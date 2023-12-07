const useApi = () => {
  const config = useRuntimeConfig();
  const token = useCookie('auth:token');
  const request = async (url, params, method) => {
    const opts = {
      key: url,
      baseURL: config.public.baseURL,
      async onRequest({ options }) {

        options.headers = options.headers || {}

        if (token.value) {
          options.headers['Authorization'] = `Bearer ${token.value}`;
        }
      },

      async onRequestError({ error }) {
        console.log(error.message)
      },

      async onResponseError({ response }) {
        console.log(response._data.message)
      },

      ...params
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
