<script lang="ts" setup>
const isSidebarOpen = ref<boolean>(false)

function toggleSidebar(): void {
  isSidebarOpen.value = !isSidebarOpen.value
}

const routes = [
  { name: 'Home', path: '/', icon: 'heroicons-solid:home' },
  { name: 'About', path: '/about', icon: 'heroicons-solid:user' },
  { name: 'Posts', path: '/posts', icon: 'heroicons-solid:pencil-alt' },
  { name: 'Essays', path: '/essays', icon: 'heroicons-solid:book-open' },
  { name: 'Projects', path: '/projects', icon: 'heroicons-solid:puzzle' },
  { name: 'Videos', path: '/videos', icon: 'heroicons-solid:video-camera' },
]
</script>

<template>
  <header class="fixed top-0 bg-brand border-b border-brand-outline w-full">
    <nav class="relative">
      <!-- TopBar -->
      <div class="relative flex justify-between max-w-8xl mx-auto p-4 lg:p-6">
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
        <button @click="toggleSidebar">
          toggle
        </button>
      </div>
      <div v-if="isSidebarOpen" aria-label="lightbox" class="z-10 fixed h-screen w-screen mt-[1px] bg-black opacity-80" />
      <Transition
        enter-active-class="transition-transform duration-300 ease-in-out"
        leave-active-class="transition-transform duration-300 ease-in-out"
        enter-from-class="-translate-x-full"
        leave-to-class="-translate-x-full"
      >
        <ul
          v-if="isSidebarOpen"
          class="absolute z-20 py-10 px-6 bg-brand w-[14.5rem] h-screen overflow-y-auto space-y-7 mt-[1px]"
        >
          <li v-for="route in routes" :key="route.name">
            <NuxtLink :to="route.path" class="flex items-center px-3 py-2">
              <Icon :name="route.icon" class="w-4 h-4 mr-2" />
              <span class="text-sm">{{ route.name }}</span>
            </NuxtLink>
          </li>
        </ul>
      </Transition>
    </nav>
  </header>
</template>
