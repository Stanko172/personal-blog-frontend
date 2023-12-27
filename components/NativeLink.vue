<script setup lang="ts">
import { NativeLinkTarget } from '~/enums'

withDefaults(
  defineProps<{
    href: string
    target: NativeLinkTarget
  }>(),
  {
    target: NativeLinkTarget.SELF,
  },
)
</script>

<template>
  <a
    :href="href"
    :target="target"
    class="text-brand-secondary hover:text-brand-text underline"
  >
    <slot />
  </a>
</template>
