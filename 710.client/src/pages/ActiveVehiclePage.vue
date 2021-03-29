<template>
  <div class="active-vehicle-page containter-fluid">
    <div class="col-12">
      <h2>Active Vehicle Page</h2>
      <div class="col-12 col-md-6 card align-items-center bg-primary vehicle-rounded">
        <img src="../assets/img/porsche.png" class="card-img-top w-50 img-fluid" id="carPicButton" alt="">
      </div>
      <p>{{ state.vehicle }}</p>
    </div>
    <div class="button">
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { AppState } from '../AppState'
import { vehicleService } from '../services/VehicleService'
import { useRoute } from 'vue-router'
export default {
  name: 'ActiveVehiclePage',
  setup() {
    const route = useRoute()
    const state = reactive({
      vehicle: computed(() => AppState.activeVehicle),
      user: computed(() => AppState.user)
    })

    onMounted(async() => {
      await vehicleService.getVehicle(route.params.id)
      console.log(AppState.vehicle)
    })
    return {
      state,
      route
    }
  }
}
</script>

<style scoped>
.vehicle-rounded{
  border-radius: 8rem;
}
</style>
