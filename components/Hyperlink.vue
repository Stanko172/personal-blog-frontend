<script setup lang="ts">
import { HyperlinkTarget } from '~/enums'

withDefaults(
  defineProps<{
    to: string
    target?: HyperlinkTarget
  }>(),
  {
    target: HyperlinkTarget.SELF,
  },
)
</script>

<template>
  <NuxtLink
    :to="to"
    :target="target"
    class="text-brand-secondary hover:text-brand-text underline"
  >
    <slot />
  </NuxtLink>
</template>
