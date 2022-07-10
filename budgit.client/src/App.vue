<template>
  <div class="flex flex-col">
    <header class="text-slate-50">
      <Navbar />
    </header>
    <main class="text-slate-50 bg-stone-900 min-h-screen">
      <router-view />
    </main>
    <footer class="text-slate-50 bg-stone-800 justify-self-end">
      <div>
        An <a href="https://github.com/annikyet">Annika</a> project.
      </div>
    </footer>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
export default {
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="postcss">
</style>
