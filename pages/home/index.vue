<script lang="ts" setup>
import { HeadingElement } from '@/enums'
</script>

<template>
  <Page>
    <div class="mb-7">
      <Heading>Stanko Bebek</Heading>
      <Heading :heading="HeadingElement.H2">
        Full stack software developer
      </Heading>
    </div>

    <p>  
      In my role as a fullstack developer, I aim to unify front-end and backend elements while extending my focus to encompass business aspects and enhance user experience. 
      My enthusiasm lies in the <strong class="text-brand-secondary">startup</strong> realm, and I harbor a particular affection for <strong class="text-brand-primary">Laravel</strong> and <strong class="text-brand-tertiary">Vue.js</strong> as my primary technologies.
      Moreover, I hold a sincere affinity for design and mobile development.
    </p>
  </Page>
</template>
