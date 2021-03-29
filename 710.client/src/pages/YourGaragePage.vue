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
        <UserVehicles v-for="vehicle in state.userVehicles" :key="vehicle" :vehicle="vehicle" />
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
      vehicles: computed(() => AppState.vehicles),
      userVehicles: computed(() => AppState.userVehicles)
    })

    onMounted(async() => {
      await vehicleService.getAllVehicles(state.user._id)
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
