<template>
  <div class="container-fluid bg-dark">
    <div class="row">
      <div class="col-12 text-center">
        <h2 class="text-light">
          Account
        </h2>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-8">
        <div class="card bg-primary">
          <div class="row">
            <div class="col-3">
              <div class="card bg-info">
                <img class="rounded" :src="account.picture" alt="" />
              </div>
            </div>
            <div class="col-7">
              <div class="card bg-info text-light">
                <h6>{{ account.name }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about text-center text-white">
      <h1>Welcome {{ account.name }}</h1>
      <img class="rounded" :src="account.picture" alt="" />
      <p>{{ account.email }}</p>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Account',
  setup() {
    return {
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
