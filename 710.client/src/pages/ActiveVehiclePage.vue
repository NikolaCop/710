<template>
  <div class="active-vehicle-page containter-fluid">
    <div class="col-12">
      <Vehicle v-for="vehicle in state.vehicle" :key="vehicle.id" :vehicle="vehicle" />
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
  props: [],
  setup() {
    const route = useRoute()
    const state = reactive({
      vehicle: computed(() => AppState.activeVehicle),
      user: computed(() => AppState.user)
    })

    onMounted(async() => {
      await vehicleService.getVehicle(route.params.id)
    })
    return {
      state,
      route
    }
  },
  components: {}
}
</script>
