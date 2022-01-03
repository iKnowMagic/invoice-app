<template>
  <div class="w-full h-full font-sans dark:bg-design-3">
    <main-header />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, provide, watch } from 'vue'

import { useBreakpoints, useDark } from '@vueuse/core'

import { useThemeStore } from '@/store'

import MainHeader from '@/components/MainHeader'

// @ts-expect-error js breakpoints
import bkpoints from '../../windi.breakpoints'

export default defineComponent({
  name: 'MainLayout',
  components: {
    MainHeader
  },
  setup() {
    const themeStore = useThemeStore()

    const breakpoints = useBreakpoints(bkpoints)
    const sm = breakpoints.smaller('md')
    const md = breakpoints.between('md', 'lg')
    const lg = breakpoints.greater('lg')
    const mq = { sm, md, lg }
    provide('mq', mq)

    const isDark = useDark({
      selector: 'body',
      attribute: 'class',
      valueDark: 'dark',
      valueLight: 'light'
    })

    onMounted(() => {
      isDark.value = themeStore.darkMode
    })

    watch(themeStore, () => {
      isDark.value = themeStore.darkMode
    })
  }
})
</script>

<style>
:root {
}
</style>
