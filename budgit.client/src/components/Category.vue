<template>
  <div @click="openCategory"
  :class="`component flex justify-between mb-2 p-2 pr-0 bg-stone-800 hover:text-stone-900 ${totalSpent() > category.budgeted ? 'text-red-400 hover:bg-red-400' : 'hover:bg-green-300'}`">
    <h3 class="text-2xl">{{category.name}}</h3>
    <div class="flex">
    <p class="w-16 px-2 border-l-2 border-stone-900">${{totalSpent()}}</p>
    <!-- TODO turn this into an input field for editing -->
    <p class="w-16 px-2 border-l-2 border-stone-900">${{category.budgeted}}</p>
    </div>
  </div>
</template>


<script>
import { computed, reactive, onMounted, ref, watchEffect } from "vue";
import { AppState } from "../AppState";

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
        if (!props.category.transactions) {
          return 0
        }
        for (let t = 0; t < props.category.transactions.length; t++) {
          total += props.category.transactions[t].amount
        }
        return total
      },
      openCategory() {
        AppState.activeCategory = props.category
      }
    }
  }
}

</script>


<style lang="scss" scoped>

</style>