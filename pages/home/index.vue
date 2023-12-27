<script lang="ts" setup>
import { Color, HeadingElement } from '~/enums'
</script>

<template>
  <Page>
    <div class="mb-7 space-y-1.5">
      <Heading>Stanko Bebek</Heading>
      <Heading :heading="HeadingElement.H2">
        Full stack software developer
      </Heading>
    </div>

    <Paragraph>
      In my role as a fullstack developer, I aim to unify front-end and backend elements while extending my focus to encompass business aspects and enhance user experience.
      My enthusiasm lies in the <Strong :color="Color.SECONDARY">startup</Strong> realm, and I harbor a particular affection for <Strong :color="Color.PRIMARY">Laravel</Strong> and <Strong :color="Color.TERTIARY">Vue.js</Strong> as my primary technologies.
      Moreover, I hold a sincere affinity for UI and system design, as well as mobile development.
    </Paragraph>
  </Page>
</template>
