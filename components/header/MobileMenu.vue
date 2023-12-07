<template>
  <transition name="fade">
    <div v-show="props.show" class="fixed inset-0 bg-black bg-opacity-70 z-20 pt-[100px]">
      <div class="px-12 text-white relative flex flex-col gap-y-12">
        <div>
          <button @click="_back" v-if="showBackButton" class="left-0 -top-4 absolute">
            <svg xmlns="http://www.w3.org/2000/svg" width="44px" height="44px" viewBox="0 0 44 44" version="1.1">
              <g id="surface1">
                <path style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;"
                      d="M 25.355469 34.832031 C 24.796875 34.835938 24.273438 34.585938 23.921875 34.15625 L 15.070312 23.15625 C 14.511719 22.476562 14.511719 21.5 15.070312 20.828125 L 24.234375 9.828125 C 24.882812 9.046875 26.042969 8.941406 26.824219 9.585938 C 27.601562 10.238281 27.710938 11.390625 27.058594 12.171875 L 18.863281 22 L 26.785156 31.828125 C 27.242188 32.378906 27.339844 33.140625 27.03125 33.789062 C 26.726562 34.433594 26.070312 34.84375 25.355469 34.832031 Z M 25.355469 34.832031 "/>
              </g>
            </svg>
          </button>
          <div class="flex flex-col gap-y-8">
            <component
                :to="link.url"
                :is="link.isButton ? 'a' : 'nuxt-link'"
                v-for="link of currentLinks"
                @click.prevent="_handleClick(link, $event)"
                class="uppercase text-sm"
            >
              {{ link.name }}
            </component>
          </div>
        </div>
        <div class="text-white">
          <span class="text-sm">
            Контакты
          </span>
          <div class="mt-6 flex flex-col gap-y-3.5 text-sm">
            <div class="flex items-center gap-x-2">
              <img src="~/assets/images/icons/contact-phone.svg" alt="Phone">
              <a :href="`tel:${phone}`">{{ phone }}</a>
            </div>
            <div class="flex items-center gap-x-2">
              <img src="~/assets/images/icons/contact-mail.svg" alt="Mail">
              <a :href="`mailto:${mail}`">{{ mail }}</a>
            </div>
            <div class="flex items-center gap-x-2">
              <img src="~/assets/images/icons/contact-instagram.svg" alt="Instagram">
              <a :href="`https://instagram.com/${instagram}`">{{ instagram }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import {CONTACT_INSTAGRAM, CONTACT_MAIL, CONTACT_PHONE} from "~/common/contacts.js";
import {useRoute, useRouter } from 'vue-router'
import {useModal} from '~/store/modal.js';
import CooperationModal from '~/components/modals/CooperationModal.vue';
import {useNavigationLinks} from '~/composables/useNavigationLinks.js';

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  }
})

const { links, hasChildren } = useNavigationLinks();
const currentLinks = ref([]);
const prevLinks = ref([]);
const phone = ref(CONTACT_PHONE);
const mail = ref(CONTACT_MAIL);
const instagram = ref(CONTACT_INSTAGRAM);
const show = toRefs(props)
const route = useRoute();
const router = useRouter();
const routePath = computed(() => route.path);
const emit = defineEmits(['close'])
const modal = useModal();
let isLocked = ref(false);

const showBackButton = computed(() => {
  return prevLinks.value.length > 0;
})

watch(() => props.show, function (value) {
  if (!value) {
    setTimeout(() => {
      _init();
    }, 500);
  }

  if (value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
})

watch(routePath, function () {
  emit('close');
}, {deep: true})


const _handleClick = (link, event) => {
  if (link.isButton) {
    event.preventDefault();
    modal.open(CooperationModal);
    emit('close');
    return false;
  }
  if (!hasChildren(link)) {
    return router.push(link.url);
  }
  prevLinks.value.push(currentLinks.value);
  currentLinks.value = link.children;
}

const _init = () => {
  currentLinks.value = links.value
  prevLinks.value = [];
}

const _back = () => {
  currentLinks.value = prevLinks.value.pop();
}

onMounted(() => {
  _init();
})

/*export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    }
  },
  data: () => ({
    links: navigation,
    currentLinks: [],
    prevLinks: [],
    key: 0,
    depth: 0,
    phone: CONTACT_PHONE,
    mail: CONTACT_MAIL,
    instagram: CONTACT_INSTAGRAM,
    isLocked: false,
  }),
  methods: {
    _handleClick(link) {
      if (!this.hasChildren(link)) {
        return this.$router.push(link.url);
      }
      this.prevLinks.push(this.currentLinks);
      this.currentLinks = link.children;
    },
    hasChildren(link) {
      return link.hasOwnProperty('children') && link.children.length > 0;
    },
    _init() {
      this.currentLinks = this.links;
      this.prevLinks = [];
    },
    _back() {
      this.currentLinks = this.prevLinks.pop();
    },
  },
  mounted() {
    this._init();
  },
  computed: {
    showBackButton() {
      return this.prevLinks.length > 0;
    }
  },
  watch: {
    show(value) {
      if (!value) {
        setTimeout(() => {
          this._init();
        }, 500);
      }
    },
    $route: {
      handler(to, from) {
        this.$emit('close')
      },
      deep: true,
    }
  }
}*/
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all .5s
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>
