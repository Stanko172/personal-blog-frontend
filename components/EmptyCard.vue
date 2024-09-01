<script setup lang="ts">
import { FontSize } from '~/enums'
</script>

<template>
  <div class="p-4 sm:p-6 text-center rounded border border-brand-outline bg-brand-surface">
    <Icon name="openmoji:space-shuttle" class="w-12 h-12 mb-2" />
    <Paragraph :font-size="FontSize.SMALL">
      In the vast digital realm, an empty canvas awaits. <br>
      No words have been written yet, just the quiet promise of a story ready to unfold.
    </Paragraph>
  </div>
</template>
