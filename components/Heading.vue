<script setup lang="ts">
import { HeadingElement } from '@/enums'

const props = withDefaults(
  defineProps<{
    heading: HeadingElement
  }>(),
  {
    heading: HeadingElement.H1,
  },
)

const classList = computed<object>(() => ({
  'text-brand-text font-semibold text-3xl sm:text-5xl mb-1': props.heading === HeadingElement.H1,
  'text-brand-text text-2xl  mt-1': props.heading === HeadingElement.H2,
}))
</script>

<template>
  <component :is="heading" :class="classList">
    <slot />
  </component>
</template>
