<script lang="ts" setup>
const props = defineProps<{
    currentPage: number
    prevLink: string | null
    nextLink: string | null
}>();

const emit = defineEmits(['changePage']);

function nextPage(): void {
    emit('changePage', props.currentPage + 1);
}

function prevPage(): void {
    emit('changePage', props.currentPage - 1);
}
</script>

<template>
    <div class="flex gap-4 justify-center items-center">
        <button 
            class="not-prose flex items-center justify-center gap-3 no-underline text-brand-secondary text-sm text-center py-2.5 px-4 tracking-wide transition-all duration-300 rounded border border-brand-outline bg-surface"
            :class="{ 'cursor-not-allowed opacity-50': !props.prevLink, 'hover:text-brand-text hover:bg-brand-muted/10': props.prevLink }"
            :disabled="!props.prevLink"
            @click="prevPage"
        >
            Previous
        </button>
        <button 
            class="not-prose flex items-center justify-center gap-3 no-underline text-brand-secondary text-sm text-center py-2.5 px-4 tracking-wide transition-all duration-300 rounded border border-brand-outline bg-surface"
            :class="{ 'cursor-not-allowed opacity-50': !props.nextLink, 'hover:text-brand-text hover:bg-brand-muted/10': props.nextLink }"
            :disabled="!props.nextLink"
            @click="nextPage"
        >
            Next
        </button>
    </div>
</template>
