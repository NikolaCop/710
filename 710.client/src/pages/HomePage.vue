<template>
  <div class="home flex-grow-1 d-flex flex-column align-items-center justify-content-center bg-dark">
    <div class="row">
      <div class="col-12 text-white">
        Home Page
      </div>
    </div>
    <div class="row p-3">
      <div class="col">
        <router-link :to="{name: 'YourCarPage', params: { id: id }}">
          <button type="button" class="btn btn-primary">
            <img src="https://crls.io/s/evox%2Fcolor_2400_001_png%2FMY2020%2F14061%2F14061_cc2400_001_H2.png/feature/n/porsche-911.png" id="carPicButton" alt="">
          </button>
        </router-link>
      </div>
    </div>
    <div class="row">
      <div class="col-6">
        <router-link :to="{name: 'YourGaragePage', params: { id: id }}">
          <button type="button" class="btn btn-light">
            To Garage Page
          </button>
        </router-link>
      </div>
      <div class="col-6">
        <router-link :to="{name: 'Account', params: { id: id }}">
          <button type="button" class="btn btn-light">
            To Your Account Page
          </button>
        </router-link>
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
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
  #carPicButton{
height: 150px;
width: 300px;
  }
}
</style>
