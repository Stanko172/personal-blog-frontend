<script setup lang="ts">
import { FontSize, HeadingElement } from '~/enums'
</script>

<template>
  <Page title="Posts">
    <Stack>
      <Heading
        :element="HeadingElement.H1"
        :font-size="FontSize.XLARGE"
      >
        Posts
      </Heading>
      <Paragraph>
        Tech Trek: Geek Speak, Software Feats, and a Dash of Digital Wizardry.
      </Paragraph>
      <EmptyCard />
    </Stack>
  </Page>
</template>
