<template>
  <div class="component">
    <p class="hover:text-green-300 cursor-pointer">Add Category</p>
    <div class="flex md:mx-40 flex-col md:flex-row">
      <div class="md:w-4/12 md:order-last">analysis container</div>
      <div class="md:w-8/12">category container
        <p v-for="c in categories" :key="c._id">{{c.name}}</p>
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