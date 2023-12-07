<template>
  <div class="modal__wrapper relative" ref="modalRef" data-theme="nomad">
    <inline-loader v-if="isLoading" />
    <div v-else>
      <h3>
        Вид сотрудничества
      </h3>
      <p class="text-sm lg:text-xl mt-3 lg:mt-8 text-center">
        Чтобы мы могли предложить выгодные условия сотрудничества, пройдите короткий опрос:
      </p>
      <div class="flex w-full justify-start mt-[25px] lg:mt-[43px]">
        <p class="text-left text-accent text-sm lg:text-xl">
          Вопрос {{ step }}/4
        </p>
      </div>
      <div class="flex w-full mt-3 lg:mt-[30px]">
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
          <div class="mt-5 flex flex-col lg:flex-row w-full flex-1 lg:gap-x-[27px] gap-y-5">
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
                name="gym"
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
                name="instagram"
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
      </div>
      <div class="mt-[30px] lg:mt-[53px] w-full flex flex-col-reverse gap-y-[31px] lg:flex-row lg:items-end lg:gap-x-[50px]">
        <div class="flex-1 flex gap-x-2 lg:gap-x-4">
          <div
              v-for="(_, index) of new Array(4).fill({})" :key="index"
              class="flex-1 h-[7px] lg:h-3"
              :class="[index + 1 === step ? 'bg-accent' : 'bg-[#e635344f]']"
          />
        </div>
        <button
            @click="_nextStep"
            class="relative flex-shrink-0 button-hover text-white uppercase py-4 text-sm lg:text-lg lg:py-5 lg:w-[296px] border-solid border-white border z-10"
        >
          {{ step < 4 ? 'Далее' : 'Завершить' }}
        </button>
      </div>
      <div class="absolute bottom-0 right-0 z-0 hidden lg:block">
        <img src="~/assets/images/backgrounds/cooperation-modal.svg" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
import NRadioButton from '~/components/form/NRadioButton.vue';
import {KZ_CITIES, RU_CITIES} from '~/common/cities.js';
import CooperationSelect from '~/components/form/CooperationSelect.vue';
import InlineLoader from '~/components/utils/InlineLoader.vue';
import {useModal} from '~/store/modal.js';
const emit = defineEmits(['update:modelValue', 'close']);
const step = ref(1);
const isLoading = ref(false);
const modal = useModal();
const { $toast } = useNuxtApp();

const _nextStep = () => {
  if (_validate() !== true) {
    return null;
  }
  if (step.value !== 4) {
    step.value += 1;
    return null;
  }
  if (step.value === 4) {
    _submitResponse();
  }
}

const _validate =  () => {
  if (step.value === 2) {
    if (!form.selectedCountry) {
      return $toast.warn('Выберите страну, чтобы продолжить')
    }
    if (!form.selectedCity) {
      return $toast.warn('Выберите ваш город, чтобы продолжить')
    }
  }

  if (form.personType === 1) {
    if (step.value === 3 && !form.placeOfWork) {
      return $toast.warn('Укажите спортивный зал, в котором вы работаете')
    }
    if (step.value === 4 && form.haveYouInstagram === 'Да' && !form.socialLink) {
      return $toast.warn('Укажите ваш инстаграм');
    }
  }



  return true;
}

const _submitResponse = () => {
  isLoading.value = true;
  setTimeout(() => {
    const response = _buildResponse();
    $toast.success('Заявка на сотрудничество успешно отправлена')
    modal.close();
  }, 3000)
}

const _buildResponse = () => {
  const response = [];
  let person = personTypes.find(p => p.id == form.personType);
  response.push(`Тип: ${person.name}`);
  response.push(`Страна: ` + form.selectedCountry);
  response.push(`Город: ` + form.selectedCity);
  if (form.personType === 1) {
    response.push('Спортивный зал: ' + form.placeOfWork);
    response.push('Инстаграм: ' + (form.haveYouInstagram === 'Да' ? form.socialLink : 'Не ведет'));
  }
  if (form.personType === 2) {
    response.push('О чем ваш блог: ' + form.blogAbout);
    response.push('О чем ваш блог: ' + form.blogAbout);
    response.push('Социальная сеть: ' + form.socialNetwork);
    response.push('Ссылка: ' + form.socialLink);
  }
  if (form.personType === 3) {
    response.push('Есть фитнес-бар: ' + form.haveYouInstagram);
    response.push('Нужна ли вам помощь в выборе добавок?: ' + form.areYouNeedHelpInNutrition);
  }
  if (form.personType === 4) {
    response.push('Сколько у вас точек: ' + form.howManyPointsDoYouHave);
    response.push('3 бренда на ваших полках, которые пользуются спросом среди клиентов: ' + form.top3Brands);
  }
  return response.join('\n');
}

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
.modal__wrapper {
  @apply bg-[#141414] w-[96vw] lg:w-[1200px];
  @apply pt-[29px] pb-[39px] px-[21px] lg:pt-[79px] lg:pb-[100px] lg:px-[92px];
  @apply flex flex-col items-center;
  @apply text-white;
}

h3 {
  @apply font-medium uppercase text-center;
  @apply text-[30px] lg:text-[70px];
}

.question {
  @apply text-sm lg:text-xl font-medium;
}

.custom-select {
  @apply border border-solid border-white;
  @apply bg-[#292929];
  @apply py-[15px] px-[18px] lg:py-[20px] lg:px-[31px];
}
</style>
