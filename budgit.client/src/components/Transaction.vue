<template>
  <div class="component flex flex-wrap md:flex-nowrap justify-between bg-stone-800 mb-2">
    <div class="pr-4">
      <input type="date" v-model="date" placeholder="2022-07-11" class="text-slate-50 bg-stone-800 w-32 hover:bg-green-300 hover:text-stone-900">
    </div>
    <div class="pr-4">
      <input type="number" v-model="amount" placeholder="$0.00" class="w-24 bg-stone-800 text-slate-50 hover:bg-green-300 hover:text-stone-900">
    </div>
    <div class="pr-4">
      <input type="text" v-model="payee" placeholder="Payee" class="text-slate-50 bg-stone-800 w-32 hover:bg-green-300 hover:text-stone-900">
    </div>
    <div class="pr-4">
      <select v-model="category" class="text-slate-50 bg-stone-800 w-36 hover:bg-green-300 hover:text-stone-900">
        <option value="" selected>UnCATegorized</option>
        <option v-for="c in 10" value="meow">meow</option>
      </select>
    </div>
    <div class="pr-4">
      <input type="text" v-model="comment" placeholder="Comments" class="text-slate-50 bg-stone-800 w-48 hover:bg-green-300 hover:text-stone-900">
    </div>
    <div>
      <button class="text-slate-50 bg-stone-800 w-16 hover:bg-green-300 hover:text-stone-900">
        Save
      </button>
    </div>
  </div>
</template>


<script>
export default {
  setup(){
    return {
      date: '2022-07-11'
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