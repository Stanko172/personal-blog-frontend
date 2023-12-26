import { useMediaQuery } from '@vueuse/core'
import { skipHydrate } from 'pinia'

export const useNavigationStore = defineStore('navigation', () => {
  const isLargeScreen = useMediaQuery('(min-width: 1024px)')
  const isSidebarOpen = ref<boolean>(false)

  const toggleSidebar = () => {
    isSidebarOpen.value = !isSidebarOpen.value
  }

  function updateSidebar(): void {
    if (isLargeScreen.value) {
      isSidebarOpen.value = true
      return
    }

    isSidebarOpen.value = false
  }

  watch(isLargeScreen, updateSidebar, { immediate: true })

  return {
    isSidebarOpen: skipHydrate(isSidebarOpen),
    toggleSidebar,
  }
})
