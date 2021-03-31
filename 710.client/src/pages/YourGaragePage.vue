<template>
  <div class="container-fluid bg-dark text-white">
    <div class="your-garage-page">
      <div class="row mt-4 justify-content-center">
        <div class="col-10 mb-3 text-center">
          <h3 class="garage-size">Your Garage</h3>
        </div>
        <div class="col-10 mb-3">
          <div class="row justify-content-center">
            <button class="btn btn-warning button-size card-rounded m-1" type="button" id="createVehicle" data-toggle="modal" data-target="#add-vehicle">
              <i class="fa fa-plus-circle" aria-hidden="true"></i> Add Vehicle
            </button>
            <AddVehicleModal />
          </div>
        </div>
      </div>
      <div class="row car justify-content-center">
        <Vehicle v-for="vehicle in state.vehicles" :key="vehicle.id" :vehicle="vehicle" />
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
.card-rounded{
  border-radius: .75rem;
}
@media (min-width: 576px) {
.garage-size{
  font-size: 1.75rem;
}
}
@media (min-width: 767.98px) {
.garage-size{
  font-size: 2.5rem;
}
}
@media (min-width: 991.98px) {
.garage-size{
  font-size: 3rem;
}
}
@media (min-width: 576px) {
.button-size{
  font-size: 1.3rem;
}
}
@media (min-width: 767.98px) {
.button-size{
  font-size: 1.4rem;
}
}
@media (min-width: 991.98px) {
.button-size{
  font-size: 1.5rem;
}
}

</style>
