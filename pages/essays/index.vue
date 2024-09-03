<script setup lang="ts">
import { FontSize, HeadingElement } from '~/enums'

const config = useRuntimeConfig()

const { data } = useFetch('/contents?type=essay', {
  baseURL: config.public.apiBaseUrl
});
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
      <EmptyCard v-if="data?.data.length === 0"/>
      <ContentList 
        v-else
        :contents="data?.data"
      />
    </Stack>
  </Page>
</template>
