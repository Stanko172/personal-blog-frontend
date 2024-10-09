<script lang="ts" setup>
defineProps<{
    tableOfContents?: string,
}>()
</script>

<template>
    <div>
        <h5 class="font-semibold uppercase text-brand-secondary mb-3">Table of contents</h5>
        <div
            class="toc"
            v-if="tableOfContents" 
            v-html="tableOfContents"
        />
    </div>
</template>

<style>
.toc ul {
    list-style-type: none;
    padding-left: 0;
}

.toc a {
    font-size: 0.75rem;
    padding: 0.5rem 0;
    text-decoration: none;
    color: #a4a0fb;
}

.toc a:hover {
    text-decoration: underline;
}

.toc a.active {
    font-weight: bold;
}

.toc li {
    margin: 0;
    padding: 0.25rem 0;
    padding-left: 1rem;
}

.toc li.active {
    font-weight: bold;
}

.toc li.active a {
    color: #8b5cf6;
}

.toc li.active a:hover {
    text-decoration: underline;
}
</style>