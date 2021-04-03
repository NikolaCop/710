<template>
  <div class="container-fluid bg-dark">
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
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { vehicleService } from '../services/VehicleService'
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
