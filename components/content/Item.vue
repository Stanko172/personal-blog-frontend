<script lang="ts" setup>
import { type Content } from '~/types'

const props = withDefaults(defineProps<{
    content: Content
    showTags: boolean
}>(), {
    showTags: false
});
</script>

<template>
    <NuxtLink
        :to="content.url"
        class="flex flex-col md:flex-row gap-3 md:gap-6 items-center bg-brand-surface border border-brand-outline rounded p-4 no-underline hover:transform hover:translate-y-[-10px] transition-transform duration-300"
    >
        <img 
            :src="content.cover_image" 
            :alt="content.title" 
            class="rounded border border-brand-outline w-[260px] object-cover" 
            loading="lazy" 
            decoding="async"
        >
        <div class="flex flex-col gap-2">
            <span class="flex flex-col sm:flex-row gap-2 sm:items-center">
                <time class="text-xs font-bold text-brand-primary">{{ content.published_at }}</time>
            </span>
            <strong class="block text-brand-text text-xl ">{{ content.title }}</strong>
            <p class="font-light text-sm">{{ content.content }}</p> 
            <ul v-if="showTags" class="flex flex-wrap items-baseline gap-2 list-none m-0 p-0 mt-2 mb-0"> 
                <li class="m-0 p-0 rounded text-xs text-brand-salmon border border-brand-outline bg-brand-surface">
                    <strong class="block px-2 py-1 font-medium text-brand-tertiary">{{ content.type }}</strong>
                </li>
            </ul> 
        </div> 
    </NuxtLink>
</template>
