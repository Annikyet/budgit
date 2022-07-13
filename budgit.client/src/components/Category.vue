<template>
  <div class="component flex justify-between bg-stone-800 hover:bg-green-300 hover:text-stone-900 mb-2 p-2 pr-0">
    <h3 class="text-2xl">{{category.name}}</h3>
    <div class="flex">
    <p class="w-16 px-2 border-l-2 border-stone-900">${{totalSpent()}}</p>
    <p class="w-16 px-2 border-l-2 border-stone-900">${{category.budgeted}}</p>
    </div>
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
    return {
      totalSpent() {
        let total = 0;
        for (let t = 0; t < props.category.transactions.length; t++) {
          total += props.category.transactions[t].amount
        }
        return total
      }
    }
  }
}

</script>


<style lang="scss" scoped>

</style>