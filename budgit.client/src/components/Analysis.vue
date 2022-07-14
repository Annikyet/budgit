<template>
  <div class="component">
    Analysis Container
    <p>{{category.name}}</p>

  </div>
</template>


<script>
import { computed, reactive, onMounted, ref, watchEffect } from "vue";
import { AppState } from '../AppState'

export default {
  setup(){
    return {
      category: computed(() => AppState.activeCategory)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>