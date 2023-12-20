<script lang="ts" setup>
const isSidebarOpen = ref<boolean>(false)
</script>

<template>
  <header class="sticky top-0 bg-brand border-b border-brand-outline">
    <nav class="relative">
      <!--TopBar-->
      <div class="flex justify-between max-w-8xl mx-auto p-4 lg:p-6">
        <NuxtLink to="/" aria-current="page">
          <span class="sr-only">Stanko Bebek's Site</span>
          <div class="flex items-center space-x-4">
            <div class="text-3xl">
              👨‍💻
            </div>
            <div class="text-lg text-slate-200">
              Stanko Bebek
            </div>
          </div>
        </NuxtLink>
        <button @click="isSidebarOpen = !isSidebarOpen">
          toggle
        </button>
      </div>
      <!--Sidebar-->
      <div class="absolute h-screen w-full bg-black bg-opacity-80 mt-[1px]">
        <ul
          class="py-10 px-6 bg-brand w-4/6 h-screen overflow-y-auto space-y-7 transition-transform duration-300 ease-in-out"
          :class="[isSidebarOpen ? 'trasnlate-0' : '-translate-x-full']"
        >
          <li v-for="i in 50" :key="i">
            <a href="/" class="px-3 py-2">
              <Icon name="heroicons-solid:home" class="w-4 h-4 mr-2" />
              <span class="text-sm">Home</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
