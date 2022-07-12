<template>
  <div class="component flex flex-wrap md:flex-nowrap justify-between bg-stone-800 mb-2">
    <div class="pr-4">
      <input type="date" v-model="transData.date" class="text-slate-50 bg-stone-800 w-32 hover:bg-green-300 hover:text-stone-900">
    </div>
    <div class="pr-4">
      <!-- TODO this is bad! don't manipulate the prop -->
      <!-- Look at cars in gregslist? -->
      <!-- use editable object -->
      <span class="flex">
        $
        <input type="number" v-model="transData.amount" :placeholder="transData.amount" class="w-24 bg-stone-800 text-slate-50 hover:bg-green-300 hover:text-stone-900">
      </span>
    </div>
    <div class="pr-4">
        <input type="text" v-model="transData.payee" :placeholder="transData.payee" class="text-slate-50 bg-stone-800 w-32 hover:bg-green-300 hover:text-stone-900">
    </div>
    <div class="pr-4">
      <select v-model="transData.categoryId" class="text-slate-50 bg-stone-800 w-36 hover:bg-green-300 hover:text-stone-900">
        <option :value="transData.categoryId" selected>{{categories.find((c) => c._id == transData.categoryId)?.name}}</option>
        <!-- cat?.name - null coalescence - returns value iff object is valid -->
        <!-- TODO there's an error here but it works??? -->
        <option v-for="c in categories" :value="c._id">{{c.name}}</option>
      </select>
    </div>
    <div class="pr-4">
      <input type="text" v-model="transData.comment" :placeholder="transData.comment" class="text-slate-50 bg-stone-800 w-48 hover:bg-green-300 hover:text-stone-900">
    </div>
    <div>
      <button class="text-slate-50 bg-stone-800 w-16 hover:bg-green-300 hover:text-stone-900" @click="update">
        Save
      </button>
    </div>
  </div>
</template>


<script>
// import { logger } from '../utils/Logger'
import { transactionsService } from '../services/TransactionsService'
import { getDollars } from '../utils/Dollars'
import { computed, reactive, onMounted, ref, watchEffect } from "vue";

export default {
  // TODO there's probably something wrong with this...
  props: {
    transaction: {
      type: Object,
      required: true
    },
    categories: {
      type: Object,
      required: true
    }
  },
  setup(props){
    // create editable object and use watchEffect
    const transData = ref({})
    watchEffect(() => {
      transData.value = props.transaction
      // whatever this doesn't work because WHYNOT
      // transData.dollars = props.transaction.amount / 100
    })
    return {
      transData,
      async update() {
        // console.log(props.transaction)
        // send off request to update transaction
        try {
          // use the editable object instead
          await transactionsService.update(transData.value)
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
}
</script>

<!-- 
  setup(props) {
    const carData = ref({});
    // NOTE the watcheffect runs when a piece of data inside it changes
    // in this case props.edit car was accessed so if props.editCar changes it runs again
    watchEffect(() => {
      logger.log(props.editCar);
      carData.value = props.editCar;
    });
    return {
      carData, -->


<!-- // TODO undo this -->
<style lang="postcss" scoped>
  input {
    color-scheme: dark;
  }

  input::placeholder {
    @apply text-slate-50;
    opacity: 1;
  }

  input:hover::placeholder {
    @apply text-stone-900;
    opacity: 1;
  }

  input:hover {
    color-scheme: light;
  }
</style>