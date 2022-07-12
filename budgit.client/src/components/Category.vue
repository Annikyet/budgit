<template>
  <div class="component">
    <p>{{category}}</p>

  </div>
</template>


<script>
import { computed, reactive, onMounted, ref, watchEffect } from "vue";

export default {
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  setup(props){
  }
}

</script>


<style lang="scss" scoped>

</style>