<script setup lang="ts">
import { FontSize, HeadingElement } from '~/enums'

const config = useRuntimeConfig()

const { data } = useFetch('/contents?type=project', {
  baseURL: config.public.apiBaseUrl,
  server: false
});
</script>

<template>
  <Page title="Projects">
    <Stack>
      <Heading
        :element="HeadingElement.H1"
        :font-size="FontSize.XLARGE"
      >
        Projects
      </Heading>
      <Paragraph>
        Creative Exploits: Showcasing My Diverse Spectrum of Projects.
      </Paragraph>
      <EmptyCard v-if="data?.data.length === 0"/>
      <ContentList 
        v-else
        :contents="data?.data"
      />
    </Stack>
  </Page>
</template>
