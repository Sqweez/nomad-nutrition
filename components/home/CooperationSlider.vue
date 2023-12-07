<template>
  <div class="flex flex-col lg:flex-row gap-4 card__button--container">
    <div class="flex-1 cursor-pointer card__button">
      <div class="aspect-video overflow-hidden">
        <img src="~/assets/images/cooperation/trainers.webp" class="w-full h-full object-cover">
      </div>
      <div class="py-4 lg:py-[32px] border-solid border-l-gray-400 border-l border-b border-b-white border-r border-r-white bg-transparent">
        <p class="text-center font-medium text-[24px] lg:text-[24px] text-white uppercase">
          для тренеров
        </p>
      </div>
    </div>
    <div class="flex-1 cursor-pointer card__button">
      <div class="aspect-video overflow-hidden">
        <img src="~/assets/images/cooperation/gyms.webp" class="w-full h-full object-cover">
      </div>
      <div class="py-4 lg:py-[32px] border-solid border-l-gray-400 border-l border-b border-b-white border-r border-r-white bg-transparent">
        <p class="text-center font-medium text-[24px] lg:text-[24px] text-white uppercase">
          для спортзалов
        </p>
      </div>
    </div>
    <div class="flex-1 cursor-pointer card__button">
      <div class="aspect-video overflow-hidden">
        <img src="~/assets/images/cooperation/stores.webp" class="w-full h-full object-cover">
      </div>
      <div class="py-4 lg:py-[32px] border-solid border-l-gray-400 border-l border-b border-b-white border-r border-r-white bg-transparent">
        <p class="text-center font-medium text-[24px] lg:text-[24px] text-white uppercase">
          для магазинов
        </p>
      </div>
    </div>
    <div class="flex-1 cursor-pointer card__button">
      <div class="aspect-video overflow-hidden">
        <img src="~/assets/images/cooperation/bloggers.webp" class="w-full h-full object-cover">
      </div>
      <div class="py-4 lg:py-[32px] border-solid border-l-gray-400 border-l border-b border-b-white border-r border-r-white bg-transparent">
        <p class="text-center font-medium text-[24px] lg:text-[24px] text-white uppercase">
          для блогеров
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  methods: {},
  computed: {}
}
</script>

<style scoped>
.card__button {
  position: relative;
  transition-duration: .3s;
}

.card__button:hover {
  transform: scale(1.2);
  z-index: 10;
  box-shadow: 0px 12px 40px 12px #000000;
}

.card__button--container:hover .card__button:not(:hover){
  filter: blur(3px);
}

.card__button::after {
  display: block;
  position: absolute;
  bottom: 10px;
  left: 0;
  content: "";
  width: 100%;
  height: 17px;
  background-color: transparent;
  filter: blur(14px);
  z-index: 1;
  border-radius: 20px;
  transition-duration: .3s;
}

@media (max-width: 700px) {
  .card__button:hover {
    transform: scale(1);
  }
}

.card__button:hover::after {
  background: #E63534;}
</style>
