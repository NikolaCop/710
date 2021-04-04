<template>
  <div v-if="state.vehicles.length > 0" class="container-fluid bg-dark">
    <div class="row justify-content-center mt-5">
      <div class="col-12 text-center  mt-2">
        <h3 class="text-light" id="font">
          The Marketplace
        </h3>
      </div>
    </div>
    <div class="row justify-content-center mt-1">
      <SellVehicle v-for="vehicle in state.vehicles" :key="vehicle.id" :vehicle="vehicle" />
    </div>
  </div>
  <div v-else class="container-fluid bg-dark">
    <div class="row justify-content-center mt-5">
      <div class="col-12 text-center  mt-2">
        <h3 class="text-light" id="font">
          The Marketplace
        </h3>
      </div>
      <div class="col-10 text-warning fancy text-center mt-3">
        <h6>Sorry, there are no cars being sold right now please come back later!</h6>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { vehicleService } from '../services/VehicleService'
import { animationService } from '../services/AnimationService'
export default {
  name: 'MarketplacePage',
  setup() {
    const state = reactive({
      vehicles: computed(() => AppState.marketVehicles),
      marketPlace: computed(() => AppState.marketPlace)
    })
    onMounted(() => {
      vehicleService.getAllMarketVehicles()
    })
    onMounted(() => { animationService.personalAutomation() })
    return {
      state
    }
  }

}
</script>

<style>
#font{
  font-family: 'Orbitron', sans-serif!important;
}

</style>
