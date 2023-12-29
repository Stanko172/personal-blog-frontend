<script setup lang="ts">
  import { useRoute } from 'vue-router';
  
  const formattedRouteName = computed<string>(() => {
    if (useRoute().name === 'index') return 'home';
    return useRoute().name as string;
  });
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
