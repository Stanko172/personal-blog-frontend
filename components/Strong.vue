<script setup lang="ts">
import { Color } from '~/enums'

const props = withDefaults(
  defineProps<{
    color: Color
  }>(),
  {
    color: Color.PRIMARY,
  },
)

const classList = computed<object>(() => ({
  'text-brand-primary': props.color === Color.PRIMARY,
  'text-brand-secondary': props.color === Color.SECONDARY,
  'text-brand-tertiary': props.color === Color.TERTIARY,
}))
</script>

<template>
  <strong :class="classList">
    <slot />
  </strong>
</template>
