<script setup lang="ts">
import { FontSize, HeadingElement } from '~/enums'
</script>

<template>
  <Page title="Essays">
    <Stack>
      <Heading
        :element="HeadingElement.H1"
        :font-size="FontSize.XLARGE"
      >
        Essays
      </Heading>
      <Paragraph>
        Chronicles of Curiosity: Essays on the Digital Frontier and Everyday Wonders.
      </Paragraph>
      <EmptyCard />
    </Stack>
  </Page>
</template>
