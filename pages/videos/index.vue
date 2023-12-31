<script setup lang="ts">
import { FontSize, HeadingElement } from '~/enums'
</script>

<template>
  <Page title="Videos">
    <Stack>
      <Heading
        :element="HeadingElement.H1"
        :font-size="FontSize.XLARGE"
      >
        Videos
      </Heading>
      <Paragraph>
        Visual Ventures: Diving into a Kaleidoscope of Videos and Multimedia Marvels
      </Paragraph>
      <EmptyCard />
    </Stack>
  </Page>
</template>
