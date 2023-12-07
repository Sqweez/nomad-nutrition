<template>
  <div>
    <div class="cart">
      <div class="cart-item">
        <div class="item">
          Товар
        </div>
        <div class="quantity">
          Количество
        </div>
        <div class="price">
          Цена
        </div>
        <div class="sum">
          Сумма
        </div>
        <div class="action">
          &nbsp;
        </div>
      </div>
      <div v-for="(item, idx) of cart" :key="`item-${item.id}`" class="cart-item">
        <div class="item">
          <div class="item-image">
            <img src="../../assets/images/products/sample_product.png" alt="">
          </div>
          <div class="flex flex-col item-description">
            <p class="item-name">
              {{ item.product_name }}
            </p>
            <p class="item-attribute">
              {{ item.attribute_product }}
            </p>
            <p class="item-attribute-select">
              {{ item.attribute_sku }}
            </p>
          </div>
        </div>
        <div class="quantity">
          <div class="quantity-toggle">
            <button @click="_decreaseQnt(idx)">
              -
            </button>
            <p>
              {{ item.count }}
            </p>
            <button @click="_increaseQnt(idx)">
              +
            </button>
          </div>
        </div>
        <div class="price">
          {{ $filter.currency(item.product_price) }}
        </div>
        <div class="total">
          {{ $filter.currency(item.product_price * item.count) }}
        </div>
        <div class="action">
          <button class="action-remove" @click="_removeItem(idx)">
            <svg class="w-full h-full object-contain" width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1.35284" y="2.00586" width="0.924366" height="23.1091" transform="rotate(-45 1.35284 2.00586)" fill="#141414" stroke="white" stroke-width="0.924366"/>
              <rect x="-0.653625" width="0.924366" height="23.1091" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 17.8842 1.54368)" fill="#141414" stroke="white" stroke-width="0.924366"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { $filter } = useNuxtApp();
import {useCartStore} from "~/store/cart.js";

const cartStore = useCartStore();

/***
 * @typedef {Object} CartProduct
 * @property {number} id - Идентификатор продукта в корзине.
 * @property {number} count - Количество данного продукта в корзине.
 * @property {number} quantity - Количество данного продукта в наличии.
 * @property {number} change - Изменение количества продукта в корзине.
 * @property {string} product_name - Название продукта.
 * @property {string} product_image - URL изображения продукта.
 * @property {Array<string>} attribute_sku - Атрибуты SKU продукта.
 * @property {Array<string>} attribute_product - Атрибуты продукта.
 * @property {string} subcategory - Название подкатегории продукта.
 * @property {boolean} is_site_visible - Флаг видимости продукта на сайте.
 * @property {number} product_price - Цена продукта.
 * @property {number} iherb_price - Цена на iHerb (или альтернативная цена).
 * @property {string} product_name_slug - Название продукта в формате slug.
 * @property {number} product_id - Идентификатор продукта.
 * @property {number} discount - Скидка на продукт (в процентах).
 * @property {number} final_price - Итоговая цена продукта после применения скидки.
 * @property {number} product_price_rub - Цена продукта в рублях.
 * @property {number} manufacturer_id - Идентификатор производителя продукта.
 * @property {number} category_id - Идентификатор категории продукта.
 * @property {number} cart_product_id - Идентификатор продукта в корзине.
 */
/**
 * Массив объектов, представляющих продукты в корзине.
 *
 * @type {CartProduct[]}
 */

const { cart } = storeToRefs(cartStore);
const { _increaseQnt, _decreaseQnt, _removeItem } = cartStore;
</script>

<style scoped lang="scss">
.cart-item {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 49px;
  grid-template-areas: "item quantity price total action";
  justify-content: space-between;
  align-items: center;;
}

@media (max-width: 1023px) {
  .cart-item {
    grid-template-columns: 1fr 1fr 80px;
    grid-template-areas: "item item total" "quantity . action";
    grid-column-gap: 20px;
    grid-row-gap: 16px;
    align-items: start;
  }
}

.cart-item:first-child {
  @apply hidden lg:grid;
  @apply py-4;
  @apply text-xl;
  @apply text-white;

  .quantity, .price, .sum {
    @apply text-center;
  }

}


.cart-item {
  @apply py-[26px] lg:py-[43px];
  @apply text-white;
  border-bottom: 1px solid #3D3D3D;

  .quantity, .price, .total {
    @apply flex justify-center relative;
  }
}

.item {
  grid-area: item;
}

.quantity {
  grid-area: quantity;
  @apply ml-[108px] lg:ml-0;
}

.price {
  grid-area: price;
  @apply whitespace-nowrap;
  @media (max-width: 1023px) {
    display: none!important;
  }
}

.total {
  grid-area: total;
  @apply whitespace-nowrap;
}

.action {
  grid-area: action;
  @apply flex justify-end;
}

.cart-item .item {
  @apply flex items-center;
  @apply gap-x-5 lg:gap-x-[30px];
}

.item-name {
  @apply text-sm lg:text-xl;
}

.item-attribute {
  @apply text-accent mt-3;
  @apply text-sm lg:text-xl;;
}

.item-attribute-select {
  @apply text-sm lg:text-xl;
  @apply mt-2;
}

.item-image {
  @apply w-[86px] h-[86px] lg:w-[136px] lg:h-[136px];
  @apply bg-[#0A0A0A] flex-shrink-0;
}

.item-image img {
  @apply w-full h-full object-contain;
}

.item-description {
  @apply lg:pr-[80px];
}

.quantity-toggle {
  @apply flex;
  @apply w-[131px] lg:w-[208px];
  @apply bg-[#141414];
  border: 1px solid #3D3D3D;
}

.quantity-toggle button, .quantity-toggle p {
  @apply flex-1;
  @apply text-center;
  @apply font-medium;
  @apply text-sm lg:text-lg;
  @apply py-3 lg:py-[18px];
}

.action-remove {
  @apply p-3 w-[35px] h-[35px] lg:w-[49px] lg:h-[49px] bg-accent;
}
</style>
