<script setup lang="ts">
import { FontSize, HeadingElement } from '~/enums'

const config = useRuntimeConfig()

const { data } = useFetch('/contents?type=post', {
  baseURL: config.public.apiBaseUrl,
  server: false
});
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
      <EmptyCard v-if="data?.data.length === 0"/>
      <ContentList 
        v-else
        :contents="data?.data"
      />
    </Stack>
  </Page>
</template>
