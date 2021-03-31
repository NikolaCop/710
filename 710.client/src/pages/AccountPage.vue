<template>
  <div class="container-fluid bg-dark">
    <div class="row">
      <div class="col-12 text-center">
        <h1 class="text-light">
          Account
        </h1>
      </div>
    </div>
    <div class="about text-center text-white">
      <div class="row mt-5 justify-content-center">
        <div class="col-9 bg-info col-sm-9 col-md-8 col-lg-7 col-xl-6 card rounded-card p-3">
          <div class="row justify-content-around">
            <div class="col-3 mr-5">
              <img class="rounded-image mt-1" :src="account.picture" alt="" />
            </div>
            <div class="col-sm-5 col-sm-4 align-items-center mr-2 mt-1">
              <h4 class="text-light mt-3">
                <i class="fa fa-user-circle-o mr-2" aria-hidden="true"></i>
                {{ account.name }}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="row mt-3 justify-content-center">
        <div class="col-9 bg-primary col-sm-9 col-md-8 col-lg-7 col-xl-6 card rounded-card p-3">
          <div class="row justify-content-around">
            <div class="col-3 mr-5">
            </div>
            <div class="col-sm-5 col-sm-4 align-items-center mr-2 mt-1">
              <h4 class="text-light mt-3">
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="bg-warning col-9 col-sm-9 col-md-8 col-lg-7 col-xl-6 ml-2 card mt-3 p-3 rounded-card">
          <div class="row justify-content-center">
            <div class="col-10 p-2 mt-2 mb-2">
              <h6 class="mb-3 text-dark">Fleet Health Status</h6>
              <div class="progress">
                <div class="progress-bar bg-success"
                     role="progressbar"
                     style="width: 50%"
                     aria-valuenow="56"
                     aria-valuemin="0"
                     aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
          <div class="row mt-2 justify-content-around">
            <div class="col-5 col-lg-4 p-4 mt-1 mb-1 card rounded-card bg-info shadow-lg">
              <i class="fa fa-arrows text-light" aria-hidden="true"></i>
            </div>
            <div class="col-5 col-lg-4 p-4 mt-1 mb-1 card rounded-card bg-info shadow-lg">
              <i class="fa fa-chevron-up text-light" aria-hidden="true"></i>
            </div>
            <div class="col-11 col-lg-9 p-4 mt-2 mb-2 card rounded-card bg-primary shadow-lg">
              <i class="fa fa-arrows text-light" aria-hidden="true"></i>
            </div>
            <div class="col-5 col-lg-4 p-4 mt-1 mb-1 card rounded-card bg-info shadow-lg">
              <i class="fa fa-chevron-up text-light" aria-hidden="true"></i>
            </div>
            <div class="col-5 col-lg-4 p-4 mt-1 mb-1 card rounded-card bg-info shadow-lg">
              <i class="fa fa-arrows text-light" aria-hidden="true"></i>
            </div>
            <div class="col-11 col-lg-9  p-4 mt-2 mb-2 card rounded-card bg-primary shadow-lg">
              <i class="fa fa-chevron-up text-light" aria-hidden="true"></i>
            </div>
            <div class="col-10 mt-3">
            </div>
          </div>
        </div>
      </div>
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
.rounded-image{
  border-radius: 3rem;
}
.rounded-card{
  border-radius: 1rem;
}
.rounded-card-image{
  border-radius: 4rem;
}
</style>
