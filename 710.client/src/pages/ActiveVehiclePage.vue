<template>
  <div class="container-fluid bg-dark">
    <div class="row justify-content-center mt-5">
      <div class="col-12 text-center text-light mb-4 mt-4">
        <h4>Sell Your Vehicle</h4>
      </div>
      <div class="col-8 col-sm-7 col-md-6 col-lg-5 col-xl-3 text-center col-md-6 card align-items-center bg-primary vehicle-rounded">
        <div class="row justify-content-center">
          <div class="col-10 col-sm-8 col-md-8 col-lg-8 col-xl-8">
            <img src="../assets/img/porsche.png" class="img-vehicle card-img-top img-fluid animate__animated animate__fadeInLeft animate__delay-0.75s" id="carPicButton" alt="">
          </div>
        </div>
      </div>
      <div class="col-12 text-center  mt-4 text-light">
        <h6 class="text-warning">
          {{ state.vehicle.year }} {{ state.vehicle.make }} {{ state.vehicle.model }}
        </h6>
      </div>
    </div>
    <div class="row justify-content-center">
      <div class="col-12 text-center mt-3">
        <button v-if="state.vehicle.selling === false" class="btn btn-danger" @click="sellVehicle">
          Sell
        </button>
        <button v-else class="btn btn-danger" @click="stopSellingVehicle">
          Stop Selling
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { vehicleService } from '../services/VehicleService'
import { useRoute, useRouter } from 'vue-router'
import { logger } from '../services/utils/Logger'
export default {
  name: 'ActiveVehiclePage',
  setup() {
    const router = useRouter()
    const route = useRoute()
    const state = reactive({
      vehicle: computed(() => AppState.activeVehicle),
      user: computed(() => AppState.user)
    })

    onMounted(async() => {
      await vehicleService.getVehicle(route.params.id)
      logger.log(AppState.vehicle)
    })
    return {
      state,
      route,
      async sellVehicle() {
        state.vehicle.selling = true
        await vehicleService.editVehicle(state.vehicle.id, state.vehicle)
        router.push({ name: 'MarketplacePage' })
      }
    }
  }
}
</script>

<style scoped>
.vehicle-rounded{
  border-radius: 8rem;
}
</style>
