<template>
  <header class="text-slate-50">
    <Navbar />
  </header>
  <main class="text-slate-50 bg-stone-900 h-full">
    <router-view />
  </main>
  <footer class="text-slate-50 bg-stone-800">
    <div>
      An <a href="https://github.com/annikyet">Annika</a> project.
    </div>
  </footer>
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
