<template>
  <div class="w-full h-full font-sans dark:bg-design-3">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, provide } from 'vue'

import { useBreakpoints, useDark } from '@vueuse/core'

// @ts-expect-error js breakpoints
import bkpoints from '../../windi.breakpoints'

export default defineComponent({
  name: 'MainLayout',
  setup() {
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
      isDark.value = false
    })
  }
})
</script>

<style>
:root {
}
</style>
