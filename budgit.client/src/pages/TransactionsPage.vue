<template>
  <div class="component">
    <div class="flex mt-6 md:mx-40 flex-col">
      <h1>Transactions Container</h1>
      <Transaction v-for="t in 10" />
    </div>
  </div>
</template>


<script>
export default {
  setup(){
    return {}
  }
}
</script>


<style lang="scss" scoped>

</style>