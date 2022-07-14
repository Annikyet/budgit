<template>
  <div class="component p-2">
    <div class="flex justify-between">
      <h3 :class="`text-3xl ${totalSpent() > category.budgeted ? 'text-red-400' : 'text-green-300'}`">{{category.name}}</h3>
      <i v-show="category._id" class="text-3xl mdi mdi-delete hover:bg-red-400 hover:text-stone-900 cursor-pointer" @click="removeCategory()"></i>
    </div>
    <h4 class="text-2xl">Spent: ${{totalSpent()}}</h4>
    <h4 class="text-2xl">Budgeted: ${{category.budgeted}}</h4>
  </div>
</template>


<script>
import { computed, reactive, onMounted, ref, watchEffect } from "vue";
import { AppState } from '../AppState'


export default {
  setup(){
    return {
      totalSpent() {
        let total = 0;
        if (!this.category.transactions) {
          return 0
        }
        for (let t = 0; t < this.category.transactions.length; t++) {
          total += this.category.transactions[t].amount // TODO count inflow and outflow seperately... ornot?
        }
        return total
      },
      category: computed(() => AppState.activeCategory),
      async removeCategory() {
        if (!AppState.activeCategory._id) {
          console.log('trying to delete overview...')
        }
      }
    }
  }
}
</script>


<style lang="scss" scoped>

</style>