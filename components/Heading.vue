<script setup lang="ts">
import { Color, FontSize, HeadingElement } from '~/enums'

const props = withDefaults(
  defineProps<{
    color?: Color
    element?: HeadingElement
    fontSize?: FontSize
  }>(),
  {
    color: Color.TEXT,
    element: HeadingElement.H1,
  },
)

const fontSizeClass = computed<object>(() => {
  if (!props.fontSize) {
    return {
      'text-3xl sm:text-5xl': props.element === HeadingElement.H1,
      'text-base text-xl': props.element === HeadingElement.H2,
    }
  }

  return {
    'text-sm': props.fontSize === FontSize.SMALL,
    'text-base': props.fontSize === FontSize.BASE,
    'text-2xl': props.fontSize === FontSize.LARGE,
    'text-4xl': props.fontSize === FontSize.XLARGE,
    'text-5xl': props.fontSize === FontSize.XXLARGE,
  }
})

const fontWeightClass = computed<object>(() => {
  return {
    'font-bold': props.element === HeadingElement.H1,
    'font-semibold': props.element === HeadingElement.H2,
  }
})

const colorClass = computed<object>(() => {
  return {
    'text-brand-text': props.color === Color.TEXT,
    'text-brand-primary': props.color === Color.PRIMARY,
    'text-brand-secondary': props.color === Color.SECONDARY,
    'text-brand-tertiary': props.color === Color.TERTIARY,
  }
})

const classList = computed<object>(() => {
  return [
    fontSizeClass.value,
    fontWeightClass.value,
    colorClass.value,
  ]
})
</script>

<template>
  <component
    :is="element"
    :class="classList"
  >
    <slot />
  </component>
</template>
