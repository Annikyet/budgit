<template>
  <div class="component">
    <div class="hidden md:block cursor-pointer">
      <form @submit.prevent="createCategory">
        <input type="text" v-model="newCatName" placeholder="Add New Category" required class="text-slate-50 bg-stone-800 hover:bg-green-300 hover:text-stone-900 p-1">
        <button type="submit" class="text-slate-50 bg-stone-800 hover:bg-green-300 hover:text-stone-900 p-1">
          <i class="mdi mdi-plus"></i>
        </button>
      </form>
    </div>
    <div class="flex md:mt-6 md:mx-40 flex-col md:flex-row">
      <div class="md:w-4/12 md:order-last my-4 md:my-0 bg-stone-800">
        <Analysis />
      </div>
      <div class="md:w-8/12 md:mr-4">
        <div class="flex justify-between bg-stone-700 text-green-300 hover:bg-green-200 hover:text-stone-900 mb-2 p-2 pr-0" @click="viewOverview()">
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
        // console.log('onMounted call')
        await categoriesService.getAll()
        // AppState.activeCategory = 
        await categoriesService.getOverview()
        // console.log(AppState.categories)
      } catch (error) {
        logger.log(error)
      }
    })
    return {
      newCatName: '',
      categories: computed(() => AppState.categories),
      async createCategory() {
        try {
          await categoriesService.create(this.newCatName)
        } catch (error) {
          console.log(error)
        }
      },
      async viewOverview() {
        await categoriesService.getOverview()
      }
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