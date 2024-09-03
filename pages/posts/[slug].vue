<script lang="ts" setup>
import { type Content } from '~/types'

const route = useRoute();
const config = useRuntimeConfig();

const { data } = useFetch<Content>(`/contents/${route.params.slug}`, {
    baseURL: config.public.apiBaseUrl
});
</script>

<template>
    <Page
        :title="data?.data.title"
        :show-breadcrumb="false"
        :table-of-contents="data?.data.table_of_contents"
    >
        <article class="max-w-none min-h-[calc(100vh-19rem)] prose dark:prose-invert">
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-2">
                <time class="text-xs font-bold text-brand-primary">{{ data?.data.published_at }}</time>
            </div>
            <h1 class="my-8">{{ data?.data.title }}</h1>
            <div v-html="data?.data.content" />
        </article>
    </Page>
</template>