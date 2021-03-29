<template>
  <div class="col-12 Vehicle text-white">
    <div class="row">
      <router-link :to="{name: 'YourVehiclePage', params: { id: vehicle.id }}">
        <div class="col-12">
          <h3>
            {{ vehicle.make }}
          </h3>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { computed, reactive } from 'vue'
import { AppState } from '../AppState'
export default {
  name: 'Vehicle',
  props: {
    vehicle: { type: Object, required: true }
  },
  setup() {
    const state = reactive({
      user: computed(() => AppState.user),
      vehicles: computed(() => AppState.vehicles)
    })
    return {
      state
    }
  },
  components: {}
}
</script>
