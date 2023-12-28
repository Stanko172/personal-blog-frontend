<script setup lang="ts">
import { FontSize } from '~/enums'
</script>

<template>
  <div class="p-4 sm:p-6 text-center rounded border border-brand-outline bg-brand-surface shadow-lg">
    <Icon name="openmoji:space-shuttle" class="w-12 h-12 mb-2" />
    <Paragraph :font-size="FontSize.SMALL">
      In the vast digital quiet, an empty canvas awaits. <br>
      No written words, just the cool promise of my story ready to unfold in this serene space.
    </Paragraph>
  </div>
</template>
