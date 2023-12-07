<template>
  <div class="flex flex-col lg:flex-row gap-x-[51px] lg:pb-[126px] gap-y-[36px]">
    <div class="flex-1">
      <img src="~/assets/images/opt/cooperation_image.jpg" alt="Cooperation Image"
           class="w-full h-full object-cover">
    </div>
    <div class="flex-1 flex flex-col lg:pt-5">
      <p class="text-white uppercase font-medium text-[24px] lg:text-[32px]">
        Хочешь сотрудничать?
      </p>
      <p class="text-white text-sm lg:text-xl font-light mt-5 lg:mt-[67px]">
        Оставьте свой номер телефона и мы с вами свяжемся в ближайшее время, чтобы предложить самые выгодные
        условия
      </p>

      <div class="flex flex-col mt-[35px] lg:mt-[105px] gap-y-4 lg:gap-y-8">
        <input
            v-model="form.name"
            placeholder="Ваше имя*"
            type="text"
            class="text-sm lg:text-xl text-white  px-4 lg:px-[33px] py-4 lg:py-5 border border-white border-solid outline-0 bg-[#292929]"
        >
        <input
            v-model="form.phone"
            placeholder="Ваш телефон*"
            type="text"
            class="text-sm lg:text-xl text-white px-4 lg:px-[33px] py-4 lg:py-5 border border-white border-solid outline-0 bg-[#292929]"
            v-maska
            data-maska="+7 ### ### ## ##"
        >
      </div>
      <button
          @click="_onSubmit"
          class="text-white bg-accent hover:bg-accent-dark transition-colors mt-[22px] lg:mt-[39px] py-4 lg:py-5 font-semibold uppercase text-sm lg:text-xl"
      >
        Отправить заявку
      </button>
    </div>
  </div>
</template>

<script setup>
const form = reactive({
  name: '',
  phone: '',
})

const _onSubmit = () => {
  console.log(form);
}

</script>

<style scoped>

</style>
