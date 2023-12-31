<script lang="ts" setup>
import { Color, HeadingElement, Role } from '~/enums'
</script>

<template>
  <Page title="Home">
    <div class="space-y-7">
      <div class="space-y-1.5">
        <Heading>
          Stanko Bebek
        </Heading>
        <Heading :element="HeadingElement.H2">
          Full stack software developer
        </Heading>
      </div>
      <Paragraph>
        In my role as a fullstack developer, I aim to unify front-end and backend elements while extending my focus to encompass business aspects and enhance user experience.
        My enthusiasm lies in the <Strong :color="Color.SECONDARY">startup</Strong> realm, and I harbor a particular affection for <Strong :color="Color.PRIMARY">Laravel</Strong> and <Strong :color="Color.TERTIARY">Vue.js</Strong> as my primary technologies.
        Moreover, I hold a sincere affinity for UI and system design, as well as for mobile development.
      </Paragraph>
      <Button
        :role="Role.LINK"
        :color="Color.PRIMARY"
        name="find-out-more"
        @click="$router.push('/about')"
      >
        Find out more
      </Button>
    </div>
    <div class="mt-24">
      <div class="mb-8">
        <Heading
          :element="HeadingElement.H2"
          :color="Color.PRIMARY"
        >
          Latest content
        </Heading>
        <Paragraph>
          Discover the newest stories and ideas in my recent blog entries.
        </Paragraph>
      </div>
      <EmptyCard />
    </div>
  </Page>
</template>
