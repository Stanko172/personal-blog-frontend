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
      <div class="flex items-center justify-center space-x-4">
        <a href="https://www.linkedin.com/in/stankobebek/" target="_blank" rel="noopener" class="h-10 w-10 flex items-center justify-center gap-4 no-underline rounded-full text-brand-secondary text-sm text-center py-2 px-2 transition-all duration-300 rounded border border-brand-outline bg-surface hover:text-brand-text hover:bg-brand-muted/10"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg></a>
        <a href="https://github.com/Stanko172" target="_blank" rel="noopener" class="h-10 w-10 flex items-center justify-center gap-4 no-underline rounded-full text-brand-secondary text-sm text-center py-2 px-2 transition-all duration-300 rounded border border-brand-outline bg-surface hover:text-brand-text hover:bg-brand-muted/10"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .296c-6.628 0-12 5.373-12 12 0 5.301 3.438 9.8 8.207 11.387.6.11.793-.261.793-.577 0-.285-.01-1.04-.015-2.04-3.338.727-4.042-1.615-4.042-1.615-.546-1.387-1.333-1.758-1.333-1.758-1.089-.744.083-.729.083-.729 1.205.084 1.838 1.238 1.838 1.238 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.333-5.467-5.932 0-1.311.469-2.382 1.236-3.222-.124-.303-.536-1.524.116-3.176 0 0 1.008-.322 3.301 1.23.958-.266 1.984-.398 3.004-.404 1.02.006 2.046.138 3.004.404 2.291-1.552 3.298-1.23 3.298-1.23.653 1.652.241 2.873.118 3.176.77.84 1.235 1.911 1.235 3.222 0 4.61-2.805 5.623-5.476 5.921.431.371.816 1.103.816 2.223 0 1.606-.014 2.898-.014 3.293 0 .319.191.694.799.576 4.766-1.589 8.198-6.088 8.198-11.385 0-6.627-5.373-12-12-12z"/></svg></a>
        <a href="https://codesandbox.io/u/stanko172" target="_blank" rel="noopener" class="h-10 w-10 flex items-center justify-center gap-4 no-underline rounded-full text-brand-secondary text-sm text-center py-2 px-2 transition-all duration-300 rounded border border-brand-outline bg-surface hover:text-brand-text hover:bg-brand-muted/10"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 1024 1024"><path d="M489.1 8.4 81.3 238.3c-15.3 8.8-24.8 25.1-24.8 42.9v462.5c0 17.7 9.5 34.1 24.8 42.9l407.8 229.8c15.3 8.8 34.3 8.8 49.6 0l407.8-229.8c15.3-8.8 24.8-25.1 24.8-42.9V281.2c0-17.7-9.5-34.1-24.8-42.9L538.7 8.4c-15.3-8.8-34.3-8.8-49.6 0zM838 282.2 512 467.5 186 282.2l326-183.3 326 183.3z m-702 65.4L452 528.1v354.8L136 703.2V347.6z m692 355.6-316 179.7V528.1l316-180.5v355.6z" /></svg></a>

      </div>
    </div>
    <hr class="my-3 border-brand-outline">
    <ClientOnly>
      <div class="relative flex group items-center justify-center gap-2 w-max cursor-pointer">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-5 h-5 mt-1 stroke-brand-tertiary"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" /></svg>
        <button
          class="no-underline text-brand-secondary text-sm"
          @click="copy(email)"
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
