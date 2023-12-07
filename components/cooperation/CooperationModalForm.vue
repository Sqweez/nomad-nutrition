<template>
  <div v-if="step === 1">
    <p class="question">
      Кто вы?
    </p>
    <div class="mt-5 flex flex-col gap-y-2">
      <NRadioButton
          v-for="type of personTypes"
          :key="type.id"
          :label="type.name"
          v-model.number="form.personType"
          :value="type.id"
      />
    </div>
  </div>
  <div v-if="step === 2" class="w-full">
    <p class="question">
      Где вы находитесь?
    </p>
    <div class="mt-5 flex flex-col lg:flex-row w-full flex-1 lg:gap-x-[27px]">
      <div class="flex-1">
        <cooperation-select
            v-model="form.selectedCountry"
            class="custom-select"
            :items="countries"
            label="Страна"
        />
      </div>
      <div class="flex-1">
        <cooperation-select
            v-model="form.selectedCity"
            class="custom-select"
            :items="cities"
            label="Город"
            :key="form.selectedCountry"
        />
      </div>
    </div>
  </div>
  <div v-if="step === 3" class="w-full">
    <div class="w-full" v-if="form.personType === 1">
      <p class="question">
        В каком спортивном зале вы работаете?
      </p>
      <input
          class="mt-5 outline-none py-4 lg:py-8 text-sm lg:text-lg input input-bordered w-full rounded-none bg-[#292929]"
          placeholder="Укажите спортивный зал"
          type="text"
          v-model="form.placeOfWork"
      >
    </div>
    <div class="w-full" v-if="form.personType === 2">
      <p class="question">
        О чем ваш блог?
      </p>
      <textarea
          class="mt-5 outline-none w-full py-4 lg:py-6 text-sm lg:text-lg textarea textarea-bordered rounded-none bg-[#292929] resize-none"
          placeholder="О чем ваш блог?"
          v-model="form.blogAbout"
      />
    </div>
    <div class="w-full" v-if="form.personType === 3">
      <p class="question mb-5">
        Есть ли у вас фитнес-бар?
      </p>
      <NRadioButton
          :label="`Да`"
          v-model.number="form.haveYouFitnessBar"
          :value="`Да`"
      />
      <NRadioButton
          class="mt-2"
          :label="`Нет`"
          v-model.number="form.haveYouFitnessBar"
          :value="`Нет`"
      />
    </div>
    <div class="w-full" v-if="form.personType === 4">
      <p class="question">
        Сколько у вас точек?
      </p>
      <textarea
          class="mt-5 outline-none w-full py-4 lg:py-6 text-sm lg:text-lg textarea textarea-bordered rounded-none bg-[#292929] resize-none"
          placeholder="Сколько у вас точек?"
          v-model="form.howManyPointsDoYouHave"
      />
    </div>
  </div>
  <div v-if="step === 4" class="w-full">
    <div class="w-full" v-if="form.personType === 1">
      <p class="question mb-5">
        Ведете ли вы инстаграм?
      </p>
      <NRadioButton
          :label="`Да`"
          v-model.number="form.haveYouInstagram"
          :value="`Да`"
      />
      <NRadioButton
          class="mt-2"
          :label="`Нет`"
          v-model.number="form.haveYouInstagram"
          :value="`Нет`"
      />
      <input
          class="mt-5 outline-none py-4 lg:py-8 text-sm lg:text-lg input input-bordered w-full rounded-none bg-[#292929]"
          placeholder="Укажите ссылку на ваш аккаунт"
          type="text"
          v-if="form.haveYouInstagram === 'Да'"
          v-model="form.socialLink"
      >
    </div>
    <div v-if="form.personType === 2" class="w-full">
      <p class="question">
        Укажите свою основную социальную сеть
      </p>
      <div class="mt-5 flex flex-col lg:flex-row w-full flex-1 lg:gap-x-[27px]">
        <div class="flex-1">
          <cooperation-select
              v-model="form.socialNetwork"
              class="custom-select"
              :items="socialNetworks"
              label="Социальная сеть"
          />
        </div>
        <div class="flex-1">
          <input
              class="outline-none py-4 lg:py-8 text-sm lg:text-lg input input-bordered w-full rounded-none bg-[#292929]"
              placeholder="Укажите ссылку на ваш аккаунт"
              type="text"
              v-model="form.socialLink"
          >
        </div>
      </div>
    </div>
    <div v-if="form.personType === 3" class="w-full">
      <p class="question mb-5">
        Нужна ли вам помощь в выборе добавок?
      </p>
      <NRadioButton
          :label="`Да (есть сомнения в выборе)`"
          v-model.number="form.areYouNeedHelpInNutrition"
          :value="`Да (есть сомнения в выборе)`"
      />
      <NRadioButton
          class="mt-2"
          :label="`Нет (точно знаю, что мне нужно)`"
          v-model.number="form.areYouNeedHelpInNutrition"
          :value="`Нет (точно знаю, что мне нужно)`"
      />
    </div>
    <div v-if="form.personType === 4" class="w-full">
      <p class="question">
        3 бренда на ваших полках, которые пользуются спросом среди клиентов
      </p>
      <textarea
          class="mt-5 outline-none w-full py-4 lg:py-6 text-sm lg:text-lg textarea textarea-bordered rounded-none bg-[#292929] resize-none"
          placeholder=""
          v-model="form.top3Brands"
      />
    </div>
  </div>
</template>

<script setup>
import NRadioButton from '~/components/form/NRadioButton.vue';
import {KZ_CITIES, RU_CITIES} from '~/common/cities.js';
import CooperationSelect from '~/components/form/CooperationSelect.vue';

const props = defineProps({
  step: {
    type: Number,
    default: 1,
  },
});

const form = reactive({
  personType: 1,
  selectedCountry: null,
  selectedCity: null,
  placeOfWork: null,
  blogAbout: null,
  haveYouFitnessBar: 'Да',
  howManyPointsDoYouHave: '',
  haveYouInstagram: 'Да',
  socialLink: '',
  socialNetwork: 'Instagram',
  areYouNeedHelpInNutrition: 'Да (есть сомнения в выборе)',
  top3Brands: '',
});

const myCityInNotListed = ref(false);

const personTypes = reactive([
  {
    id: 1,
    name: 'тренер',
  },
  {
    id: 2,
    name: 'блогер',
  },
  {
    id: 3,
    name: 'владелец фитнес-зала',
  },
  {
    id: 4,
    name: 'владелец магазина спортпита',
  },
]);
const countries = ['Казахстан', 'Россия'];
const socialNetworks = ['Instagram', 'Tik-Tok', 'Youtube'];
const selectedCity = ref(null);

const cities = computed(() => {
  switch (form.selectedCountry) {
    case 'Казахстан':
      return KZ_CITIES;
    case 'Россия':
      return RU_CITIES;
    default:
      return [];
  }
});

watch(form.selectedCountry, () => {
  selectedCity.value = null;
});
</script>

<style scoped>

</style>
