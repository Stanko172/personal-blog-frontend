<script lang="ts" setup>
import { Color, HeadingElement } from '~/enums'

const config = useRuntimeConfig()

const { data } = useFetch('/contents', {
  baseURL: config.public.apiBaseUrl,
  server: false
});
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
        My enthusiasm lies in the <Strong :color="Color.SECONDARY" underline>startup</Strong> realm, and I harbor a particular affection for <Strong :color="Color.TERTIARY" underline>Laravel</Strong> and <Strong :color="Color.PRIMARY" underline>Vue.js</Strong> as my primary technologies.
        Moreover, I hold a sincere affinity for UI and system design, as well as for mobile development.
      </Paragraph>
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
      <EmptyCard v-if="data?.data.length === 0"/>
      <ContentList 
        v-else
        :contents="data?.data"
        show-tags
      />
    </div>
  </Page>
</template>
