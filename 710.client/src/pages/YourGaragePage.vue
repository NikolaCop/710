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
      <div>
        <button class="" type="button" id="createVehicle" data-toggle="modal" data-target="#add-vehicle">
          <i class="fa fa-plus-circle" aria-hidden="true"></i>
        </button>
        <AddVehicleModal />
      </div>
      <div class="row">
        <div class="col-12 text-center my-2">
          <!-- vfor every car -->

          <router-link :to="{name: 'YourCarPage', params: { id: vehicle.id }}" v-for="vehicle in state.vehicles" :key="vehicle.id">
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
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { vehicleService } from '../services/VehicleService'
export default {
  name: 'YourGaragePage',
  props: [],
  setup() {
    const state = reactive({

      user: computed(() => AppState.user),
      account: computed(() => AppState.account),
      vehicles: computed(() => AppState.vehicles)
    })

    onMounted(async() => {
      await vehicleService.getAllVehicles()
    })
    return {
      state,
      async createVehicle() {
        state.newVehicle.vehicles = state.vehicles
        state.newVehicle.user = state.user
        await vehicleService.createVehicle(state.newVehicle)
        state.newVehicle = {}
      }
    }
  },
  components: {}
}
</script>
<style scoped>
#carPicButton {
  width: 530px;
  height: 280px;
}

</style>
