<template>
  <section id="contacts" class="relative pb-[100px] lg:pb-[200px]">
    <div
        style="background: linear-gradient(180deg, rgba(20,20,20,1) 0%, rgba(20,20,20,0) 35%, rgba(20,20,20,1) 100%);"
        class="absolute inset-x-0 z-0 no-interaction top-0 lg:-top-[7%]"
    >
      <img
          :style="opacityMaskStyles"
          src="~/assets/images/contacts/contacts-bg.png"
          alt="BG Nomads"
          class="w-full h-full object-center product__bg relative no-interaction"
      >
    </div>
    <div class="hidden lg:block absolute -top-[350px] right-0 no-interaction">
      <img src="~/assets/images/backgrounds/bg-catalog-smoke.png" alt="">
    </div>
    <div class="hidden lg:block absolute left-0 bottom-0 no-interaction">
      <img src="~/assets/images/contacts/left-smoke.png" alt="">
    </div>
    <!-- PARALLAX -->
    <div class="hidden lg:block absolute rellax right-0 no-interaction" data-rellax-speed="-1">
      <img src="~/assets/images/parallax/3.webp" alt="">
    </div>
    <div class="hidden lg:block absolute rellax top-[20%] left-0 no-interaction z-0" data-rellax-speed="-1">
      <img src="~/assets/images/parallax/5.webp" alt="">
    </div>
    <div class="hidden lg:block absolute rellax top-[65%] right-0 no-interaction z-0" data-rellax-speed="-1">
      <img src="~/assets/images/parallax/4.webp" alt="">
    </div>
    <page-wrapper class="px-3 overflow-x-hidden relative z-10">
      <h1 class="font-medium text-white text-[32px] lg:text-[70px] uppercase">
        Контакты
      </h1>
      <div class="pt-[28px] lg:[pt-59px]">
        <p class="text-white text-sm lg:text-lg">
          Мы открыты к любым видам сотрудничества. Связаться в нами вы можете слудующими способами:
        </p>
        <div class="flex flex-col lg:flex-row mt-[30px] lg:mt-[110px] gap-x-5 gap-y-[13px]">
          <a class="contact__button" :href="`https://instagram.com/${instagram}`" target="_blank">
            <img src="~/assets/images/icons/contact-instagram.svg" alt="">
            <span class="text-white">
              {{ instagram }}
            </span>
          </a>
          <a class="contact__button" :href="`tel:${phone}`" target="_blank">
            <img src="~/assets/images/icons/contact-phone.svg" alt="">
            <span class="text-white">
              {{ phone }}
            </span>
          </a>
          <a class="contact__button" :href="`mailto:${mail}`" target="_blank">
            <img src="~/assets/images/icons/contact-mail.svg" alt="">
            <span class="text-white">
              {{ mail }}
            </span>
          </a>
          <a class="contact__button" :href="telegram" target="_blank">
            <img src="~/assets/images/icons/contact-telegram.svg" alt="">
            <span class="text-white">
              Telegram
            </span>
          </a>
        </div>
      </div>
      <!-- BRAND VIDEO -->
      <h3 class="text-white uppercase mt-[82px] lg:mt-[125px] font-medium text-lg lg:text-[48px]">
        Наш youtube канал
      </h3>
      <div class="product__video z-10 mt-[38px] lg:mt-[71px]">
        <div class="overflow-hidden w-full" style="aspect-ratio: 1400/574">
          <img src="~/assets/images/products/product-video.jpg" alt="Product video" class="w-full h-full object-contain">
        </div>
      </div>
      <!-- BRAND VIDEO -->
      <!-- PRODUCT FAQ -->
      <faq-component :faqs="faq" />
    </page-wrapper>
  </section>
</template>

<script>
import PageWrapper from "~/components/wrapper/PageWrapper.vue";
import TransitionCollapse from "~/components/utils/transitions/TransitionCollapse.vue";
import faq from "~/common/faq.js";
import FaqComponent from "~/components/FaqComponent.vue";
import {CONTACT_INSTAGRAM, CONTACT_MAIL, CONTACT_PHONE, CONTACT_TELEGRAM} from "~/common/contacts.js";
import Rellax from "rellax";

definePageMeta({
  name: 'Контакты'
})
export default {
  components: {FaqComponent, TransitionCollapse, PageWrapper},
  data: () => ({
    phone: CONTACT_PHONE,
    mail: CONTACT_MAIL,
    instagram: CONTACT_INSTAGRAM,
    telegram: CONTACT_TELEGRAM,
    faq: faq,
    opacityMaskStyles: {
      maskImage: 'linear-gradient(to top, transparent 0%, #141414 20%)',
      maskMode: 'alpha',
    },
  }),
  methods: {
    _onToggle (id) {
      this.faq = this.faq.map(f => {
        if (f.id === id) {
          f.opened = !f.opened;
        } else{
          f.opened = false;
        }
        return f;
      })
    }
  },
  computed: {},
  mounted() {
    new Rellax('.rellax');
    this.faq = this.faq.map(i => ({
      ...i,
      opened: false,
    }))
  }
}
</script>

<style scoped>
.product__video {
  @apply cursor-pointer;
}

.contact__button {
  @apply py-3 lg:py-[15px] border border-solid border-white cursor-pointer;
  @apply flex-1 flex justify-center items-center gap-x-2 relative;
}

.contact__button::after {
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

.contact__button:hover::after {
  background: #E63534;
}


.faq {
  @apply mt-[116px] lg:mt-[201px];
}

.faq h6 {
  @apply text-white uppercase;
  @apply font-semibold;
  @apply text-[32px] lg:text-[48px];
}

.faq--wrapper {
  @apply flex items-start gap-x-[67px];
  @apply mt-[76px];
}

.faq--container {
  @apply w-full;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
}
</style>
