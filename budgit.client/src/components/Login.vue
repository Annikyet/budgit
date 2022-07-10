<template>
  <span class="flex self-start md:self-end">
    <button class="hover:text-green-300" @click="login"
      v-if="!user.isAuthenticated">
      Login
    </button>

    <div class="flex" v-else>
      <router-link :to="{ name: 'Account' }" class="self-start md:self-end">
        <span class="text-xs self-start md:self-end md:text-base md:mx-3">{{ account.name }}</span>
      </router-link>
      <div class="hidden md:block hover:text-green-300 cursor-pointer" @click="logout">
        <i class="mdi mdi-logout"></i>
      </div>
    </div>
  </span>
</template>


<script>
import { computed } from "@vue/reactivity";
import { AppState } from "../AppState";
import { AuthService } from "../services/AuthService";
export default {
  setup() {
    return {
      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      async login() {
        AuthService.loginWithPopup();
      },
      async logout() {
        AuthService.logout({ returnTo: window.location.origin });
      },
    };
  },
};
</script>


<style lang="scss" scoped>
// @import "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css";
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}

.dropdown-menu.show {
  transform: scale(1);
}

.hoverable {
  cursor: pointer;
}
</style>
