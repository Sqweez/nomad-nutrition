<template>
  <section id="#checkout" class="relative pb-[100px] lg:pb-[400px]">
    <div class="hidden lg:block absolute rellax right-0 -top-[4%]"  data-rellax-speed="-1">
      <img src="~/assets/images/parallax/3.webp" alt="">
    </div>
    <page-wrapper class="px-3 lg:px-10 z-10 relative">
      <h1 class="font-medium text-white text-[30px] lg:text-[70px] uppercase py-3 overflow-hidden text-center">
        Оформление заказа
      </h1>
      <div class="mt-[67px] lg:mt-[128px]">
        <div class="grid lg:grid-cols-2 gap-y-[50px] lg:gap-x-20">
          <div>
            <span class="checkout__title">
              Данные клиента
            </span>
            <div class="mt-[30px] lg:mt-[65px] flex flex-col gap-y-[10px] lg:gap-y-[21px]">
              <div class="checkout__control">
                <label for="name">
                  ФИО<span>*</span>
                </label>
                <input type="text" class="checkout__input" v-model="form.name">
              </div>
              <div class="checkout__control">
                <label for="name">
                  Телефон<span>*</span>
                </label>
                <input
                    type="tel"
                    class="checkout__input"
                    v-model="form.phone"
                    v-maska
                    data-maska="+7 ### ### ## ##"
                >
              </div>
              <div class="checkout__control">
                <label for="name">
                  Email
                </label>
                <input
                    type="email"
                    class="checkout__input"
                    v-model="form.email"
                >
              </div>
            </div>
          </div>
          <div>
            <span class="checkout__title">
              Данные для оплаты
            </span>
            <div class="mt-[30px] lg:mt-[65px] flex flex-col gap-y-[10px] lg:gap-y-[21px]">
              <div class="checkout__control">
                <label for="name">
                  Способ оплаты<span>*</span>
                </label>
                <select v-model="form.payment_method" class="checkout__input">
                  <option
                      v-for="method of paymentMethods"
                      :value="method.key"
                  >
                    {{ method.value }}
                  </option>
                </select>
              </div>
              <div class="checkout__control">
                <label for="name">
                  Способ получения<span>*</span>
                </label>
                <select v-model="form.delivery_method" class="checkout__input">
                  <option
                      v-for="method of deliveryMethods"
                      :value="method.key"
                  >
                    {{ method.value }}
                  </option>
                </select>
              </div>
              <div
                  v-if="form.delivery_method === 0"
                  class="checkout__control">
                <label for="name">
                  Адрес доставки<span>*</span>
                </label>
                <input
                    type="email"
                    class="checkout__input"
                    v-model="form.address"
                >
              </div>
            </div>
          </div>
        </div>
        <div class="mt-6 lg:mt-[80px]">
          <div class="checkout__control">
            <label for="name">
              Комментарий<span>*</span>
            </label>
            <textarea
                type="text"
                class="checkout__input"
                v-model="form.comment"
                rows="4"
            />
            <small class="text-[#3D3D3D] font-sm lg:font-base">
              Например, уточнения по оформлению заказа, номер карты клиента или как найти ваш дом
            </small>
          </div>
        </div>
        <button class="action__button" @click="$router.push('/checkout')">
          Оформить заказ
        </button>
      </div>
    </page-wrapper>
  </section>
</template>

<script setup>
import PageWrapper from "~/components/wrapper/PageWrapper.vue";
import Rellax from "rellax";

definePageMeta({
  name: 'Оформление заказа',
  keepalive: true,
})

onMounted(() => {
  new Rellax('.rellax')
})

const form = ref({
  name: '',
  phone: '',
  email: '',
  payment_method: 0,
  delivery_method: 0,
  address: '',
  comment: '',
});

const paymentMethods = ref([
  {
    key: 0,
    value: 'Наличными при получении'
  },
  {
    key: 1,
    value: 'Kaspi Перевод/Картой'
  },
  {
    key: 2,
    value: 'Картой онлайн'
  }
]);

const deliveryMethods = ref([
  {
    key: 0,
    value: 'Доставка курьером'
  },
  {
    key: 1,
    value: 'Самовывоз'
  }
])

</script>

<style scoped lang="scss">
.checkout__title {
  @apply font-semibold;
  @apply text-sm lg:text-xl;
  @apply text-accent;
  @apply uppercase;
}

label {
  @apply text-white;
  @apply text-sm lg:text-lg;
  @apply ml-6;
  span {
    @apply text-accent;
  }
}

.checkout__control {
  @apply flex flex-col;
  @apply gap-y-2 lg:gap-y-4;
}

.checkout__input {
  @apply bg-[#0C0C0C];
  @apply py-4 lg:py-5;
  @apply px-5;
  @apply text-white;
  @apply text-sm lg:text-lg;
  @apply border border-solid border-[#3d3d3d];
  @apply transition-colors;
  @apply focus:border-[#fff];
  @apply outline-none;
}

input.checkout__input, select.checkout__input {
  @apply h-[50px] lg:h-[62px];
}

select, input {
  outline: none!important;
}

.action__button {
  @apply relative font-light text-sm lg:text-lg shadow-xl text-center py-4 lg:py-5 text-white uppercase inline-block border border-solid border-white;
  @apply mt-[57px] lg:mt-[82px];
  @apply w-full lg:w-[382px];
  @apply float-none lg:float-right;
}


.action__button::after {
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

.action__button:hover::after {
  background: #E63534;
}
</style>
