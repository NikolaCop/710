<template>
  <div class="container-fluid bg-dark text-white">
    <div class="your-garage-page">
      <div class="row">
        <div class="col-12 text-center">
          <div class="card bg-primary">
            Garage Page
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center my-2">
          <router-link :to="{name: 'YourCarPage', params: { id: id }}">
            <button type="button" class="btn btn-primary">
              <img src="https://crls.io/s/evox%2Fcolor_2400_001_png%2FMY2020%2F14061%2F14061_cc2400_001_H2.png/feature/n/porsche-911.png" id="carPicButton" alt="">
            </button>
          </router-link>
        </div>
      </div>
      <div class="row">
        <div class="col-12 text-center my-2">
          <router-link :to="{name: 'YourCarPage', params: { id: id }}">
            <button type="button" class="btn btn-primary">
              <img src="https://crls.io/s/evox%2Fcolor_2400_001_png%2FMY2020%2F14061%2F14061_cc2400_001_H2.png/feature/n/porsche-911.png" id="carPicButton" alt="">
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'YourGaragePage',
  props: [],
  setup() {
    const state = reactive({

      user: computed(() => AppState.user)
    })
    return {
      state
    }
  },
  components: {}
}
</script>
<style scoped>
#carPicButton {
  width: 500px;
  height: 300px;
}

</style>
