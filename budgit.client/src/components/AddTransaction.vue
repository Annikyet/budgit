<template>
  <form class="component flex flex-wrap md:flex-nowrap justify-between bg-stone-700 mb-2" @submit.prevent="create">
    <div class="pr-4">
      <input type="date" v-model="transData.date" class="text-slate-50 bg-stone-700 w-32 hover:bg-green-200 hover:text-stone-900">
    </div>
    <div class="pr-4">
      <!-- TODO this is bad! don't manipulate the prop -->
      <!-- Look at cars in gregslist? -->
      <!-- use editable object -->
      <span class="flex">
        $
        <input type="number" v-model="transData.amount" placeholder="Amount" class="w-24 bg-stone-700 text-slate-50 hover:bg-green-200 hover:text-stone-900">
      </span>
    </div>
    <div class="pr-4">
        <input type="text" v-model="transData.payee" placeholder="Payee" class="text-slate-50 bg-stone-700 w-32 hover:bg-green-200 hover:text-stone-900">
    </div>
    <div class="pr-4">
      <select v-model="transData.categoryId" class="text-slate-50 bg-stone-700 w-36 hover:bg-green-200 hover:text-stone-900">
        <option value="" disabled selected>Category</option>
        <!-- cat?.name - null coalescence - returns value iff object is valid -->
        <!-- TODO there's an error here but it works??? -->
        <option v-for="c in categories" :value="c._id">{{c.name}}</option>
      </select>
    </div>
    <div class="w-full pr-4">
      <input type="text" v-model="transData.comment" placeholder="Comment" class="text-slate-50 bg-stone-700 w-full hover:bg-green-200 hover:text-stone-900">
    </div>
    <div>
      <button class="text-slate-50 bg-stone-700 px-2 hover:bg-green-200 hover:text-stone-900" action="submit">
        Add
      </button>
    </div>
  </form>
</template>


<script>
// import { logger } from '../utils/Logger'
import { transactionsService } from '../services/TransactionsService'
import { getDollars } from '../utils/Dollars'
import { computed, reactive, onMounted, ref, watchEffect } from "vue";

export default {
  // TODO there's probably something wrong with this...
  props: {
    categories: {
      type: Object,
      required: true
    }
  },
  setup(props){
    // // create editable object and use watchEffect
    // const transData = ref({})
    // watchEffect(() => {
    //   transData.value = props.transaction
    //   // whatever this doesn't work because WHYNOT
    //   // transData.dollars = props.transaction.amount / 100
    // })
    return {
      transData: {
        date: new Date().toISOString().slice(0,10),
        amount: 0,
        payee: '',
        categoryId: '',
        comment: ''
      },
      // async update() {
      //   // console.log(props.transaction)
      //   // send off request to update transaction
      //   try {
      //     // use the editable object instead
      //     await transactionsService.update(transData.value)
      //   } catch (error) {
      //     console.log(error)
      //   }
      // }
      async create() {
        console.log('create triggered')
        try {
          // TODO WHY is it creating twice? (FIXED)
          // TODO certain requests are 400 errors - sanitize
          await transactionsService.create(this.transData)
          // TODO empty after creation (not working)
          this.transData = {
            date: new Date().toISOString().slice(0,10),
            amount: 0,
            payee: '',
            categoryId: '',
            comment: ''
          }
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