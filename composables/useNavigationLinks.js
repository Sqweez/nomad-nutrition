import {useCommonStore} from '~/store/common.js';
import navigation from '~/common/navigation.js';
const _links = reactive(navigation);
const commonStore = useCommonStore();
const { catalogNavigation } = storeToRefs(commonStore)

export const useNavigationLinks = () => {
  const links = computed(() => {
    return [catalogNavigation.value, ..._links];
  });

  const hasChildren = link => {
    return link.hasOwnProperty('children') && link.children.length > 0;
  }

  return {
    links, hasChildren
  }
}
