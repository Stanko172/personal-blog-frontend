<script setup lang="ts">
const email = 'stanko.bebek00@gmail.com'
const { copy, copied, isSupported } = useClipboard()
</script>

<template>
  <div class="grid gap-4 rounded border border-brand-outline bg-surface/50 px-4 sm:px-6 py-8">
    <img src="/stankobebek.webp" alt="Stanko Bebek" class="block rounded-full border-2 border-brand-text h-16 w-16 m-0 mx-auto" width="60" height="60" loading="lazy" decoding="async">
    <div>
      <h5 class="mb-0.5 text-base text-center leading-6 font-semibold uppercase text-brand-secondary">
        Stanko Bebek
      </h5>
      <p class="m-0 mb-6 text-sm text-center">
        <Hyperlink to="/about">
          Full stack software developer
        </Hyperlink>
      </p>
      <a
        href="https://www.linkedin.com/in/stankobebek/"
        target="_blank"
        rel="noopener"
        class="flex items-center justify-center gap-4 no-underline text-brand-secondary text-sm text-center py-2 px-2 transition-all duration-300 rounded border border-brand-outline bg-surface hover:text-brand-text hover:bg-brand-muted/10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
        @stankobebek
      </a>
    </div>
    <hr class="my-3 border-brand-outline">
    <ClientOnly>
      <div class="relative flex group items-center justify-center gap-2 w-max cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-5 h-5 mt-1 stroke-brand-tertiary"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
        <button
          class="no-underline text-brand-secondary text-sm"
          @click="copy(email)
          "
        >
          {{ email }}
        </button>
        <span
          v-if="isSupported"
          class="pointer-events-none absolute -top-7 left-0 w-max opacity-0 transition-opacity group-hover:opacity-100 text-xs bg-brand-outline px-2 py-1"
        >
          {{ copied ? 'Copied!' : 'Click to copy' }}
        </span>
      </div>
    </ClientOnly>
  </div>
</template>
