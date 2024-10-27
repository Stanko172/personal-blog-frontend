<script lang="ts" setup>
import { type Content } from '~/types'
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const config = useRuntimeConfig();

const { data } = await useFetch<Content>(`/contents/${route.params.slug}`, {
    baseURL: config.public.apiBaseUrl,
    onResponseError: (error) => {
        if (error.response?.status === 404) {
            router.push('/404');
        }
    },
});

watchEffect(() => {
    if (data.value) {
        useHead({
            title: data.value?.data.title,
            meta: [
                { property: 'og:title', content: data.value?.data.title },
                { property: 'og:description', content: data.value?.data.description },
                { property: 'og:image', content: data.value?.data.cover_image },
                { property: 'og:image:width', content: '1200' },
                { property: 'og:image:height', content: '630' },
                { property: 'og:url', content: data.value?.data.content.url },
                { property: 'og:type', content: 'article' },

                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'twitter:title', content: data.value?.data.title },
                { name: 'twitter:description', content: data.value?.data.description },
                { name: 'twitter:image', content: data.value?.data.cover_image },
                { name: 'twitter:site', content: '@StankoBebek' },
                { name: 'twitter:creator', content: '@StankoBebek' }
            ]
        });
    }
});
</script>


<template>
    <Page
        :title="data?.data.title"
        :show-breadcrumb="false"
        :table-of-contents="data?.data.table_of_contents"
    >
        <article class="max-w-none min-h-[calc(100vh-19rem)] prose prose-invert">
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-start sm:justify-between gap-2">
                <time class="text-xs font-bold text-brand-primary">{{ data?.data.published_at }}</time>
            </div>
            <h1 class="my-8">{{ data?.data.title }}</h1>
            <div v-html="data?.data.content" />
        </article>
    </Page>
</template>