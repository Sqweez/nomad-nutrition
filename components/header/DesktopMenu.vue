<template>
  <div class="flex items-center justify-between z-20">
    <router-link
        tag="div"
        v-for="(link, key) of links"
        :to="link.url"
        :key="key"
        class="menu__item relative cursor-pointer text-white hover:text-accent transition-colors p-4 flex items-center gap-x-2"
        @click="_handleClick(link, $event)"
    >
      <span class="text-lg uppercase font-normal">
        {{ link.name }}
      </span>
      <svg v-if="hasChildren(link)" width="14" height="8" viewBox="0 0 14 8" fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path d="M7 8L13.0622 0.5H0.937822L7 8Z" class="transition-colors has-children"/>
      </svg>
      <div class="min-w-[299px] top-0 -left-3 shadow z-50 pt-[52px] bg-transparent first__dropdown absolute">
        <div class="relative">
          <nuxt-link
              tag="div"
              :to="firstChild.url"
              v-for="(firstChild, key) of link.children"
              class="bg-[#060606] z-20 py-5 pl-8 text-white hover:text-accent transition-colors flex items-center justify-between first__dropdown--container"
              :key="`child-${key}`"
          >
            <span class="text-lg uppercase">
              {{ firstChild.name }}
            </span>
            <svg width="11" height="61" viewBox="0 0 11 61" fill="none" xmlns="http://www.w3.org/2000/svg"
                 class="absolute -right-2 z-30">
              <rect width="4" height="61" fill="#E63534"/>
              <path d="M11 30L3.5 23.9378L3.5 36.0622L11 30Z" fill="#E63534"/>
            </svg>
            <div class="absolute inset-y-0 left-full z-10 bg-[#000000] min-w-[317px] second__dropdown">
              <nuxt-link
                  :to="secondChild.url"
                  tag="div"
                  v-for="(secondChild, key) of firstChild.children"
                  :key="`second-${key}`"
                  class="py-5 px-5 whitespace-normal text-white hover:text-accent transition-colors block"
              >
                 <span class="text-lg uppercase">
                    {{ secondChild.name }}
                  </span>
              </nuxt-link>
            </div>
          </nuxt-link>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script setup>
import {useModal} from '~/store/modal.js';
import CooperationModal from '~/components/modals/CooperationModal.vue';
import {useNavigationLinks} from '~/composables/useNavigationLinks.js';

const modal = useModal();
const { links, hasChildren } = useNavigationLinks();

const _handleClick = (link, event) => {
  if (link.isButton) {
    event.preventDefault();
    modal.open(CooperationModal);
  }
}
</script>

<style scoped>
.menu__item .has-children {
  fill: #fff;
}

.menu__item:hover > svg > .has-children {
  fill: #E63534;
}

.first__dropdown, .second__dropdown {
  display: none;
}

.menu__item:hover .first__dropdown {
  display: block;
}

.first__dropdown--container svg {
  display: none;
}

.first__dropdown--container:hover svg {
  display: block;
}

.first__dropdown--container:hover .second__dropdown {
  display: block;;
}
</style>
