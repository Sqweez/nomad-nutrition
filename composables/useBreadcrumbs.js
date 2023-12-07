import {useCommonStore} from '~/store/common.js';

export const useBreadcrumbs = () => {
    const route = useRoute();
    const router = useRouter();
    const routes = router.getRoutes();
    const HOMEPAGE = {name: 'Главная', path: '/'};
    const breadcrumbs = ref([HOMEPAGE]);
    const commonStore = useCommonStore();
    const { commonBreadcrumbs } = storeToRefs(commonStore);

    function getBreadcrumbs(currRoute) {
        if (currRoute === '') return [ HOMEPAGE ];

        const paths = getBreadcrumbs(currRoute.slice(0, currRoute.lastIndexOf('/')));

        const founds = routes.filter(r => isMathPatternPath(r.path, currRoute));

        const matchRoute = founds.length > 1 ? founds.find(r => r.path === currRoute) : founds[0];

        return [
            ...paths,
            {
                path: currRoute,
                name: matchRoute?.meta?.breadcrumb || matchRoute?.name || matchRoute?.path || currRoute,
            }
        ]
    }

    watch(() => ({
        path: route.path,
        name: route.name,
        meta: route.meta,
        matched: route.matched,
        commonBreadcrumbs
    }), (route) => {
        if (route.path === '/') {
            breadcrumbs.value = [HOMEPAGE];
            return;
        }

        if (commonBreadcrumbs.value.hasOwnProperty(route.name)) {
            breadcrumbs.value = commonBreadcrumbs.value[route.name];
        } else {
            breadcrumbs.value = getBreadcrumbs(route.path);
        }
    }, {
        immediate: true,
        deep: true,
    })

    return {
        breadcrumbs
    }
}

const isMathPatternPath = (pathA, pathB) => {
    const partsA = pathA.split('/');
    const partsB = pathB.split('/');

    if (partsA.length !== partsB.length) return false;

    return partsA.every((part, i) => {
        return part === partsB[i] || part.startsWith(':');
    });
}
