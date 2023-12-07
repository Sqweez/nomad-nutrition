<template>
    <div class="layout">
      <NuxtLoadingIndicator
          color="#E63534"
      />
      <NavigationAppHeader />
      <div class="page">
        <app-breadcrumbs :breadcrumbs="breadcrumbs"/>
        <slot />
      </div>
      <base-modal />
      <utils-provider />
      <NavigationAppFooter />
    </div>
</template>

<script setup>
import AppBreadcrumbs from "~/components/navigation/AppBreadcrumbs.vue";
import { useBreadcrumbs } from "~/composables/useBreadcrumbs.js";
import BaseModal from '~/components/modals/BaseModal.vue';
import UtilsProvider from '~/components/utils/UtilsProvider.vue';

const { breadcrumbs } = useBreadcrumbs();

</script>

<style lang="scss">

</style>
