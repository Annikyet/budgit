<template>
  <nav class="flex justify-between items-end w-screen bg-stone-800 py-2 pr-3">
    <div class="flex flex-wrap md:flex-nowrap justify-start items-end">
      <router-link :to="{ name: 'Overview' }">
        <h3 class="order-1 text-4xl mr-10 text-green-300 hover:text-slate-50">Budg.it</h3>
        <!-- text-rose-700: color of bad -->
      </router-link>
      <div class="flex order-3 md:order-2">
        <router-link :to="{ name: 'Overview' }">
        <p class="max-w-5/12 mx-3">Overview</p>
      </router-link>
      <router-link :to="{ name: 'Transactions' }">
        <p class="max-w-5/12 mx-3">Transactions</p>
      </router-link>
      </div>
    </div>
    <Login class="order-2 md:order-3 md:block" />
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

.router-link-active {
  @apply text-green-300 hover:text-slate-50;
}
</style>
