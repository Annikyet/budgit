<template>
  <span class="navbar-text">
    <button class="btn selectable text-success lighten-30 text-uppercase my-2 my-lg-0" @click="login"
      v-if="!user.isAuthenticated">
      Login
    </button>

    <div class="" v-else>
      <div class="flex" id="authDropdown">
        <router-link :to="{ name: 'Account' }">
          <div class="flex">
            <div v-if="account.picture" class="">
              <img :src="account.picture" alt="account photo" height="40" class="max-h-8" />
            </div>
            <span class="mx-3 text-success lighten-30">{{ account.name }}</span>
          </div>
        </router-link>
        <div class="hover:text-green-300" @click="logout">
          <i class="mdi mdi-logout"></i>
          <!-- logout -->
        </div>
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
