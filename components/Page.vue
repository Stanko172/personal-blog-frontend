<script setup lang="ts">
import { useRoute } from 'vue-router'

const props = defineProps<{
  title?: string
}>()

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
  link: [
    {
      rel: 'icon',
      href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%2210 0 100 100%22><text y=%22.90em%22 font-size=%2290%22>👨‍💻</text></svg>', 
    }
  ],
  htmlAttrs: {
    lang: 'en',
  },
})
</script>

<template>
  <div>
    <strong class="block mb-10 text-sm text-brand-primary capitalize">
      {{ formattedRouteName }}
    </strong>
    <slot />

    <aside class="fixed top-[4.6rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-6 px-8 overflow-y-auto hidden xl:flex flex-col gap-8 z-10">
      <slot name="sidebar">
        <ContactMe />
      </slot>
    </aside>
  </div>
</template>
