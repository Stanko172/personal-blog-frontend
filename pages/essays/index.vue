<script setup lang="ts">
import { FontSize, HeadingElement } from '~/enums'

const config = useRuntimeConfig()
const currentPage = ref<number>(1);

const { data } = useFetch(() => '/contents', {
  baseURL: config.public.apiBaseUrl,
  query: {
    page: currentPage,
    type: 'essay',
  },
  watch: [currentPage],
});

function changePage(page: number) {
  currentPage.value = page;
}
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
        :currentPage="currentPage"
        :prev-link="data?.links?.prev"
        :next-link="data?.links?.next"
        @change-page="changePage"
      />
    </Stack>
  </Page>
</template>
