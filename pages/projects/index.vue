<script setup lang="ts">
import { FontSize, HeadingElement } from '~/enums'
</script>

<template>
  <Page title="Projects">
    <Stack>
      <Heading
        :element="HeadingElement.H1"
        :font-size="FontSize.XLARGE"
      >
        Essays
      </Heading>
      <Paragraph>
        Creative Exploits: Showcasing My Diverse Spectrum of Projects
      </Paragraph>
      <EmptyCard />
    </Stack>
  </Page>
</template>
