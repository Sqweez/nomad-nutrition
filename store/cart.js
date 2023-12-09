import { defineStore } from "pinia";
import {useLocalStorage} from '@vueuse/core';
import {generateUniqueRandomString} from '~/utils/helpers.js';

export const useCartStore = defineStore('cart', {
    state: () => ({
        userToken: useLocalStorage('NOMAD_USER_TOKEN', generateUniqueRandomString(30)),
        cart: [
            {
                id: 1,
                product_name: 'Glucosamine Chondroitin MSM Nomad Nutrition',
                attribute_product: '90 Капсул',
                product_price: 49990,
                attribute_sku: 'Апельсин',
                count: 1,
                quantity: 100,
            },
            {
                id: 2,
                product_name: 'Glucosamine Chondroitin MSM Nomad Nutrition',
                attribute_product: '90 Капсул',
                product_price: 8971,
                attribute_sku: 'Малина',
                count: 5,
                quantity: 10,
            },
            {
                id: 3,
                product_name: 'Glucosamine Chondroitin MSM Nomad Nutrition',
                attribute_product: '90 Капсул',
                product_price: 7850,
                attribute_sku: 'Ежевика',
                count: 4,
                quantity: 10,
            },
            {
                id: 4,
                product_name: 'Glucosamine Chondroitin MSM Nomad Nutrition',
                attribute_product: '90 Капсул',
                product_price: 6490,
                attribute_sku: 'Малина',
                count: 1,
                quantity: 10,
            }
        ],
        cartStage: 1,
    }),
    getters: {
        cartCount (state) {
            return state.cart.reduce((a, c) => {
                return a + c.count;
            }, 0)
        },
        totalAmount (state) {
            return state.cart.reduce((a, c) => {
                return a + (c.count * c.product_price)
            }, 0)
        },
        isFreeDelivery () {
            return this.totalAmount() > 10000000;
        }
    },
    actions: {
        _increaseQnt (index) {
            const needle = this.cart.at(index);
            this.cart[index].count = Math.min(needle.quantity, needle.count + 1);
        },
        _decreaseQnt (index) {
            const needle = this.cart.at(index);
            this.cart[index].count = Math.max(1, needle.count - 1);
        },
        _removeItem (index) {
            this.cart.splice(index, 1);
        },
        _setCartStage (stage) {
            this.cartStage = stage;
        }
    }
})
