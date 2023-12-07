<template>
  <section id="opt" class="relative pb-[100px] lg:pb-[150px]">
    <div class="hidden lg:block absolute -top-[350px] right-0 no-interaction z-20">
      <img src="~/assets/images/backgrounds/bg-catalog-smoke.png" alt="">
    </div>
    <div class="hidden lg:block absolute bottom-[200px] left-0 no-interaction z-20">
      <img src="~/assets/images/opt/cooperation_bottom_smoke.webp" alt="">
    </div>
    <div class="hidden lg:block absolute rellax right-0 no-interaction" data-rellax-speed="-1">
      <img src="~/assets/images/parallax/3.webp" alt="">
    </div>
    <div class="hidden lg:block absolute rellax right-0 no-interaction top-[950px] z-20" data-rellax-speed="-1">
      <img src="~/assets/images/parallax/4.webp" alt="">
    </div>
    <div class="hidden lg:block absolute top-16 left-16 no-interaction z-0">
      <img src="~/assets/images/news/ornament.webp" alt="">
    </div>
    <page-wrapper class="px-3 relative z-10">
      <h1 class="font-medium text-white text-[32px] lg:text-[70px] uppercase py-3 overflow-hidden text-center lg:px-10">
        Получи <span class="text-accent">экслюзивный</span> бренд на свои полки
      </h1>
    </page-wrapper>
    <div class="mt-[30px] lg:mt-[150px] z-10 max-w-full relative">
      <img src="~/assets/images/opt/hero_products.webp" alt="Товары NN" class="w-full h-full object-contain">
    </div>
    <div class="bg-[#070707]">
      <div class="container mx-auto">
        <p class="text-center text-white text-sm lg:text-[32px] font-light">
          ПРИ ЗАКУПКЕ ОТ 500.000 ТЕНГЕ/100.000 РУБ, <b class="font-medium">ВЫДЕЛИМ 10% ОТ СУММЫ</b> ТОВАРОМ НА
          ПРОДВИЖЕНИЕ И РЕКЛАМУ БРЕНДА
        </p>
      </div>
      <page-wrapper class="px-3 relative z-10">
        <h2 class="mt-[72px] lg:mt-[140px] font-medium text-white text-[32px] lg:text-[70px] uppercase py-3 overflow-hidden text-center">
          <span class="text-accent">будь первым</span><br> стань представителем
        </h2>
        <div class="flex flex-col mt-[40px] lg:mt-[72px] gap-y-[13px] lg:gap-y-[23px]">
          <div v-for="(feature, idx) of features" :key="idx"
               class="text-white uppercase flex items-center gap-x-3 lg:gap-x-[37px]">
            <div class="w-[30px] h-[30px] lg:w-12 lg:h-12 overflow-hidden flex-shrink-0">
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
                   class="w-full h-full object-contain">
                <path
                    d="M24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48Z"
                    fill="#E63534"/>
                <path
                    d="M20.3308 36.886L9.11407 25.677C8.96198 25.525 8.96198 25.2971 9.11407 25.1451L12.346 21.9154C12.4981 21.7634 12.7262 21.7634 12.8783 21.9154L20.597 29.6287L35.1217 15.114C35.2738 14.962 35.5019 14.962 35.654 15.114L38.8859 18.3437C39.038 18.4957 39.038 18.7237 38.8859 18.8756L20.8631 36.886C20.711 37.038 20.4829 37.038 20.3308 36.886Z"
                    fill="white"/>
              </svg>
            </div>
            <span class="text-sm lg:text-[32px]">
              {{ feature }}
            </span>
          </div>
        </div>
        <div class="mt-[81px] lg:mt-[190px] ">
          <want-to-cooperate-block/>
        </div>
      </page-wrapper>
      <div class="relative">
        <div class="absolute inset-x-0 top-0 no-interaction z-0">
          <img
              class="w-full"
              src="~/assets/images/cooperation/cooperation-page-background.webp"
              alt="Background"
              srcset="
                ~/assets/images/cooperation/cooperation-page-background-mobile.webp 700w,
                ~/assets/images/cooperation/cooperation-page-background.webp
              "
          >
        </div>
        <div class="hidden lg:block absolute rellax -left-[60px] bottom-0 no-interaction" data-rellax-speed="-1">
          <img src="~/assets/images/parallax/5.webp" alt="">
        </div>
        <page-wrapper class="px-3 relative z-10 lg:pb-[100px]">
          <div
              class="gap-x-2 lg:gap-x-8 py-3 overflow-hidden flex items-center justify-center  max-w-[80%] lg:max-w-full mx-auto">
            <div class="flex-shrink-0 w-[31px] h-[31px] lg:w-[67px] lg:h-[67px]">
              <svg class="w-full h-full object-contain" width="67" height="67" viewBox="0 0 67 67" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M14.8338 7.17021C14.7786 7.07048 14.61 7.39863 14.4874 7.49901C12.6896 3.11845 7.32177 0.725482 0.516056 0.279575C0.201019 4.45938 2.14957 9.85015 4.54476 12.5198C5.24156 13.2958 5.22296 13.1497 6.01473 13.7867C6.10969 13.8633 6.25544 13.9721 6.34206 14.0422L7.33256 14.8851C4.64993 17.2703 1.73006 17.8224 0.487233 21.925C-0.837079 26.294 1.3694 29.6959 3.75175 31.3161C13.4133 37.8895 19.3123 21.869 10.6953 22.9018C10.071 25.1139 10.6794 26.0907 8.74364 27.5873C2.76113 29.2686 4.35602 16.5542 13.4087 18.868C16.3589 19.6215 18.3738 21.4971 19.2868 23.9178C20.7247 27.7282 18.7562 29.8381 17.5512 32.0708C21.8283 31.0066 25.2488 29.8915 27.8056 33.4073C25.626 37.5427 21.2944 35.6278 17.494 35.0751C18.7754 37.5523 21.2033 39.5805 19.0397 43.7744C17.9727 45.8425 15.3331 47.8436 12.7961 48.3113C4.71039 49.8028 1.68878 38.152 9.25994 39.4737C9.9452 40.6035 10.3663 42.9585 11.049 44.2744L13.8709 43.9449C17.5981 36.2371 8.77693 30.7595 2.46399 36.9501C-3.37415 42.6748 2.32404 49.9772 7.54109 51.9738C3.00801 56.2926 0.939438 58.0022 0.311288 66.8329C10.0826 66.0118 10.1456 64.0995 15.208 59.5575C16.3738 62.5218 18.7445 65.5145 21.8563 66.5568C25.6477 67.827 29.5162 66.154 31.0105 63.9451C38.3096 53.1552 21.7352 48.0385 22.9992 56.1427C24.4859 56.9058 26.2432 56.965 27.649 57.9083C28.7571 65.6135 16.9107 62.2097 18.8555 53.9202C19.4599 51.3445 21.4554 48.7579 23.6709 47.8442C27.8331 46.1288 29.6309 48.3094 31.9882 49.6175C31.1567 45.421 29.6708 41.6292 33.7008 39.2864C36.9282 41.7598 36.2647 45.4287 34.9878 49.6098C40.5539 45.7858 46.8452 47.2361 48.2529 54.2452C49.9276 62.5803 38.0203 64.6413 39.4248 58.3034C41.7058 55.5983 41.8346 58.1136 44.2042 55.7438C43.9347 47.5289 28.671 54.6711 36.2653 64.0558C38.0702 66.2853 41.9355 68.0097 45.8513 66.3194C49.318 64.8234 49.8312 62.3796 52.1706 59.7473C55.5468 63.4316 59.0654 67.2646 66.7046 66.6006C66.4178 62.1763 65.4196 57.8002 62.5393 54.6152C61.7334 53.7233 61.8006 53.9852 61.0769 53.3637C60.2447 52.6482 60.7017 53.0548 60.1275 52.4764L59.5209 51.7409C66.3934 49.6298 70.3073 40.5791 63.3155 35.8369C53.9581 29.49 47.6394 44.2403 56.0261 44.2396C57.1149 42.2495 56.4118 41.579 58.1467 39.4672C65.3406 38.3405 62.0311 50.3054 53.708 48.1878C50.8932 47.4717 48.6571 45.6256 47.7659 43.279C46.3537 39.5618 48.312 37.4886 49.567 35.0474C44.3057 36.1252 42.9543 36.8626 39.1777 33.9973C41.0609 29.8207 45.044 31.0581 49.4096 31.9479C48.4741 29.8432 46.4319 27.505 47.7203 24.0387C51.0234 15.1528 65.6724 18.0251 61.0591 27.521C55.2177 28.7706 58.5201 25.3764 55.4301 22.757C48.0379 23.542 54.243 37.7898 63.4714 31.1269C66.2266 29.1374 67.9219 25.3719 66.3775 21.3671C64.9506 17.6667 62.1806 17.0477 59.7232 14.8851C63.5614 11.5115 66.6765 7.80529 66.6161 0.399899C58.0633 0.0595174 55.5699 4.18206 52.1706 7.29826C49.9935 5.01468 49.4168 1.83735 45.3187 0.504137C41.2983 -0.803341 37.8407 0.799477 35.9049 3.48006C28.8483 13.2508 45.1307 19.2779 44.0631 11.0714C41.0583 8.85024 38.4128 11.249 39.51 5.91936C45.4945 2.97946 50.3389 8.60895 47.6627 14.7352C44.0535 22.997 37.0533 18.4601 35.1284 17.6461C36.0934 22.5652 37.1514 23.9853 33.8625 27.8601C29.6958 26.1627 31.2459 21.7275 32.0191 17.4859C29.0188 19.4014 26.4344 21.0879 22.43 18.5585C20.4525 17.3096 18.1233 13.9283 18.7297 10.1699C20.0668 1.87982 31.1741 5.28428 27.1793 9.365C26.2926 10.271 24.1882 10.2111 22.8273 10.9189C22.9582 19.4561 37.8232 13.0062 31.0233 3.4228C29.1863 0.834223 25.592 -1.14179 21.2418 0.752506C17.53 2.36819 17.1963 4.46904 15.4754 6.51132C15.2861 6.73589 14.896 7.2841 14.8338 7.17021Z"
                      fill="#E63534"/>
              </svg>
            </div>
            <h1 class="font-medium text-white text-[30px] lg:text-[70px] uppercase">
              для фитнес залов
            </h1>
          </div>
          <div class="flex flex-col items-center text-white lg:mt-[80px]">
            <p class="text-sm lg:text-[32px] uppercase font-light">
              Условия скидок при закупе:
            </p>
            <div class="flex flex-col gap-y-4 mt-5 lg:mt-[44px]">
              <p class="text__conditions">
                от 100 000 тнг - <span>20%</span>
              </p>
              <p class="text__conditions">
                от 300 000 тнг - <span>25%</span>
              </p>
              <p class="text__conditions">
                от 500 000 тнг - <span>30%</span>
              </p>
            </div>
          </div>
          <div class="mt-[50px] lg:mt-[85px] flex flex-col lg:flex-row gap-y-10">
            <div class="flex-1 cooperation__advantage">
              <h4>
                nomad otbasy
              </h4>
              <h5>
                С нашей стороны
              </h5>
              <div class="adv__container">
            <span v-for="(item, key) of nomadOtbasyAdvs" :key="`otbasy-${key}`" class="adv__item">
              <svg class="hidden md:block" width="11" height="18" viewBox="0 0 11 18" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M11 9L0.5 0.339745L0.500001 17.6603L11 9Z" fill="#E63534"/>
              </svg>
              <svg class="block md:hidden" width="7" height="13" viewBox="0 0 7 13" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M7 6.5L0.25 0.870835L0.250001 12.1292L7 6.5Z" fill="#E63534"/>
              </svg>
              <span class="font-light">
                {{ item }}
              </span>
            </span>
              </div>
            </div>
            <div class="flex-1 cooperation__advantage">
              <h4>
                вы
              </h4>
              <h5>
                С вашей стороны
              </h5>
              <div class="adv__container">
            <span v-for="(item, key) of yoursAdvs" :key="`your-${key}`" class="adv__item">
              <svg class="hidden md:block" width="11" height="18" viewBox="0 0 11 18" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M11 9L0.5 0.339745L0.500001 17.6603L11 9Z" fill="#E63534"/>
              </svg>
              <svg class="block md:hidden" width="7" height="13" viewBox="0 0 7 13" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M7 6.5L0.25 0.870835L0.250001 12.1292L7 6.5Z" fill="#E63534"/>
              </svg>
              <span class="font-light">
                {{ item }}
              </span>
            </span>
              </div>
            </div>
          </div>
        </page-wrapper>
      </div>
    </div>
    <div class="relative">
      <div class="absolute inset-x-0 top-0 no-interaction z-0">
        <img
            class="w-full"
            src="~/assets/images/opt/shop-cooperation-background.webp"
            alt="Background"
            srcset="
                ~/assets/images/opt/shop-cooperation-background-mobile.webp 700w,
                ~/assets/images/opt/shop-cooperation-background.webp
              "
        >
      </div>
      <div class="hidden lg:block absolute rellax right-0 bottom-1/4 no-interaction w-[160px]" data-rellax-speed="-1">
        <img src="~/assets/images/parallax/1.webp" alt="">
      </div>
      <page-wrapper class="px-3 relative z-10 lg:pb-[58px]">
        <div
            class="gap-x-2 lg:gap-x-8 py-3 overflow-hidden flex items-center justify-center max-w-[80%] lg:max-w-full mx-auto">
          <div class="flex-shrink-0 w-[31px] h-[31px] lg:w-[67px] lg:h-[67px]">
            <svg class="w-full h-full object-contain" width="67" height="67" viewBox="0 0 67 67" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M14.8338 7.17021C14.7786 7.07048 14.61 7.39863 14.4874 7.49901C12.6896 3.11845 7.32177 0.725482 0.516056 0.279575C0.201019 4.45938 2.14957 9.85015 4.54476 12.5198C5.24156 13.2958 5.22296 13.1497 6.01473 13.7867C6.10969 13.8633 6.25544 13.9721 6.34206 14.0422L7.33256 14.8851C4.64993 17.2703 1.73006 17.8224 0.487233 21.925C-0.837079 26.294 1.3694 29.6959 3.75175 31.3161C13.4133 37.8895 19.3123 21.869 10.6953 22.9018C10.071 25.1139 10.6794 26.0907 8.74364 27.5873C2.76113 29.2686 4.35602 16.5542 13.4087 18.868C16.3589 19.6215 18.3738 21.4971 19.2868 23.9178C20.7247 27.7282 18.7562 29.8381 17.5512 32.0708C21.8283 31.0066 25.2488 29.8915 27.8056 33.4073C25.626 37.5427 21.2944 35.6278 17.494 35.0751C18.7754 37.5523 21.2033 39.5805 19.0397 43.7744C17.9727 45.8425 15.3331 47.8436 12.7961 48.3113C4.71039 49.8028 1.68878 38.152 9.25994 39.4737C9.9452 40.6035 10.3663 42.9585 11.049 44.2744L13.8709 43.9449C17.5981 36.2371 8.77693 30.7595 2.46399 36.9501C-3.37415 42.6748 2.32404 49.9772 7.54109 51.9738C3.00801 56.2926 0.939438 58.0022 0.311288 66.8329C10.0826 66.0118 10.1456 64.0995 15.208 59.5575C16.3738 62.5218 18.7445 65.5145 21.8563 66.5568C25.6477 67.827 29.5162 66.154 31.0105 63.9451C38.3096 53.1552 21.7352 48.0385 22.9992 56.1427C24.4859 56.9058 26.2432 56.965 27.649 57.9083C28.7571 65.6135 16.9107 62.2097 18.8555 53.9202C19.4599 51.3445 21.4554 48.7579 23.6709 47.8442C27.8331 46.1288 29.6309 48.3094 31.9882 49.6175C31.1567 45.421 29.6708 41.6292 33.7008 39.2864C36.9282 41.7598 36.2647 45.4287 34.9878 49.6098C40.5539 45.7858 46.8452 47.2361 48.2529 54.2452C49.9276 62.5803 38.0203 64.6413 39.4248 58.3034C41.7058 55.5983 41.8346 58.1136 44.2042 55.7438C43.9347 47.5289 28.671 54.6711 36.2653 64.0558C38.0702 66.2853 41.9355 68.0097 45.8513 66.3194C49.318 64.8234 49.8312 62.3796 52.1706 59.7473C55.5468 63.4316 59.0654 67.2646 66.7046 66.6006C66.4178 62.1763 65.4196 57.8002 62.5393 54.6152C61.7334 53.7233 61.8006 53.9852 61.0769 53.3637C60.2447 52.6482 60.7017 53.0548 60.1275 52.4764L59.5209 51.7409C66.3934 49.6298 70.3073 40.5791 63.3155 35.8369C53.9581 29.49 47.6394 44.2403 56.0261 44.2396C57.1149 42.2495 56.4118 41.579 58.1467 39.4672C65.3406 38.3405 62.0311 50.3054 53.708 48.1878C50.8932 47.4717 48.6571 45.6256 47.7659 43.279C46.3537 39.5618 48.312 37.4886 49.567 35.0474C44.3057 36.1252 42.9543 36.8626 39.1777 33.9973C41.0609 29.8207 45.044 31.0581 49.4096 31.9479C48.4741 29.8432 46.4319 27.505 47.7203 24.0387C51.0234 15.1528 65.6724 18.0251 61.0591 27.521C55.2177 28.7706 58.5201 25.3764 55.4301 22.757C48.0379 23.542 54.243 37.7898 63.4714 31.1269C66.2266 29.1374 67.9219 25.3719 66.3775 21.3671C64.9506 17.6667 62.1806 17.0477 59.7232 14.8851C63.5614 11.5115 66.6765 7.80529 66.6161 0.399899C58.0633 0.0595174 55.5699 4.18206 52.1706 7.29826C49.9935 5.01468 49.4168 1.83735 45.3187 0.504137C41.2983 -0.803341 37.8407 0.799477 35.9049 3.48006C28.8483 13.2508 45.1307 19.2779 44.0631 11.0714C41.0583 8.85024 38.4128 11.249 39.51 5.91936C45.4945 2.97946 50.3389 8.60895 47.6627 14.7352C44.0535 22.997 37.0533 18.4601 35.1284 17.6461C36.0934 22.5652 37.1514 23.9853 33.8625 27.8601C29.6958 26.1627 31.2459 21.7275 32.0191 17.4859C29.0188 19.4014 26.4344 21.0879 22.43 18.5585C20.4525 17.3096 18.1233 13.9283 18.7297 10.1699C20.0668 1.87982 31.1741 5.28428 27.1793 9.365C26.2926 10.271 24.1882 10.2111 22.8273 10.9189C22.9582 19.4561 37.8232 13.0062 31.0233 3.4228C29.1863 0.834223 25.592 -1.14179 21.2418 0.752506C17.53 2.36819 17.1963 4.46904 15.4754 6.51132C15.2861 6.73589 14.896 7.2841 14.8338 7.17021Z"
                    fill="#E63534"/>
            </svg>
          </div>
          <h1 class="font-medium text-white text-[30px] lg:text-[70px] uppercase">
            для магазинов
          </h1>
        </div>
        <div class="mt-[50px] lg:mt-[85px] flex flex-col lg:flex-row gap-y-10">
          <div class="flex-1 cooperation__advantage">
            <h4>
              nomad otbasy
            </h4>
            <h5>
              С нашей стороны
            </h5>
            <div class="adv__container">
              <span v-for="(item, key) of nomadOtbasyShopAdv" :key="`otbasy-${key}`" class="adv__item">
                <svg class="hidden md:block" width="11" height="18" viewBox="0 0 11 18" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M11 9L0.5 0.339745L0.500001 17.6603L11 9Z" fill="#E63534"/>
                </svg>
                <svg class="block md:hidden" width="7" height="13" viewBox="0 0 7 13" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 6.5L0.25 0.870835L0.250001 12.1292L7 6.5Z" fill="#E63534"/>
                </svg>
                <span class="font-light">
                  {{ item }}
                </span>
            </span>
            </div>
          </div>
          <div class="flex-1 cooperation__advantage">
            <h4>
              вы
            </h4>
            <h5>
              С вашей стороны
            </h5>
            <div class="adv__container">
            <span v-for="(item, key) of yourShopAdv" :key="`your-${key}`" class="adv__item">
              <svg class="hidden md:block" width="11" height="18" viewBox="0 0 11 18" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M11 9L0.5 0.339745L0.500001 17.6603L11 9Z" fill="#E63534"/>
              </svg>
              <svg class="block md:hidden" width="7" height="13" viewBox="0 0 7 13" fill="none"
                   xmlns="http://www.w3.org/2000/svg">
                <path d="M7 6.5L0.25 0.870835L0.250001 12.1292L7 6.5Z" fill="#E63534"/>
              </svg>
              <span class="font-light">
                {{ item }}
              </span>
            </span>
            </div>
          </div>
        </div>
        <div class="mt-[35px] lg:mt-[55px] flex justify-center">
          <button
              class="w-full lg:w-auto button relative text-white text-sm lg:text-lg uppercase px-[69px] py-4 lg:py-5 border-solid border border-white">
            Скачать прайс
          </button>
        </div>
        <div
            class="mt-[70px] lg:mt-[145px] border-solid border-accent border-[5px] flex flex-col gap-y-10 gap-x-5 lg:flex-row py-[30px] px-[22px] lg:py-[42px] lg:px-[35px]"
        >
          <div class="flex-1 text-white flex flex-col items-start justify-between gap-y-5 lg:gap-y-8">
            <div>
              <p class="uppercase font-semibold text-[24px] lg:text-[32px]">
                ГОТОВЫЕ ФАЙЛы <br>
                ДЛЯ <span class="text-accent">ВАШЕГО САЙТА</span>
              </p>
              <p class="mt-4 text-sm lg:text-[24px] font-light">
                Мы приготовили картинки, которые вы можете использовать в карточке товара на вашем сайте
              </p>
            </div>
            <nuxt-link
                rel="nofollow noopener"
                target="_blank"
                tag="div"
                to="https://drive.google.com/drive/folders/1LZ973KMZAuyWaPqZo-x2INOj2bxI8E6-?usp=sharing "
                class="w-full text-center lg:w-auto button relative text-white text-sm lg:text-lg uppercase px-[69px] py-4 lg:py-5 border-solid border border-white">
              Скачать
            </nuxt-link>
          </div>
          <div
              class="flex-shrink-0 h-[1px] w-full lg:h-auto lg:w-[1px] bg-white"
          />
          <div class="flex-1 text-white flex flex-col items-start justify-between gap-y-5 lg:gap-y-8">
            <div>
              <p class="uppercase font-semibold text-[24px] lg:text-[32px]">
                ГОТОВЫЕ ФАЙЛы <br>
                ДЛЯ <span class="text-accent">ваших соц.сетей</span>
              </p>
              <p class="mt-4 text-sm lg:text-[24px] font-light">
                Для хороших продаж и имиджа бренда мы регулярно пополняем телеграм канал фото и видео материалами,
                подписывайтесь и используйте
              </p>
            </div>
            <nuxt-link to="https://t.me/+LMimDL37J69jYjAy" rel="nofollow noopener" target="_blank"
                       class="mt-4 text-sm lg:text-[24px] font-light flex items-center gap-x-3">
                <span>
                  Перейти в
                </span>
              <div class="w-[30px] h-[30px] lg:w-[60px] lg:h-[60px]">
                <svg class="w-full h-full object-contain" width="60" height="60" viewBox="0 0 60 60" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M0 0H60V60H0V0ZM44.3538 15.9045L13.9904 27.6739C12.7685 28.222 12.3552 29.3197 13.695 29.9153L21.4846 32.4035L40.3186 20.7035C41.347 19.9689 42.3998 20.1649 41.4939 20.9728L25.318 35.6948L24.8099 41.925C25.2805 42.887 26.1422 42.8915 26.6919 42.4133L31.1673 38.1568L38.8319 43.926C40.6121 44.9854 41.5808 44.3017 41.9637 42.3601L46.9911 18.432C47.5131 16.0419 46.623 14.9888 44.3538 15.9045Z"
                        fill="#E63534"/>
                </svg>
              </div>
            </nuxt-link>
          </div>
        </div>
        <div class="mt-[84px] lg:mt-[145px]">
          <h1 class="font-medium text-white text-[30px] lg:text-[70px] uppercase text-center">
            наш склад
          </h1>
          <div class="mt-[36px] lg:mt-[70px]">
            <store-slider />
          </div>
          <div class="mt-[35px] lg:mt-[55px] flex justify-center">
            <nuxt-link
                tag="button"
                :to="CONTACT_WHATSAPP"
                class="w-full lg:w-auto button relative text-white text-sm lg:text-lg uppercase px-[69px] py-4 lg:py-5 border-solid border border-white">
              СВЯЗАТЬСЯ ПО СОТРУДНИЧЕСТВУ
            </nuxt-link>
          </div>
          <!-- DESCRIPTION -->
          <div class="product__description relative" style="z-index: 1;">
            <p>
              Спрос на спортивное питание ежегодно растет на 20%. Но если вы не видите эту тенденцию в ваших физических
              деньгах, пора выбирать новое направление развития и новые маржинальные товары на ваши полки. Мы точно
              знаем, что вам нужно - стабильные поставки, быстрые сроки и качественный состав внутри каждой банки. Бренд
              спортивного питания «Nomad nutrition» даст вам лучшие цены на продукты европейского сырья, ежемесячное
              расширение линейки продуктов, отправку в день покупки и полную маркетинговую поддержку развития. У нас
              есть выгодные условия партнерства и даже выдачи официального представительства на ваш город.
            </p>
            <p>
              Мы гарантируем, что бренд «Nomad nutrition» не будет представлен на маркетплейсах Казахстана и России, а
              повторные покупки будут совершаться только в магазинах-представителей. Никакого демпинга и внутренней
              конкуренции. Соблюдение МРЦ и РРЦ - обязательное условие нашего сотрудничества. Маркетинговая поддержка и
              помощь в продвижении бренда на ваших полках. Мы не заинтересованы продать вам один раз, мы ищем
              заинтересованных партнеров в своем и нашем развитии. Алга, друг!
            </p>

          </div>
          <!-- END DESCRIPTION -->
        </div>
      </page-wrapper>
    </div>
  </section>
</template>
<script setup>

import PageWrapper from '~/components/wrapper/PageWrapper.vue';
import Rellax from 'rellax';
import {CONTACT_WHATSAPP} from '~/common/contacts.js';
import WantToCooperateBlock from '~/components/blocks/WantToCooperateBlock.vue';
import StoreSlider from '~/components/opt/StoreSlider.vue';

definePageMeta({
  name: 'Оптовым клиентам',
});

const nomadOtbasyAdvs = [
  'Скидки',
  'Товар на проведение 1 дегустации в месяц',
  'Товар на проведение 1 розыгрыша в Instagram в месяц',
  'Подарки от бренда каждый месяц',
];

const yoursAdvs = [
  'Проведение 1 дегустации с нашими продуктами в месяц и фото-отчет в месяц (следующая партия продуктов на дегустацию высылается через 30 дней с момента получения фото-отчета)',
  'Проведение 1 розыгрыша в Инстаграм с нашей продукцией в месяц',
  '2 отметки в сторис Инстаграм в месяц',
];

const nomadOtbasyShopAdv = [
  'Скидки',
  'Товар на проведение 1 дегустации в месяц',
  '50 пробников бесплатно каждый месяц',
  'Товар на проведение 1 розыгрыша в Инстаграм в месяц',
  'При закупе от 500 000 тнг/100 000 руб, выделяем 10% от суммы продукцией на продвижение и рекламу бренда',
  'Готовый фото и видео-материал',
];

const yourShopAdv = [
  'Проведение 1 дегустации с нашими продуктами в месяц и фото-отчет в месяц (следующая партия продуктов на дегустацию высылается через 30 дней с момента получения фото-отчета)',
  'Проведение 1 розыгрыша в Инстаграм с нашей продукцией в месяц',
  '2 отметки в сторис Инстаграм в месяц',
];

const features = [
  'не будет добавлен на маркет-плейсы кз И рф',
  'повторные покупки будут только в магазинах представителей',
  'Никакого демпинга и внутренней конкуренции',
  'Маркетинговая поддержка',
  'Поможем продвинуть бренд и сделать №1 на полках',
];

onMounted(() => {
  new Rellax('.rellax')
})
</script>

<style scoped>
.text__conditions {
  @apply font-medium;
  @apply text-[24px] lg:text-[70px];
}

.text__conditions span {
  @apply text-accent;
}

.cooperation__advantage {
  @apply flex-1;
}

.cooperation__advantage h4 {
  @apply font-semibold uppercase text-accent;
  @apply text-[24px] lg:text-[32px];
}

.cooperation__advantage h5 {
  @apply mt-4 text-white relative inline-block;
  @apply text-[24px] lg:text-[32px];
}

.cooperation__advantage h5:after {
  content: '';
  position: absolute;
  height: 3px;
  @apply -bottom-1.5 lg:-bottom-2 inset-x-0 w-full bg-white;
}

@media (max-width: 700px) {
  .cooperation__advantage h5:after {
    @apply h-0.5;
  }
}

.cooperation__advantage .adv__container {
  @apply mt-10;
  @apply flex flex-col gap-y-3 lg:gap-y-6;
}

.adv__item {
  @apply text-white;
  @apply flex items-start;
  @apply gap-x-6;
  @apply text-sm lg:text-[24px];
}

.adv__item svg {
  @apply flex-shrink-0;
}

.button::after {
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

.button:hover::after {
  background: #E63534;
}

.product__description {
  @apply py-[50px] lg:py-[114px];
  @apply text-white;
  @apply overflow-x-hidden;
  @apply whitespace-normal;
  @apply z-10;
}

.product__description h3 {
  @apply uppercase;
  @apply font-medium text-[32px];
}

.product__description p {
  @apply mt-8;
  @apply text-sm lg:text-lg;
}

.product__description h4 {
  @apply font-semibold;
  @apply mt-8;
  @apply text-sm lg:text-xl;
}

</style>
