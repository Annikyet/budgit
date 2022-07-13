<template>
  <div class="component">
    <div class="flex mt-4 md:mt-14 md:mx-40 flex-col">
      <AddTransaction :categories="categories" />
      <Transaction v-for="t in transactions" :key="t._id" :transaction="t" :categories="categories" />
    </div>
  </div>
</template>


<script>
import { computed, onMounted } from 'vue'
import { AppState } from '../AppState'
import { categoriesService } from '../services/CategoriesService'
import { transactionsService } from '../services/TransactionsService'
import { logger } from '../utils/Logger'
import AddTransaction from '../components/AddTransaction.vue'

export default {
    setup() {
        onMounted(async () => {
            try {
                await categoriesService.getAll();
                await transactionsService.getAll();
            }
            catch (error) {
                logger.log(error);
            }
        });
        return {
            transactions: computed(() => AppState.transactions),
            categories: computed(() => AppState.categories)
        };
    },
    components: { AddTransaction }
}
</script>


<style lang="scss" scoped>

</style>

    <!-- const route = useRoute()
    onMounted(async () => {
      try {
        await supportsService.getSupportsByProject(route.params.id)
      } catch (error) {
        Pop.error(error)
      }
    }) -->

    <!-- tiers: computed(() => AppState.tiers) -->