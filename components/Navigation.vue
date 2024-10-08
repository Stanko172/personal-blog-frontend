<script setup lang="ts">
const routes = [
  { name: 'Home', path: '/', icon: 'heroicons-solid:home' },
  { name: 'About', path: '/about', icon: 'heroicons-solid:user' },
  { name: 'Posts', path: '/posts', icon: 'heroicons-solid:pencil-alt' },
  { name: 'Essays', path: '/essays', icon: 'heroicons-solid:book-open' },
  { name: 'Projects', path: '/projects', icon: 'heroicons-solid:puzzle' },
]

const navigationStore = useNavigationStore()

function closeNavigation() {
  const isLargeScreen = useMediaQuery('(min-width: 1024px)')

  if (isLargeScreen.value)
    return

  navigationStore.closeSidebar()
}

const route = useRoute()

function isRouteActive(current: string) {
  if (current === '/' && route.path !== '/') {
    return false
  }

  return route.path.includes(current)
}
</script>

<template>
  <ClientOnly>
    <div
      v-if="navigationStore.isSidebarOpen"
      aria-label="lightbox"
      class="z-10 fixed lg:hidden h-screen w-screen mt-[1px] bg-black opacity-80"
      @click="closeNavigation"
    />
    <Transition
      enter-active-class="transition-transform duration-300 ease-in-out"
      leave-active-class="transition-transform duration-300 ease-in-out"
      enter-from-class="-translate-x-full"
      leave-to-class="-translate-x-full"
    >
      <ul
        v-if="navigationStore.isSidebarOpen"
        class="lg:block fixed space-y-5 z-30 inset-0 top-[3.8125rem] right-auto w-[14.5rem] py-10 px-6 overflow-y-auto border-r border-r-brand-outline bg-brand-background left-[max(0px,calc(50%-45rem))]"
      >
        <li v-for="route in routes" :key="route.name">
          <NuxtLink
            :to="route.path"
            class="flex items-center px-3 py-2 w-fit"
            :class="[isRouteActive(route.path)
              ? 'text-brand-primary'
              : 'text-brand-text',
            ]"
            @click="closeNavigation"
          >
            <Icon :name="route.icon" class="w-4 h-4 mr-2" />
            <span class="text-sm">{{ route.name }}</span>
          </NuxtLink>
        </li>
      </ul>
    </Transition>
  </ClientOnly>
</template>
