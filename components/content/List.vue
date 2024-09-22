
<script lang="ts" setup>
import { type Content } from '~/types'

const props = withDefaults(defineProps<{
    contents: Content[]
    showTags: boolean
}>(), {
    showTags: false
});
</script>

<template>
    <div class="list-none my-8 p-0 flex flex-col gap-8">
        <ContentItem 
            v-for="content in contents" 
            :content="content"
            :show-tags="showTags"
        />
    </div>
</template>