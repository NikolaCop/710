<template>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-12">
        <h6>Hello from the marketplace</h6>
      </div>
    </div>
    <div class="row">
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
      vehicles: computed(() => AppState.vehicles),
      marketPlace: computed(() => AppState.marketPlace)
    })
    onMounted(async() => {
      await vehicleService.getAllMarketVehicles()
    })
    return {
      state
    }
  }

}
</script>

<style>

</style>
