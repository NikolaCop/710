<template>
  <div class="container-fluid bg-dark" id="img-paint">
    <div class="row justify-content-center height-welcome">
      <div class="col-xs-12 text-center">
        <h3 class="welcome-size text-light" id="font">
          Welcome to <b class="text-primary seventen"> 710 </b>
        </h3>
      </div>
    </div>
    <div class="row p-3 justify-content-center">
      <div class="col-xs-10 col-sm-9 col-md-8 col-lg-7 col-xl-5">
        <!-- <router-link :to="{name: 'YourVehiclePage', params: { id: id }}"> -->
        <div class="card align-items-center bg-primary vehicle-rounded">
          <img src="../assets/img/porsche.png" class="card-img-top w-50 img-fluid animate__animated animate__fadeInLeft" id="carPicButton" alt="">
        </div>
        <!-- </router-link> -->
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center mt-5">
        <h6 class="text-warning pam-size fancy">
          Personal Auto Maintenance Application
        </h6>
      </div>
    </div>
    <div v-if="state.user.isAuthenticated" class="row button-row-height justify-content-center">
      <div class="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 text-center">
        <router-link :to="{name: 'YourGaragePage', params: { id: id }}">
          <button type="button" class="btn btn-info text-font-weight button-size button-rounded-garage">
            Garage
          </button>
        </router-link>
      </div>
      <div class="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 px-1 text-center">
        <router-link :to="{name: 'MarketplacePage'}">
          <button type="button" class="btn btn-info  text-font-weight button-size button-rounded-garage">
            Marketplace
          </button>
        </router-link>
      </div>
      <!-- <div class="col-4 col-sm-4 col-md-3 col-lg-2 col-xl-2 text-center">
        <router-link :to="{name: 'Account', params: { id: id }}">
          <button type="button" class="btn btn-info text-font-weight button-size button-rounded-account">
            Account
          </button>
        </router-link>
      </div> -->
    </div>
    <div v-else class="row button-row-height justify-content-center">
      <div class="col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 text-center">
        <button type="button" @click="login" class="btn btn-info text-font-weight button-size button-rounded-garage">
          Sign Up
        </button>
      </div>
      <div class="col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 text-center">
        <button type="button" @click="login" class="btn btn-info text-font-weight button-size button-rounded-account">
          Log In
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import 'animate.css'
import { animationService } from '../services/AnimationService'
import { AuthService } from '../services/AuthService'

export default {
  name: 'Home',
  setup() {
    const state = reactive({
      user: computed(() => AppState.user),
      loading: computed(() => AppState.loading)
    })
    onMounted(async() => { await animationService.personalAutomation() })
    onMounted(() => { animationService.sevenTenAutomation() })
    return {
      state,
      async login() {
        AuthService.loginWithPopup()
      }
    }
  }
}
</script>

<style scoped lang="scss">
.border-light{
  border-width: .5rem!important;
  border-color: rgb(255, 255, 255)!important;
}
span{
  opacity: 0!important;
  transition: all 0.1s ease!important;
}
span.fadeText{
  opacity: 1!important;
}
// @media (min-width: 1240px) {
// .img-gif-car{
//   background-image: url('../assets/img/Gradient.png');
//   background-size: contain;
//   background-repeat: no-repeat;
// }
// }

.vehicle-rounded{
  border-radius: 8rem;
}
#font{
  font-family: 'Orbitron', sans-serif!important;
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
  margin-top: 7rem;
}
}
@media (min-width: 767.98px) {
.welcome-size{
  font-size: 2.5rem;
  margin-top: 5rem;
}
}
@media (min-width: 991.98px) {
.welcome-size{
  font-size: 3rem;
  margin-top: 7rem;
}
}
@media (min-width: 576px) {
.button-size{
  font-size: 1.25rem;
}
}
@media (min-width: 767.98px) {
.button-size{
  font-size: 1.5rem;
}
}
@media (min-width: 991.98px) {
.button-size{
  font-size: 1.5rem;
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
