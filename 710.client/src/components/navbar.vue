<template>
  <div class="container-fluid bg-dark">
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
    </router-link>
    <div class="row margin-l-1 justify-content-around">
      <div class="col-1 mt-1 card card-navbar-blue bg-primary">
      </div>
      <div class="col-1 mt-1 card card-navbar-white">
      </div>
      <div class="col-9 mt-1 card card-navbar-primary bg-primary">
      </div>
    </div>
    <div class="row">
      <div class="col-1 margin-left">
        <h1 class="text-light text-center mt-1">
          <button
            class="navbar-toggler text-light"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <h2>710</h2>
            <span class="navbar-toggler-icon" />
          </button>
        </h1>
      </div>
      <div class="collapse ml-2 mt-2 col-10 text-right navbar-collapse" id="navbarText">
        <span class="navbar-text">
          <button
            class="btn btn-outline-primary text-uppercase"
            @click="login"
            v-if="!user.isAuthenticated"
          >
            Login
          </button>

          <div class="dropdown text-light" v-else>
            <div
              class="dropdown-toggle"
              @click="state.dropOpen = !state.dropOpen"
            >
              <img
                :src="user.picture"
                alt="user photo"
                height="40"
                class="rounded"
              />
              <span class="mx-3 text-light">{{ user.name }}</span>
            </div>
            <div
              class="dropdown-menu p-0 list-group w-100"
              :class="{ show: state.dropOpen }"
              @click="state.dropOpen = false"
            >
              <router-link :to="{ name: 'Account' }">
                <div class="list-group-item bg-dark text-lightlist-group-item-action hoverable">
                  Account
                </div>
              </router-link>
              <div
                class="list-group-item bg-dark text-light list-group-item-action hoverable"
                @click="logout"
              >
                logout
              </div>
            </div>
          </div>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { AuthService } from '../services/AuthService'
import { AppState } from '../AppState'
import { computed, reactive } from 'vue'
export default {
  name: 'Navbar',
  setup() {
    const state = reactive({
      dropOpen: false
    })
    return {
      state,
      user: computed(() => AppState.user),
      async login() {
        AuthService.loginWithPopup()
      },
      async logout() {
        await AuthService.logout({ returnTo: window.location.origin })
      }
    }
  }
}
</script>

<style scoped>
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
a:hover {
  text-decoration: none;
}
.nav-link{
  text-transform: uppercase;
}
.nav-item .nav-link.router-link-exact-active{
  color: var(--primary);
}
.card-navbar-blue{
  width: 20px;
  height: 15px;
  border-radius: 5rem;
}
.card-navbar-white{
  width: 20px;
  height: 15px;
  border-radius: 5rem;
}
.card-navbar-primary{
  width: 250px;
  height: 15px;
  border-radius: 5rem;
}
@media (min-width: 576px) {
  .margin-left{
  margin-left: 1rem;
  }
}
@media (max-width: 576px) {
  .margin-left{
  margin-left: -1rem;
  }
}
</style>
