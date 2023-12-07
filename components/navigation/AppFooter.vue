<template>
  <div class="relative">
    <div v-if="isDefaultBackground" class="absolute left-1/2 right-0 bottom-full overflow-hidden">
      <img src="~/assets/images/backgrounds/footer-top-mountains.svg" class="w-full h-full object-contain" alt="Background">
    </div>
    <div v-if="isCartBackground" class="absolute left-0 right-1/2 bottom-full overflow-hidden hidden lg:block">
      <img src="~/assets/images/backgrounds/footer-cart-base.svg" class="w-full h-full object-contain" alt="Background">
    </div>
    <div v-if="isCheckoutBackground" class="absolute left-1/2 right-0 bottom-full overflow-hidden hidden lg:block">
      <img src="~/assets/images/backgrounds/footer-cart-order.svg" class="w-full h-full object-contain" alt="Background">
    </div>
<!--    <img src="~/assets/images/backgrounds/footer-top-mountains.svg">-->
    <footer class="bg-[#0A0A0A] bg-no-repeat bg-bottom" :style="{backgroundImage: `url('${footerBackground}')`}">
      <div class="container text-white py-[42px] px-3 lg:py-12 relative">
        <div class="flex flex-col lg:flex-row items-start lg:items-stretch">
          <div class="flex items-center">
            <nuxt-link class="flex-shrink-0" to="/">
              <img src="~/assets/images/logo/logo-main.svg" alt="Nomad Logo" class="w-[144px] lg:w-auto">
            </nuxt-link>
          </div>
          <!-- LINKS -->
          <div class="flex flex-col gap-y-4 mt-[22px] lg:mt-0 lg:ml-[123px]">
            <nuxt-link v-for="link of links" :to="link.url" class="text-[#9B9B9B] text-sm lg:text-xl hover:text-gray-300 transition-colors font-extralight">
              {{ link.name }}
            </nuxt-link>
          </div>
          <!-- LINKS END -->
          <!-- CONTACTS -->
          <div class="text-[#9B9B9B] mt-12 lg:mt-0 lg:ml-[100px]">
          <span class="text-sm lg:text-xl font-bold">
            Контакты
          </span>
            <div class="mt-6 flex flex-col gap-y-3.5 text-sm lg:text-xl">
              <div class="flex items-center gap-x-2">
                <img src="~/assets/images/icons/contact-phone.svg" alt="Phone">
                <a :href="`tel:${phone}`" class="hover:text-gray-300 transition-colors font-medium">{{ phone }}</a>
              </div>
              <div class="flex items-center gap-x-2">
                <img src="~/assets/images/icons/contact-mail.svg" alt="Mail">
                <a :href="`mailto:${mail}`" class="hover:text-gray-300 transition-colors font-medium">{{ mail }}</a>
              </div>
              <div class="flex items-center gap-x-2">
                <img src="~/assets/images/icons/contact-instagram.svg" alt="Instagram">
                <a :href="`https://instagram.com/${instagram}`" class="hover:text-gray-300 transition-colors font-medium">{{ instagram }}</a>
              </div>
            </div>
          </div>
          <!-- CONTACTS END -->
        </div>
        <button class="absolute top-[42px] right-3 lg:right-0 bg-accent hover:bg-accent-dark transition-colors p-[9px] lg:p-3 w-[42px] h-[42px] lg:w-[52px] lg:h-[52px] flex items-center justify-center rounded-full">
          <img src="~/assets/images/icons/whatsapp.svg" alt="Whatsapp Logo"/>
        </button>
      </div>
    </footer>
  </div>
</template>

<script setup>
import navigation from "~/common/navigation.js";
import {CONTACT_INSTAGRAM, CONTACT_MAIL, CONTACT_PHONE} from "~/common/contacts.js";
import footerBackgroundImage from '~/assets/images/backgrounds/footer-bg.svg';
import {useCartStore} from "~/store/cart.js";

const links = ref(navigation);
const phone = ref(CONTACT_PHONE);
const mail = ref(CONTACT_MAIL);
const instagram = ref(CONTACT_INSTAGRAM);
const footerBackground = ref(footerBackgroundImage);


const route = useRoute();
const isDefaultBackground = computed(() => {
  return !['/cart', '/checkout'].includes(route.path);
});

const cartStore = useCartStore();

const isCartBackground = computed(() => {
  return route.path === '/cart';
})

const isCheckoutBackground = computed(() => {
  return route.path === '/checkout';
})

</script>
