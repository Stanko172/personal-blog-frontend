<script setup lang="ts">
import { Color, Role } from '~/enums'

const props = withDefaults(defineProps<{
  color?: Color
  role?: Role
  ariaLabel?: string
}>(), {
  color: Color.PRIMARY,
  role: Role.BUTTON,
})

const classList = computed<object>(() => ({
  'border-brand-primary text-brand-primary': props.color === Color.PRIMARY,
  'border-brand-secondary text-brand-secondary': props.color === Color.SECONDARY,
  'border-brand-tertiary text-brand-tertiary': props.color === Color.TERTIARY,
}))
</script>

<template>
  <button
    class="font-[Roboto] inline-flex border-2 rounded-full bg-transparent font-bold text-base no-underline px-6 py-3 transition-color duration-300 hover:text-brand-text hover:border-brand-text"
    :class="classList"
    :role="role"
    :aria-label="ariaLabel"
  >
    <slot />
  </button>
</template>
