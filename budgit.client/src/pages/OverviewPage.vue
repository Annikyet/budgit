<template>
  <div class="component">
    <p class="hover:text-green-300 hidden md:block cursor-pointer">Add Category</p>
    <div class="flex md:mx-40 flex-col md:flex-row">
      <div class="md:w-4/12 md:order-last my-4 md:my-0 bg-stone-800">analysis container</div>
      <div class="md:w-8/12 md:mr-4">
        <div class="flex justify-between bg-stone-700 text-green-300 hover:bg-green-200 hover:text-stone-900 mb-2 p-2 pr-0">
          <h3 class="text-2xl font-semibold">Category</h3>
          <div class="flex">
            <p class="w-16 font-semibold px-2 border-l-2 border-stone-900">Spent</p>
            <p class="w-16 font-semibold px-2 border-l-2 border-stone-900">Budg</p>
          </div>
        </div>
        <Category v-for="c in categories" :key="c._id" :category="c" />
      </div>
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { categoriesService } from '../services/CategoriesService'
import { logger } from '../utils/Logger'


export default {
  setup(){
    onMounted(async () => {
      try {
        // console.log(AppState.categories)
        await categoriesService.getAll()
        // console.log(AppState.categories)
      } catch (error) {
        logger.log(error)
      }
    })
    return {
      categories: computed(() => AppState.categories)
    }
  }
}
</script>


<style lang="scss" scoped>

</style>

<!--
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { transactionsService } from '../services/TransactionsService'
import { logger } from '../utils/Logger'

export default {
  setup(){
    onMounted(async () => {
      try {
        await transactionsService.getAll()
      } catch (error) {
        logger.log(error)
      }
    })
    return {
      transactions: computed(() => AppState.transactions)
    }
  }
} -->