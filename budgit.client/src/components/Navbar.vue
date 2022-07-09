<template>
  <nav class="flex justify-between items-end w-screen bg-stone-800 p-2">
    <div class="flex justify-start items-end">
      <router-link :to="{ name: 'Overview' }">
        <h3 class="text-4xl mr-10 text-green-300 hover:text-slate-50">Budg.it</h3>
      </router-link>
      <router-link :to="{ name: 'Transactions' }">
        <p class="hidden md:block">Transactions</p>
      </router-link>
    </div>
    <Login class="hidden md:block" />
    <div class="block md:hidden mdi mdi-menu"></div>
  </nav>





</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
a:hover {
  text-decoration: none;
}

.nav-link {
  text-transform: uppercase;
}

.navbar-nav .router-link-exact-active {
  border-bottom: 2px solid var(--bs-success);
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
</style>
