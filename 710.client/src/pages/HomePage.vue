<template>
  <div class="container-fluid bg-dark">
    <div class="row justify-content-center height-welcome">
      <div class="col-xs-12 text-center text-white">
        <h3 class="welcome-size">
          Welcome to 710
        </h3>
      </div>
    </div>
    <div class="row p-3 justify-content-center">
      <div class="col-xs-10 col-sm-9 col-md-8 col-lg-7 col-xl-5">
        <router-link :to="{name: 'YourCarPage', params: { id: id }}">
          <div class="card align-items-center bg-primary vehicle-rounded">
            <img src="../assets/img/porsche.png" class="card-img-top w-50 img-fluid" id="carPicButton" alt="">
          </div>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center mt-5">
        <h6 class="text-light pam-size">
          Personal <span class="text-primary">Auto</span> Maintenance <span class="text-primary">Application</span>
        </h6>
      </div>
    </div>
    <div v-if="state.user.isAuthenticated" class="row button-row-height justify-content-center">
      <div class="col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 text-center">
        <router-link :to="{name: 'YourGaragePage', params: { id: id }}">
          <button type="button" class="btn btn-light text-font-weight button-rounded-garage">
            Garage Page
          </button>
        </router-link>
      </div>
      <div class="col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 text-center">
        <router-link :to="{name: 'Account', params: { id: id }}">
          <button type="button" class="btn btn-light text-font-weight button-rounded-account">
            Account Page
          </button>
        </router-link>
      </div>
    </div>
    <div v-else class="row button-row-height justify-content-center">
      <div class="col-5 text-center">
        <button type="button" class="btn btn-light text-font-weight button-rounded-garage">
          Sign Up
        </button>
      </div>
      <div class="col-5 text-center">
        <button type="button" class="btn btn-light text-font-weight button-rounded-account">
          Log In
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'

export default {
  name: 'Home',
  setup() {
    const state = reactive({
      user: computed(() => AppState.user)
    })
    return {
      state
    }
  }
}
</script>

<style scoped lang="scss">
// .home{
//   text-align: center;
//   user-select: none;
//   > img{
//     height: 200px;
//     width: 200px;
//   }
//   #carPicButton{
//   height: 150px;
//   width: 300px;
//   }
// }
.vehicle-rounded{
  border-radius: 8rem;
}
@media (max-width: 576px) {
.height-welcome{
  margin-top: 7rem;
  margin-bottom: 4rem;
}
}
@media (min-width: 576px) {
.height-welcome{
  margin-top: 3rem;
  margin-bottom: 4rem;
}
}
.button-rounded-garage{
  border-radius: 1rem;
}
.button-rounded-account{
  border-radius: 1rem;
}
.text-font-weight{
  font-weight: 500;
}
@media (min-width: 576px) {
.welcome-size{
  font-size: 1.75rem;
}
}
@media (min-width: 767.98px) {
.welcome-size{
  font-size: 2.5rem;
}
}
@media (min-width: 991.98px) {
.welcome-size{
  font-size: 3rem;
}
}
@media (min-width: 576px) {
.pam-size{
  font-size: 1.25rem;
}
}
@media (min-width: 767.98px) {
.pam-size{
  font-size: 1.5rem;
}
}
@media (min-width: 991.98px) {
.pam-size{
  font-size: 2rem;
}
}
@media (max-width: 576px) {
.button-row-height{
  margin-top: 3rem;
}
}
@media (min-width: 576px) {
.button-row-height{
  margin-top: 4rem;
}
}
@media (min-width: 767.98px) {
.button-row-height{
  margin-top: 5rem;
}
}
@media (min-width: 991.98px) {
.button-row-height{
  margin-top: 6rem;
}
}
</style>
