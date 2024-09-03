<script lang="ts" setup>
import { type Content } from '~/types'

const props = defineProps<{
    content: Content
}>();
</script>

<template>
    <a 
        href="#" 
        class="flex flex-col md:flex-row gap-3 md:gap-6 items-center bg-brand-surface border border-brand-outline rounded p-4 no-underline hover:transform hover:translate-y-[-10px] transition-transform duration-300"
    >
        <img 
            :src="content.cover_image" 
            :alt="content.title" 
            class="my-10 overflow-hidden rounded border border-brand-outline !my-0 w-full md:w-1/2" 
            width="570" 
            height="321" 
            loading="lazy" 
            decoding="async"
        >
        <div class="flex flex-col gap-2">
            <span class="flex flex-col sm:flex-row gap-2 sm:items-center">
            <time class="text-xs font-bold text-brand-primary">{{ content.published_at }}</time>
            </span>
            <strong class="block text-brand-text text-xl ">{{ content.title }}</strong>
            <p class="font-light text-sm ">{{ content.content }}</p> 
            <ul class="flex flex-wrap items-baseline gap-2 list-none m-0 p-0 mt-2 mb-0"> 
                <li class="m-0 p-0 rounded text-xs text-brand-salmon border-brand-outline border border-brand-outline bg-brand-surface">
                    <strong class="block px-2 py-1 font-medium text-brand-tertiary">{{ content.type }}</strong>
                </li>
            </ul> 
        </div> 
    </a>
</template>