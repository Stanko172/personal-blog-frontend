<script setup lang="ts">
const navigationStore = useNavigationStore()
</script>

<template>
  <header class="fixed top-0 z-40 w-full backdrop-blur border-b border-b-brand-outline flex-none bg-brand-background lg:bg-transparent">
    <nav class="relative">
      <div class="flex justify-between max-w-8xl mx-auto p-4 sm:px-6 md:px-8">
        <NuxtLink to="/" aria-current="page">
          <span class="sr-only">Stanko Bebek's Site</span>
          <div class="flex items-center space-x-4">
            <div class="text-3xl">
              👨‍💻
            </div>
            <div class="text-lg text-slate-300">
              Stanko Bebek
            </div>
          </div>
        </NuxtLink>
        <button @click="navigationStore.toggleSidebar" class="lg:hidden">
          <Icon v-if="navigationStore.isSidebarOpen" name="heroicons-solid:x" class="w-6 h-6 text-slate-300" />
          <Icon v-else name="heroicons-solid:bars-3-bottom-right" class="w-6 h-6 text-slate-300"/>
        </button>
      </div>
    </nav>
  </header>
</template>
