<template>
  <div class="component flex flex-wrap md:flex-nowrap justify-between bg-stone-800 mb-2">
    <div class="pr-4">
      <input type="date" v-model="transaction.date" class="text-slate-50 bg-stone-800 w-32 hover:bg-green-300 hover:text-stone-900">
    </div>
    <div class="pr-4">
      <input type="number" v-model="transaction.amount" :placeholder="transaction.amount" class="w-24 bg-stone-800 text-slate-50 hover:bg-green-300 hover:text-stone-900">
    </div>
    <div class="pr-4">
      <input type="text" v-model="transaction.payee" :placeholder="transaction.payee" class="text-slate-50 bg-stone-800 w-32 hover:bg-green-300 hover:text-stone-900">
    </div>
    <div class="pr-4">
      <select v-model="transaction.category" class="text-slate-50 bg-stone-800 w-36 hover:bg-green-300 hover:text-stone-900">
        <option value="" selected>{{transaction.category}}</option>
        <option v-for="c in 10" value="meow">meow</option>
      </select>
    </div>
    <div class="pr-4">
      <input type="text" v-model="transaction.comment" :placeholder="transaction.comment" class="text-slate-50 bg-stone-800 w-48 hover:bg-green-300 hover:text-stone-900">
    </div>
    <div>
      <button class="text-slate-50 bg-stone-800 w-16 hover:bg-green-300 hover:text-stone-900" @click="update">
        Save
      </button>
      {{transaction}}
    </div>
  </div>
</template>


<script>
// import { logger } from '../utils/Logger'
import { transactionsService } from '../services/TransactionsService'

export default {
  // TODO there's probably something wrong with this...
  props: {
    transaction: {
      type: Object,
      required: true
    }
  },
  setup(props){
    return {
      async update() {
        console.log(props.transaction)
        // send off request to update transaction
        try {
          await transactionsService.update(props.transaction)
        } catch (error) {
          console.log(error)
        }
      }
    }
  }
}
</script>


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