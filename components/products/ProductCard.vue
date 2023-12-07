<template>
  <nuxt-link to="/products/1" class="product__card flex flex-col items-center justify-between px-3 py-3 gap-y-2.5 cursor-pointer relative">
    <div class="absolute inset-x-0 top-0 flex">
      <div class="py-0.5 px-1.5 bg-accent">
        <span class="text-white uppercase font-medium text-[10px] lg:text-sm">Новинка</span>
      </div>
      <div class="py-0.5 px-1.5 bg-gold">
        <span class="text-white uppercase font-medium text-[10px] lg:text-sm">Акция</span>
      </div>
    </div>
    <div class="flex flex-col items-center">
      <div class="product__card--image overflow-hidden">
        <img
            src="~/assets/images/products/sample_product.png"
            alt="Sample Product"
            class="w-full h-full object-contain"
        >
      </div>
      <span class="text-white text-center uppercase text-sm lg:text-lg font-medium">
        Thermo Rush
      </span>
      <span class="text-[#757575] text-center py-1 text-[12px] lg:text-base">
        Жиросжигатели и термогенетики
      </span>
    </div>
    <div class="justify-between flex items-center gap-x-2 w-full px-4 lg:px-[25px]">
      <span class="text-white text-sm lg:text-lg font-medium flex-shrink-0">
        12.990 тг
      </span>
      <button class="w-[47px] h-[29px] lg:w-[68px] lg:h-[43px] border border-white border-solid py-[5px] px-[10px] lg:py-2 lg:px-4 cart__button flex-shrink-0 relative">
        <svg width="45" height="39" viewBox="0 0 45 39" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full object-contain">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0 15.5564V16.0838C0 16.728 0.849878 17.5779 1.49413 17.5779H3.16406V30.4099C3.16406 34.5149 7.18274 38.6716 11.6016 38.6716H33.3984C37.787 38.6716 41.8359 34.6227 41.8359 30.2341V22.5876C41.8359 21.9434 40.9861 21.0935 40.3418 21.0935C39.5359 21.0935 38.7272 21.2429 38.3783 22.2941C38.1489 22.9852 38.4865 28.4443 38.3081 30.134C38.0043 33.0102 35.9648 35.156 32.7832 35.156H12.2168C9.00266 35.156 6.67968 32.833 6.67968 29.6189V17.5779H43.5059C44.1501 17.5779 45 16.728 45 16.0838V15.5564C45 14.9121 44.1501 14.0623 43.5059 14.0623H1.49413C0.849878 14.0623 0 14.9121 0 15.5564Z" fill="#E63534"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M6.67969 8.52538V9.05275C6.67969 9.697 7.52957 10.5469 8.17385 10.5469C9.61533 10.5469 9.77366 9.95779 11.0523 8.67919L15.3149 4.41652C16.6067 3.12476 17.2266 2.94471 17.2266 1.49416C17.2266 0.849877 16.3767 0 15.7324 0C14.2909 0 14.1326 0.589081 12.854 1.86768L8.59131 6.13039C8.11227 6.6094 6.67969 7.7695 6.67969 8.52538Z" fill="#E63534"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M27.7734 1.49416C27.7734 2.93564 28.3625 3.09397 29.6411 4.37258L33.9038 8.63525C35.1955 9.927 35.3756 10.5469 36.8262 10.5469C37.4704 10.5469 38.3203 9.697 38.3203 9.05275C38.3203 7.61123 37.7312 7.4529 36.4526 6.17433L32.1899 1.91163C30.8982 0.619872 30.7181 0 29.2676 0C28.6233 0 27.7734 0.849877 27.7734 1.49416Z" fill="#E63534"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M27.7734 22.5879V30.1465C27.7734 30.7907 28.6233 31.6406 29.2676 31.6406H29.7949C30.4392 31.6406 31.2891 30.7907 31.2891 30.1465V22.5879C31.2891 21.9436 30.4392 21.0938 29.7949 21.0938H29.2676C28.6233 21.0938 27.7734 21.9436 27.7734 22.5879Z" fill="#E63534"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7109 22.5879V30.1465C13.7109 30.7907 14.5608 31.6406 15.2051 31.6406H15.7324C16.3767 31.6406 17.2266 30.7907 17.2266 30.1465V22.5879C17.2266 21.9436 16.3767 21.0938 15.7324 21.0938H15.2051C14.5608 21.0938 13.7109 21.9436 13.7109 22.5879Z" fill="#E63534"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7422 22.5879V30.1465C20.7422 30.7907 21.5921 31.6406 22.2363 31.6406H22.7637C23.4079 31.6406 24.2578 30.7907 24.2578 30.1465V22.5879C24.2578 21.9436 23.4079 21.0938 22.7637 21.0938H22.2363C21.5921 21.0938 20.7422 21.9436 20.7422 22.5879Z" fill="#E63534"/>
        </svg>

      </button>
    </div>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    }
  },
  data: () => ({
  }),
  methods: {},
  computed: {}
}
</script>

<style scoped>
.product__card {
  background-color: #141414;
  //aspect-ratio: 245/385;
  max-width: 245px;
  width: 100%;
  max-height: 385px;
  height: 100%;
  transition: all .3s;
}

.product__card--image {
  //aspect-ratio: 168/230;
  width: 100%;
  height: 100%;
  max-width: 168px;
  max-height: 230px;
}

@media (max-width: 550px) {
  .product__card--image {
    width: 113px;
    height: 155px;
  }
}

.product__card:hover{
  box-shadow: 8px 12px 36px #000000;
}

.cart__button {
  transition: all .3s;
}

.cart__button:hover {
  background-color: #E63534;
  border-color: #E63534;
}

path {
  transition: fill .3s;
}

.cart__button:hover svg path {
  fill: #fff;
}

.cart__button::after {
  display: block;
  position: absolute;
  bottom: -11px;
  left: 0;
  content: "";
  width: 100%;
  height: 19px;
  background-color: transparent;
  filter: blur(20px);
  z-index: 1;
  border-radius: 20px;
  transition-duration: .3s;
}

.cart__button:hover::after {
  background: #E63534;
}

</style>
