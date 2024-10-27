
<script lang="ts" setup>
import { type Content } from '~/types'

const props = withDefaults(defineProps<{
    contents: Content[]
    showTags?: boolean
    currentPage: number
    prevLink: string | null
    nextLink: string | null
}>(), {
    showTags: false
});

const emit = defineEmits(['changePage']);

function changePage(page: number): void {
    emit('changePage', page);
}
</script>

<template>
    <div class="list-none my-8 p-0 flex flex-col gap-8">
        <ContentItem 
            v-for="content in contents" 
            :content="content"
            :show-tags="showTags"
        />
        <div class="">
            <ContentPagination
                :currentPage="currentPage"
                :prev-link="prevLink"
                :next-link="nextLink"
                @change-page="changePage"
            />
        </div>
    </div>
</template>