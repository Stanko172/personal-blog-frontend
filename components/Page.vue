<script setup lang="ts">
import { useRoute } from 'vue-router'

const props = withDefaults(defineProps<{
  title?: string,
  showBreadcrumb?: boolean,
  tableOfContents?: string,
}>(), {
  showBreadcrumb: true,
})

const formattedRouteName = computed<string>(() => {
  if (useRoute().name === 'index')
    return 'home'
  return useRoute().name as string
})

const formattedPageTitle = computed<string>(() => {
  return props.title
    ? `Stanko Bebek | ${props.title}`
    : 'Stanko Bebek'
})

useHead({
  title: formattedPageTitle.value,
})
</script>

<template>
  <div>
    <strong
      v-if="showBreadcrumb" 
      class="block mb-10 text-sm text-brand-primary capitalize"
    >
      {{ formattedRouteName }}
    </strong>
    <slot />

    <aside class="fixed top-[4.6rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-6 px-8 overflow-y-auto hidden xl:flex flex-col gap-8 z-10">
      <slot name="sidebar">
        <ContactMe />
        <TOC
          v-if="tableOfContents" 
          :table-of-contents="tableOfContents"
        />
      </slot>
    </aside>
  </div>
</template>
