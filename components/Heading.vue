<script setup lang="ts">
import { Color, HeadingElement } from '~/enums'

const props = withDefaults(
  defineProps<{
    color?: Color
    element?: HeadingElement
  }>(),
  {
    color: Color.TEXT,
    element: HeadingElement.H1,
  },
)

const classList = computed<object>(() => ({
  'font-bold text-3xl sm:text-5xl': props.element === HeadingElement.H1,
  'font-semibold text-xl': props.element === HeadingElement.H2,
  'text-brand-text': props.color === Color.TEXT,
  'text-brand-primary': props.color === Color.PRIMARY,
  'text-brand-secondary': props.color === Color.SECONDARY,
  'text-brand-tertiary': props.color === Color.TERTIARY,
}))
</script>

<template>
  <component :is="element" :class="classList">
    <slot />
  </component>
</template>
