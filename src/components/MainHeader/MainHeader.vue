<template>
  <div class="bg-design-header h-72px flex justify-between items-center">
    <div
      class="flex justify-center items-center relative bg-design-1 w-72px h-72px overflow-hidden"
      style="border-radius: 0px 20px 20px 0px"
    >
      <div
        class="bg-design-2 w-72px h-72px absolute top-36px"
        style="
          border-radius: 0px 20px 20px 0px;
          transform: matrix(-1, 0, 0, 1, 0, 0);
        "
      ></div>
      <img src="@/assets/logo.svg" alt="logo" class="z-1" />
    </div>
    <div class="flex">
      <div
        class="w-72px h-72px flex justify-center items-center cursor-pointer"
        @click="switchDarkMode"
      >
        <img
          v-if="!themeStore.darkMode"
          src="@/assets/icon-moon.svg"
          alt="dark mode"
        />
        <img v-else src="@/assets/icon-sun.svg" alt="dark mode" />
      </div>
      <div class="w-2px h-72px bg-design-divider"></div>
      <div class="w-72px h-72px"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useThemeStore } from '@/store'

export default defineComponent({
  name: 'MainHeader',
  setup() {
    const themeStore = useThemeStore()

    const switchDarkMode = () => {
      themeStore.darkMode = !themeStore.darkMode
    }

    return {
      themeStore,
      switchDarkMode
    }
  }
})
</script>
