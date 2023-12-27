<script setup lang="ts">
import { HeadingElement } from '~/enums'

const props = withDefaults(
  defineProps<{
    heading: HeadingElement
  }>(),
  {
    heading: HeadingElement.H1,
  },
)

const classList = computed<object>(() => ({
  'font-bold text-3xl sm:text-5xl': props.heading === HeadingElement.H1,
  'font-semibold text-xl': props.heading === HeadingElement.H2,
}))
</script>

<template>
  <component :is="heading" class="text-brand-text" :class="classList">
    <slot />
  </component>
</template>
