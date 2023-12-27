<script setup lang="ts">
import { FontSize } from '~/enums'

const props = withDefaults(
  defineProps<{
    fontSize?: FontSize
  }>(),
  {
    fontSize: FontSize.BASE,
  },
)

const classList = computed<object>(() => ({
  'text-sm leading-6': props.fontSize === FontSize.SMALL,
  'text-base leading-7': props.fontSize === FontSize.BASE,
}))
</script>

<template>
  <p :class="classList">
    <slot />
  </p>
</template>
