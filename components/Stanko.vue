<script setup lang="ts">
withDefaults(
  defineProps<{
    href: string
    ariaCurrent: 'page' | 'false'
  }>(),
  {
    ariaCurrent: 'false',
  },
)
</script>

<template>
  <a :href="href" :aria-current="ariaCurrent">
    <slot />
  </a>
</template>
