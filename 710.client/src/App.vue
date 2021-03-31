<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
  </main>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from './AppState'
import './assets/scss/main.scss'
export default {
  name: 'App',
  setup() {
    const state = reactive({
      loading: false,
      theme: true
    })
    return {
      appState: computed(() => AppState),
      state
    }
  }
}
</script>
<style lang="scss">
</style>
